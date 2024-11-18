- 运行以下命令来配置Angular CLI使用pnpm作为包管理器：

  在现有项目目录下执行

```sh
ng config cli.packageManager pnpm
```

或者在新建时：

```
ng new test-pnpm --package-manager=pnpm
```

也可以在angular.json中添加：

```json
{"cli": 
  {
    "packageManager": "pnpm"
  }
}
```

