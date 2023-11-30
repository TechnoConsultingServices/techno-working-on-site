import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Form.module.sass";
import Field from "@/components/Field";
import Select from "@/components/Select";
import { sendContactForm } from "lib/api/api";

type FormProps = {};

type FormFinalProps = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service?: string;
  budget?: string;
  description: string;
};

type StatusMessageProps = {
  status: string;
  message: string;
};

const Form = ({}: FormProps) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<StatusMessageProps>({
    status: "",
    message: "",
  });

  const optionsService = [
    {
      title: "Marketing and Communication Plan",
      value: "marketing-and-communication-plan",
    },
    {
      title: "Branding",
      value: "branding",
    },
    {
      title: "Digital Campaigns",
      value: "digital-campaigns",
    },
    {
      title: "Programmatic Advertising",
      value: "programmatic-advertising",
    },
    {
      title: "Marketing as a Service",
      value: "marketing-as-a-service",
    },
    {
      title: "Website",
      value: "website",
    },
    {
      title: "Innovation Spirit",
      value: "innovation-spirit",
    },
    {
      title: "Public Realations",
      value: "public-realations",
    },
  ];

  const optionsBudget = [
    {
      title: "<$50k",
      value: "<$50k",
    },
    {
      title: "$50k-100k",
      value: "$50k-100k",
    },
    {
      title: "$100k-200k",
      value: "$100k-200k",
    },
    {
      title: "$200k+",
      value: "$200k+",
    },
  ];

  const handleChangeService = (value: string) => setService(value);
  const handleChangeBudget = (value: string) => setBudget(value);

  const handleFormSubmit = async (data: FormFinalProps) => {
    setIsLoading(true);
    try {
      await sendContactForm(data);
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setService("");
      setBudget("");
      setDescription("");
      setStatusMessage({
        status: "Success",
        message: "Thank you! Message sent successfully.",
      });
    } catch (error) {
      setStatusMessage({
        status: "Failure",
        message: "Something went wrong! Please try again later.",
      });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      if (statusMessage) {
        setStatusMessage({
          status: "",
          message: "",
        });
      }
    }, 8000);
  }, [statusMessage]);

  return (
    <form
      data-aos='fade-up'
      data-aos-duration='2000'
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        const values = {
          name,
          email,
          phone,
          company,
          service,
          budget,
          description,
        };
        handleFormSubmit(values);
      }}>
      <Field
        className={styles.field}
        number='01'
        label='Your name'
        placeholder='Type your full name'
        value={name}
        onChange={(e: any) => setName(e.target.value)}
        required
      />
      <Field
        className={styles.field}
        number='02'
        label='Your email address'
        placeholder='example@email.com'
        type='email'
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
        required
      />
      <Field
        className={styles.field}
        number='03'
        label='Your phone number'
        placeholder='+11 2222 333344'
        type='tel'
        value={phone}
        onChange={(e: any) => setPhone(e.target.value)}
        required
      />
      <Field
        className={styles.field}
        number='04'
        label='Your company/organization name'
        placeholder='Type your company/organiztion name'
        value={company}
        onChange={(e: any) => setCompany(e.target.value)}
        required
      />
      <Select
        className={styles.field}
        number='05'
        label='What’s services are you looking for?'
        title='Choose from a list here'
        value={service}
        onChange={handleChangeService}
        options={optionsService}
      />
      <Select
        className={styles.field}
        number='06'
        label='What have you budgeted for this project?'
        title='Choose from a list here'
        value={budget}
        onChange={handleChangeBudget}
        options={optionsBudget}
      />
      <Field
        className={styles.field}
        number='07'
        label='Tell us about yout project'
        placeholder='Please type your project description'
        value={description}
        onChange={(e: any) => setDescription(e.target.value)}
        required
      />
      <button
        className={cn("button", styles.button, { "pointer-none": isLoading })}
        type='submit'>
        {`${isLoading ? "SENDING..." : "SEND MESSAGE"}`}
      </button>

      {statusMessage && (
        <p className={cn(styles.message)}>{statusMessage?.message}</p>
      )}
    </form>
  );
};

export default Form;
