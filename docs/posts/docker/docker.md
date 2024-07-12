[前言 | Docker — 从入门到实践 (gitbook.io)](https://yeasy.gitbook.io/docker_practice)

docker 查询磁盘占用情况

```sh
docker system df
```

```
TYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE
Images          7         5         2.742GB   353.3MB (12%)
Containers      6         4         90.68MB   0B (0%)
Local Volumes   2         2         8.555MB   0B (0%)
Build Cache     111       0         3.7GB     3.7GB
```



清理docker(慎用)

```sh
docker system prune -a
```

```
WARNING! This will remove:
  - all stopped containers
  - all networks not used by at least one container
  - all images without at least one container associated to them
  - all build cache

Are you sure you want to continue? [y/N] y
```

