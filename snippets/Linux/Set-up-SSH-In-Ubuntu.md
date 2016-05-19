---
title: 在Ubuntu上安装SSH
---

电脑多了，换来换去麻烦，远程登录就很有必要了。

### 安装`openssh-server`

```shell
  sudo apt-get install openssh-server
```

### 启动服务

```shell
  sudo /etc/init.d/ssh start
```

### 上传本地配置

```shell
  cat .ssh/id_rsa.pub | ssh user@123.45.56.78 "cat >> ~/.ssh/authorized_keys"
```

### 服务器启用证书登录

配置文件：`/etc/ssh/sshd_config`：

修改：

```shell
PermitRootLogin prohibit-password
```

为：

```shell
PermitRootLogin without-password
```

然后重载`ssh`配置文件：

```ssh
  reload ssh
```
