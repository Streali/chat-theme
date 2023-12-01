import { ChatSettings, TwitchMessage } from "../types";
import { motion } from "framer-motion";
import { CustomSettings } from "./settings";

type Props = {
  message: TwitchMessage;
  settings: ChatSettings & CustomSettings;
};

export function Message(props: Props) {
  const { message, settings } = props;

  const hideAnimation = {
    initial: {
      opacity: 1,
    },
    in: {
      opacity: 0,
      transition: {
        duration: 0.3,
        delay:
          settings?.hideTime === 0 || !settings?.hideTime
            ? 100000
            : settings?.hideTime,
        ease: "easeInOut",
        type: "spring",
      },
    },
  };

  const displayAnimation = {
    initial: {
      [settings?.alignment === "left" ? "right" : "left"]: 50,
    },
    in: {
      [settings?.alignment === "left" ? "right" : "left"]: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      layout={settings.scrollAnimation}
      className="message"
      variants={hideAnimation}
      initial="initial"
      animate="in"
    >
      <motion.div
        variants={displayAnimation}
        initial={settings?.animation ? "initial" : false}
        animate={settings?.animation ? "in" : false}
        className="message__inner"
        style={{
          alignItems:
            settings.alignment === "left"
              ? "flex-start"
              : settings.alignment === "center"
                ? "center"
                : "flex-end",
        }}
      >
        <div className="message__username">
          <div className="message__username--badges">
            {message.badges.map((badge) => (
              <img src={`/badges/${badge}.png`} alt={badge} key={badge} />
            ))}
          </div>
          <p>{message.username}</p>
        </div>

        <div
          className="message__content"
          dangerouslySetInnerHTML={{ __html: message.message }}
        ></div>
      </motion.div>
    </motion.div>
  );
}
