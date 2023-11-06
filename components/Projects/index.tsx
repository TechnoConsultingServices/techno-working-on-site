import Link from "next/link";
import cn from "classnames";
import styles from "./Projects.module.sass";
import Project from "./Project";

import { ProjectsType } from "@/types/index";

type ProjectsProps = {
    items: ProjectsType[];
    className?: string;
    title?: string;
    label?: string;
    description?: string;
    viewItem?: number;
    viewAll?: string;
    more?: boolean;
    dark?: boolean;
    scrollToRef?: any;
};

const Projects = ({
    items,
    className,
    label,
    title,
    description,
    viewItem,
    viewAll,
    more,
    dark,
    scrollToRef,
}: ProjectsProps) => (
    <div className={cn(className, { "section-black": dark }, styles.projects, dark ? styles.mash: '' )}>
        {scrollToRef && <div className={styles.anchor} ref={scrollToRef}></div>}
        <div className="container">
            {title && (
                <div className={styles.head}>
                    {label && (
                        <div className={styles.label} data-aos='fade-up' data-aos-duration='2000'>
                            <div className="label">{label}</div>
                        </div>
                    )}
                    <div className={styles.details} data-aos='fade-up' data-aos-duration='2000'>
                        <div className={cn("h5", styles.title)}>{title}</div>
                        {description && (
                            <div className={styles.description}>
                                {description}
                            </div>
                        )}
                    </div>
                </div>
            )}
            <div className={styles.list}>
                {items.slice(0, viewItem || undefined).map((project) => (
                    <Project item={project} key={project.id} light={dark} />
                ))}
            </div>
            {viewAll && (
                <Link
                    className={cn(
                        "button",
                        { "button-light": dark },
                        styles.button
                    )}
                    href="/projects"
                    data-aos='fade-up' data-aos-duration='2000'
                >
                    {viewAll}
                </Link>
            )}
            {more && (
                <button
                    className={cn(
                        "button",
                        { "button-light": dark },
                        styles.more
                    )}
                    data-aos='fade-up' data-aos-duration='2000'
                >
                    LOAD MORE
                </button>
            )}
        </div>
    </div>
);

export default Projects;
