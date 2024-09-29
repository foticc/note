[前言 | Docker — 从入门到实践 (gitbook.io)](https://yeasy.gitbook.io/docker_practice)

### docker 查询磁盘占用情况

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

## 修改docker存储目录

#### 步骤：

1. **停止 Docker 服务**： 在修改配置文件之前，需要先停止 Docker 服务。

   ```sh
   sudo systemctl stop docker
   ```

2. **创建新的存储目录**： 选择一个新的路径来存放 Docker 镜像，例如 `/mnt/docker`，并创建该目录。

   ```sh
   sudo mkdir -p /mnt/docker
   ```

3. **编辑 Docker 配置文件**： 打开 `/etc/docker/daemon.json` 文件。如果文件不存在，可以创建一个。

   ```sh
   sudo nano /etc/docker/daemon.json
   ```

   在文件中添加或修改 `data-root` 设置，指向你想要的新路径。

   ```json
   {
     "data-root": "/mnt/docker"
   }
   ```

4. **移动现有数据**： 如果你想保留现有的 Docker 镜像和容器数据，可以将原来的数据目录内容移动到新位置。

   ```sh
   sudo rsync -aP /var/lib/docker/ /mnt/docker/
   ```

5. **重启 Docker 服务**： 完成配置后，重启 Docker 服务。

   ```sh
   sudo systemctl start docker
   ```

6. **验证配置**： 使用以下命令验证 Docker 是否使用了新的数据目录。

   ```sh
   docker info | grep "Docker Root Dir"
   ```