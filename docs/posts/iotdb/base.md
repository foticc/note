```yaml
version: "3"
services:
  iotdb-service:
    image: apache/iotdb:1.3.2-standalone #使用的镜像
    hostname: iotdb
    container_name: iotdb
    restart: always       
    ports:
      - "6667:6667"
    environment:
      - cn_internal_address=iotdb
      - cn_internal_port=10710
      - cn_consensus_port=10720
      - cn_seed_config_node=iotdb:10710
      - dn_rpc_address=iotdb
      - dn_internal_address=iotdb
      - dn_rpc_port=6667
      - dn_internal_port=10730
      - dn_mpp_data_exchange_port=10740
      - dn_schema_region_consensus_port=10750
      - dn_data_region_consensus_port=10760
      - dn_seed_config_node=iotdb:10710
    privileged: true
    volumes:
        - ./iotdb/data:/iotdb/data
        - ./iotdb/logs:/iotdb/logs
        - /dev/mem:/dev/mem:ro
    tty: true
```



```sh
docker compose -f docker-compose-standalone.yml up  -d
```

- `-f, --file FILE` 指定使用的 Compose 模板文件，默认为 `docker-compose.yml`，可以多次指定。
- `-p, --project-name NAME` 指定项目名称，默认将使用所在目录名称作为项目名。
- `--verbose` 输出更多调试信息。
- `-v, --version` 打印版本并退出。
- -d 后台运行容器





```sh
docker exec -it iotdb  /bin/bash         #进入容器
./start-cli.sh -h iotdb                  #登录数据库
IoTDB> show cluster                      #查看服务状态
```

