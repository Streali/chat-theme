import { z } from "zod";

export const TwitchBadgeSchema = z.object({
  admin: z.string().optional(),
  bits: z.string().optional(),
  broadcaster: z.string().optional(),
  partner: z.string().optional(),
  global_mod: z.string().optional(),
  moderator: z.string().optional(),
  subscriber: z.string().optional(),
  staff: z.string().optional(),
  turbo: z.string().optional(),
  premium: z.string().optional(),
  founder: z.string().optional(),
  vip: z.string().optional(),
  "bits-leader": z.string().optional(),
  "sub-gifter": z.string().optional(),
});

export const TwitchMessageSchema = z.object({
  id: z.string(),
  username: z.string(),
  twitch: z.string(),
  emotes: z.record(z.string(), z.array(z.string())),
  date: z.string(),
  message: z.string(),
  badges: z.array(z.string()),
  mod: z.boolean().optional(),
  subscriber: z.boolean().optional(),
  color: z.string().optional(),
});

const ChatSettingsSchema = z.object({
  isDemo: z.boolean().optional(),
  alignment: z.enum(["left", "center", "right"]).optional(),
  hideTime: z.number().optional(),
  fontSize: z.number().optional(),
  badges: z.boolean().optional(),
  shadow: z.boolean().optional(),
  scrollAnimation: z.boolean().optional(),
  animation: z.boolean().optional(),
  color: z.string().optional(),
  bgColor: z.string().optional(),
  background: z.boolean().optional(),
  perspective: z.number().optional(),
});

export type TwitchMessage = z.infer<typeof TwitchMessageSchema>;
export type ChatSettings = z.infer<typeof ChatSettingsSchema>;
