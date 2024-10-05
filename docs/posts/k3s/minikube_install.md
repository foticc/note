```
⛔  Exiting due to RSRC_INSUFFICIENT_CORES:  has less than 2 CPUs available, but Kubernetes requires at least 2 to be available
```

需要两个cpu核心，如果运行在虚拟机中，修改下虚拟机的cpu数量

```
❌  Exiting due to GUEST_MISSING_CONNTRACK: Sorry, Kubernetes 1.31.0 requires conntrack to be installed in root's path
```





# [安装 CRI 客户端 crictl](https://www.cnblogs.com/hahaha111122222/p/15802882.html)

```bash
# https://github.com/kubernetes-sigs/cri-tools/releases/ 选择版本
wget https://github.com/kubernetes-sigs/cri-tools/releases/download/v1.20.0/crictl-v1.20.0-linux-amd64.tar.gz
sudo tar zxvf crictl-v1.20.0-linux-amd64.tar.gz -C /usr/local/bin

vi /etc/crictl.yaml 
runtime-endpoint: unix:///run/containerd/containerd.sock
image-endpoint: unix:///run/containerd/containerd.sock
timeout: 10
debug: false

# 验证是否可用
crictl  pull nginx:alpine
crictl  rmi  nginx:alpine
crictl  images
```