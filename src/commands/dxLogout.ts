import * as vscode from 'vscode';

export default async function dxLogout(): Promise<any> {
    vscode.window.forceCode.statusBarItem.text = 'ForceCode: Logging out of DX';
    try {
        await vscode.window.forceCode.dxCommands.logout();
        delete vscode.window.forceCode.conn;
        vscode.window.forceCode.statusBarItem.hide();
        vscode.window.forceCode.statusBarItem_UserInfo.hide();
        vscode.window.forceCode.resetMenu();
        return Promise.resolve();
    } catch(e) {
        return Promise.reject(vscode.window.forceCode.outputError(e, vscode.window.forceCode.outputChannel));
    }
    // =======================================================================================================================================
}