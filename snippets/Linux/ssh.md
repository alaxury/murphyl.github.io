---
title: 使用SSH无密码登录远程主机
---


## 1. 在本地生成密钥以及文件权限；
  
```sh
  ssh-keygen
  chmod 700 ~/.ssh
```

##  2. 上传密钥到远程服务器；
  
```sh
  scp ~/.ssh/id_rsa.pub username@remote_host:
  ssh username@remote_host
  cat id_rsa.pub >> ~/.ssh/authorized_keys
```

## 3. 设置远程文件权限；
  
```sh
  chmod 700 ~/.ssh
  chmod 600 ~/.ssh/authorized_keys
```

---

公钥加密 (public-key cryptography)，或非对称密钥加密 (asymmetric key cryptography)是一类广泛使用的加密算法。这类算法使用一对密钥即公钥 (public key) 和私钥 (private key)。其中公钥可以随便分发，只用于加密(encryption)，私钥则只由一人持有，只用于解密。任何一个信息用公钥加密之后，用私钥解密即可得到原来的信息，反之则不一定。

公钥加密的关键点在于，一方面，公钥加密是可逆的，但是不能用公钥推断出私钥。显然数学上，已知一个公钥是能够算出对应私钥的，但是只要设计足够好的加密算法（以及使用足够复杂的密钥对），使得不能在可以接受的时间内破译即可。
RSA 是一种常见的公钥加密算法。RSA 的工作原理依赖于如下事实：破译 RSA私钥需要对某些极大的整数进行因数分解，而目前尚未找到快速的对极大整数作因数分解的算法。换言之，如果有人找到了这样的算法，那么全世界的 RSA 加密都会失效。

RSA是由Ron Rivest, Adi Shamir, Leonard Adleman三人在1978年首次提出的。三人并因此项工作荣获了2002年Turing Award。周时，Rivest还是算法导论的作者之一，书中在31章对RSA系统的原理进行了简要说明，系统实现中利用到了数论中的Euler-Fermat theorem。

COMMENT: 但不管怎么，极大整数的因数分解还是可能的。RSA_Laboratories举办过多次悬赏破译 RSA 的活动，更多信息可以看看 RSA_Secret-Key_Challenge。

尽管随着密码学的发展，RSA 的安全性已经越来越受到威胁，但是未来能诞生可以在多项式时间内破译 RSA 的可能性还是非常小的。也就是说，除了军方、金融等高危目标之外，RSA 还是适用的。
