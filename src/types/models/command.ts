import type {
	Awaitable,
	ChatInputApplicationCommandData,
	ChatInputCommandInteraction,
	CommandInteractionOptionResolver,
} from "discord.js";
import type Bot from "../../client";

export type CommandOptions = {
	category: string;
	data: ChatInputApplicationCommandData;
	execute(this: void, client: Bot, interaction: ChatInputCommandInteraction, args: Omit<CommandInteractionOptionResolver, "getFocused" | "getMessage">): Awaitable<void>;
};
