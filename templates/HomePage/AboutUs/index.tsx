import Link from "next/link";
import cn from "classnames";
import styles from "./AboutUs.module.sass";

type AboutUsProps = {
  scrollToRef: any;
};

const AboutUs = (
  // { scrollToRef }: AboutUsProps
  ) => (
  <div
    className={cn(
      "section-separator section-mb160",
      styles.section,
      styles.mash
    )}>
    {/* <div className={styles.anchor} ref={scrollToRef}></div> */}
    <div className={cn("container", styles.container)}>
      <div
        className={cn(styles.label)}
        data-aos='fade-up'
        data-aos-duration='2000'>
        <div className={cn(styles.head)}>
          With Us
        </div>
        <span>Innovate to Stay Ahead</span>
        <span>Transform with Digital Evolution</span>
        <span>Grow your Business/Career</span>
        <span>Thrive within the Budget</span>
      </div>
      <div className={styles.wrap}>
        <div
          className={cn("h5", styles.title)}
          data-aos='fade-up'
          data-aos-duration='2000'>
          Empowering Businesses with Transformative <strong>Techno</strong>
          logy Solutions
        </div>
        <ul className={styles.list} data-aos='fade-up' data-aos-duration='2000'>
          <li>
            Techno Consulting Services is your partner for driving digital
            transformation. With our expertise & innovative approach, we empower
            businesses to thrive in the digital era.
          </li>
          <li>
            From developing robust software solutions to creating intuitive user
            experiences, we deliver impactful solutions that fuel growth and
            enhance customer engagement. Join us on the path to digital success
            and unlock your business&#39;s full potential with Techno Consulting
            Services.
          </li>
        </ul>
        <Link
          className={cn("button", styles.button)}
          href='/about'
          data-aos='fade-up'
          data-aos-duration='2000'>
          LEARN MORE
        </Link>
      </div>
    </div>
  </div>
);

export default AboutUs;
