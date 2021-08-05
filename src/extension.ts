import * as vscode from 'vscode';
import { copyRelativePath } from './copy-relative-path';
import { patchStage } from "./patch-stage";

export function activate(context: vscode.ExtensionContext) {
	const patchStageCommend = vscode.commands.registerCommand('git-patch-stage.patch stage', patchStage);
	context.subscriptions.push(patchStageCommend);

	const copyRelativePathCommend = vscode.commands.registerCommand('git-patch-stage.copy relative path', copyRelativePath);
	context.subscriptions.push(copyRelativePathCommend);
}

export function deactivate() {}
