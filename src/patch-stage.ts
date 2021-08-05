import * as vscode from 'vscode';
import { getPathFromWorkspace } from "./utils/get-path-from-workspace";

export const patchStage = (...resourceStates: vscode.SourceControlResourceState[]) => {
    const workspace = vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders[0];
    const resourceState = resourceStates[0];

    if (resourceState && workspace) {
        const absFilePath = resourceState.resourceUri.path;
        const filePath = getPathFromWorkspace(absFilePath, workspace);

        const newTerminal = vscode.window.createTerminal();
        newTerminal.show();
        newTerminal.sendText(`git add -p "${filePath}"`);
    }
};
