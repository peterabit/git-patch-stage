import * as vscode from 'vscode';

export const patchStage = (...resourceStates: vscode.SourceControlResourceState[]) => {
    const resourceState = resourceStates[0];
    const filePath = vscode.workspace.asRelativePath(resourceState.resourceUri);
 
    const newTerminal = vscode.window.createTerminal();
    newTerminal.show();
    newTerminal.sendText(`git add -p "${filePath}"`);
};
