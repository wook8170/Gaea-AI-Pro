export interface SlashCommand {
	name: string
	description?: string
	section?: "default" | "custom" | "mcp"
	cliCompatible?: boolean
}

export const BASE_SLASH_COMMANDS: SlashCommand[] = [
	{
		name: "newtask",
		description: "Start a new task while keeping current work context",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "deep-planning",
		description: "Create a comprehensive implementation plan before starting coding",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "smol",
		description: "Condense current context window",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "newrule",
		description: "Create a new Gaea AI Pro rule based on the conversation",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "reportbug",
		description: "Report a bug in Gaea AI Pro and create a GitHub issue",
		section: "default",
		cliCompatible: true,
	},
]

// VS Code-only slash commands
export const VSCODE_ONLY_COMMANDS: SlashCommand[] = [
	{
		name: "explain-changes",
		description: "Explain code changes between Git refs (PRs, commits, branches, etc.)",
		section: "default",
	},
]

// CLI-only slash commands (handled locally, not sent to backend)
export const CLI_ONLY_COMMANDS: SlashCommand[] = [
	{
		name: "help",
		description: "Learn how to use Gaea AI Pro CLI",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "settings",
		description: "Change API provider, auto-approval, and feature settings",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "models",
		description: "Change the model used for current mode",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "history",
		description: "Browse and search your task history",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "clear",
		description: "Clear current task and start fresh",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "exit",
		description: "Exit CLI (shortcut for Ctrl+C)",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "q",
		description: "Exit CLI (shortcut for Ctrl+C)",
		section: "default",
		cliCompatible: true,
	},
	{
		name: "skills",
		description: "View and manage installed skills",
		section: "default",
		cliCompatible: true,
	},
]
