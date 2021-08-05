import { posix } from "path";
import * as vscode from 'vscode';

export const getPathFromWorkspace =  (absFilePath: string, workspace: vscode.WorkspaceFolder) => {
    return posix.relative(workspace.uri.path, absFilePath);
};
