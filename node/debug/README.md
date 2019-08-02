# VS code 设置调试模式

`vim .vscode/lanuch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "node启动程序",
      "program": "${file}",
      "cwd": "${cwd}"
    }
  ]
}
```
