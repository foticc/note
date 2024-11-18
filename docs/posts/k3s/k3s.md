[官网]: https://docs.k3s.io/zh/	"官网"

安装并设置默认的镜像库

```
curl –sfL \
     https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | \
     INSTALL_K3S_MIRROR=cn sh -s - \
     --system-default-registry "registry.cn-hangzhou.aliyuncs.com"
```



```
mkdir -p /data/rancher_home/rancher
mkdir -p /data/rancher_home/auditlog
```



```yaml
name: rancher
services:
  rancher:
    privileged: true
    ports:
        - 80:80
        - 443:443
    volumes:
        - /data/rancher_home/rancher:/var/lib/rancher
        - /data/rancher_home/auditlog:/var/log/auditlog
    container_name: rancher
    image: rancher/rancher:stable
    restart: unless-stopped
```



```shell
cat > /etc/rancher/k3s/registries.yaml <<EOF
mirrors:
  docker.io:
    endpoint:
      - "https://registry.cn-hangzhou.aliyuncs.com/"
      - "https://mirror.ccs.tencentyun.com"
  quay.io:
    endpoint:
      - "https://quay.tencentcloudcr.com/"
  registry.k8s.io:
    endpoint:
      - "https://registry.aliyuncs.com/v2/google_containers"
  gcr.io:
    endpoint:
      - "https://gcr.m.daocloud.io/"
  k8s.gcr.io:
    endpoint:
      - "https://registry.aliyuncs.com/google_containers"
  ghcr.io:
    endpoint:
      - "https://ghcr.m.daocloud.io/"
EOF
systemctl restart k3s
```



docker logs  2d98711d7ce8  2>&1 | grep "Bootstrap Password:"
