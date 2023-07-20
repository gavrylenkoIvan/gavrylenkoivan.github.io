import HelloProps from "./Hello.props";
import styles from "./Hello.module.css";
import cn from "classnames";
import { Container } from "../Container/Container";
import GoIcon from "@/public/go.svg";
import GithubIcon from "@/public/github.svg";

export const Hello = ({
  className,
  ...props
}: HelloProps): React.JSX.Element => {
  return (
    <section id="hello" className={cn(className, styles.hello)} {...props}>
      <Container>
        <div className={styles.container}>
          <div className={styles.text}>
            <h3 className={styles.hi}>Hi Everyone, I am</h3>
            <h1 className={styles.me}>Havrylenko Ivan</h1>
            <p className={styles.dev}>
              Interested fullstack developer from Ukraine
            </p>
            <a
              href="https://github.com/gavrylenkoIvan"
              className={styles.git}
              target="_blank"
            >
              <div className={styles.btn_content}>
                <GithubIcon className={styles.icon} />
                <p>Github profile</p>
              </div>
            </a>
          </div>
          <div className={styles.go}>
            <GoIcon />
          </div>
        </div>
      </Container>
    </section>
  );
};