/**
 * Gaea-AI-Pro Library Exports
 *
 * This file exports the public API for programmatic use of Gaea-AI-Pro.
 * Use these classes and types to embed Gaea-AI-Pro into your applications.
 *
 * @example
 * ```typescript
 * import { ClineAgent } from "cline"
 *
 * const agent = new ClineAgent()
 * await agent.initialize({ clientCapabilities: {} })
 * const session = await agent.newSession({ cwd: process.cwd() })
 * ```
 * @module cline
 */

export { ClineAgent } from "./agent/ClineAgent.js"
export { ClineSessionEmitter } from "./agent/ClineSessionEmitter.js"
export type {
	AcpAgentOptions,
	AcpSessionState,
	AcpSessionStatus,
	Agent,
	AgentSideConnection,
	AudioContent,
	CancelNotification,
	ClientCapabilities,
	ClineAcpSession,
	ClineAgentCapabilities,
	ClineAgentInfo,
	ClineAgentOptions,
	ClinePermissionOption,
	ClineSessionEvents,
	ContentBlock,
	ImageContent,
	InitializeRequest,
	InitializeResponse,
	LoadSessionRequest,
	LoadSessionResponse,
	McpServer,
	ModelInfo,
	NewSessionRequest,
	NewSessionResponse,
	PermissionHandler,
	PermissionOption,
	PermissionOptionKind,
	PromptRequest,
	PromptResponse,
	RequestPermissionRequest,
	RequestPermissionResponse,
	SessionConfigOption,
	SessionModelState,
	SessionNotification,
	SessionUpdate,
	SessionUpdatePayload,
	SessionUpdateType,
	SetSessionConfigOptionRequest,
	SetSessionConfigOptionResponse,
	SetSessionModelRequest,
	SetSessionModelResponse,
	SetSessionModeRequest,
	SetSessionModeResponse,
	StopReason,
	TextContent,
	ToolCall,
	ToolCallStatus,
	ToolCallUpdate,
	ToolKind,
	TranslatedMessage,
} from "./agent/public-types.js"
