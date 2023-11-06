import cn from "classnames";
import styles from "./Overview.module.sass";

type OverviewProps = {};

const Overview = ({}: OverviewProps) => (
  <div className={cn(styles.section, styles.mash)}>
    <div className={"container"}>
      <div
        className={cn("label", styles.label)}
        data-aos='fade-up'
        data-aos-duration='2000'>
        OVERVIEW
      </div>
      <div className={styles.row}>
        <div
          className={cn("h7", styles.title)}
          data-aos='fade-up'
          data-aos-duration='2000'>
          At Techno Consulting Services, we cultivate an environment that
          champions innovation and creativity. Embrace the freedom to think
          beyond conventional boundaries, explore fresh ideas, and propose
          inventive solutions to our clients&apos; challenges.
        </div>
        <div
          className={styles.content}
          data-aos='fade-up'
          data-aos-duration='2000'>
          <p>
            As a member of our team, you&apos;ll embark on exhilarating projects
            that harness cutting-edge technologies, delivering transformative
            solutions to our clients. Our culture is founded on collaboration,
            fostering open communication, teamwork, and the exchange of ideas.
          </p>

          <p>
            We&apos;re deeply committed to social responsibility, actively
            engaging in initiatives that give back to the community. Join us in
            our quest to lead digital transformation, ignite innovation, and
            create positive change worldwide.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Overview;
