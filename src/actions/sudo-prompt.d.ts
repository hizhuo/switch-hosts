declare module 'sudo-prompt' {
	export function exec(cmd: string, options: { name?: string, icns?: string }, callback: (error: string, stdout: string, stderr: string) => void): void;
}