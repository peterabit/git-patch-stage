import * as vscode from 'vscode';
import { getPathFromWorkspace } from "./utils/get-path-from-workspace";

export const copyRelativePath = (...resourceStates: vscode.SourceControlResourceState[]) => {
    const workspace = vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders[0];
    const resourceState = resourceStates[0];

    if (resourceState && workspace) {
        const absFilePath = resourceState.resourceUri.path;
        const filePath = getPathFromWorkspace(absFilePath, workspace);

        vscode.env.clipboard.writeText(filePath);
    }
};
