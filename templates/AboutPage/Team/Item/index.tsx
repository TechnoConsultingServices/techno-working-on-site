import { useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Image from "@/components/Image";
import Socials from "@/components/Socials";
import Modal from "@/components/Modal";
import Details from "../Details";

type ItemProps = {
    className?: string;
    item: any;
};

const Item = ({ className, item }: ItemProps) => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false);

    return (
        <>
            <div className={cn(styles.item, className)} data-aos='fade-up' data-aos-duration='2000'>
                <div
                    className={styles.preview}
                    onClick={() => setVisibleModal(true)}
                >
                    <Image
                        src={item.photo}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33.33vw"
                        alt=""
                    />
                </div>
                <div className={styles.line}>
                    <div
                        className={cn("h7", styles.title)}
                        onClick={() => setVisibleModal(true)}
                    >
                        {item.title}
                    </div>
                </div>
                <div className={styles.position}>
                    {item.position}
                    <Socials
                        className={styles.socials}
                        classSocial={styles.social}
                        items={item.socials}
                        small
                    />
                </div>
            </div>
            <Modal
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
            >
                <Details item={item} />
            </Modal>
        </>
    );
};

export default Item;
