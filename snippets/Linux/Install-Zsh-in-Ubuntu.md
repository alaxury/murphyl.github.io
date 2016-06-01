---
title: 在Ubuntu上安装Zsh（oh-my-zsh）
referer: https://gist.github.com/tsabat/1498393
---

准备工作:

```bash
  apt-get install zsh
  apt-get install git-core
```

安装`oh-my-zsh`

```bash
  wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh
```

然后将`zsh`设置为没人的`Shell`

```bash
  chsh -s `which zsh`
```

尔后，重启电脑。And enjoy it!

```bash
  sudo shutdown -r 0
```

[参考文章](https://gist.github.com/tsabat/1498393)
