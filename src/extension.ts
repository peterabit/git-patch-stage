import { relative } from "path";
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('git-quick-patch-add.patch stage', (...resourceStates: vscode.SourceControlResourceState[]) => {
		const workspace = vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders[0];
		const resourceState = resourceStates[0];

		if (resourceState && workspace) {
			const newTerminal = vscode.window.createTerminal();
			newTerminal.show();
			const absFilePath = resourceState.resourceUri.path;
			const filePath = relative(workspace.uri.path, absFilePath);
			newTerminal.sendText(`git add -p ${filePath}`);
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}



