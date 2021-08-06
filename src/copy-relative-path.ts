import * as vscode from 'vscode';

export const copyRelativePath = (...resourceStates: vscode.SourceControlResourceState[]) => {
    const resourceState = resourceStates[0];
    const filePath = vscode.workspace.asRelativePath(resourceState.resourceUri);
    vscode.env.clipboard.writeText(filePath);
};
