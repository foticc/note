# netty

## 1. netty 的 io 任务 同一连接 会由同一个线程来完成，当线程数不足时才会复用

```java
public class HelloClient {
    public static void main(String[] args) throws InterruptedException, UnknownHostException {
        // 启动器
        new Bootstrap()
                .group(new NioEventLoopGroup())
                .channel(NioSocketChannel.class)
                .handler(new ChannelInitializer<NioSocketChannel>() {
                    // 初始化连接器  在初始化后执行
                    protected void initChannel(NioSocketChannel ch) throws Exception {
                        ch.pipeline().addLast(new StringEncoder());
                        ch.pipeline().addLast(new ChannelOutboundHandlerAdapter() {
                            @Override
                            public void write(ChannelHandlerContext ctx, Object msg, ChannelPromise promise) throws Exception {
                                super.write(ctx, msg, promise);
                                ctx.write("fsdfdsf");
                            }
                        });
                    }
                })
                .connect(new InetSocketAddress("localhost",8080))
                .sync()
                .channel()
                .writeAndFlush("hello world!");
    }
}
```

```java
public class HelloServer {

    public static void main(String[] args) throws UnknownHostException {
        // 1.启动器  负责组装netty 组件
        new ServerBootstrap()
                // 2. 循环事件处理器 线程 选择器 selector  可使用多个loopGroup 一个负责只accept 一个负责读写
                .group(new NioEventLoopGroup())
                // 3.选择服务器的server 实现类
                .channel(NioServerSocketChannel.class)
                // 4. 处理连接的读写逻辑
                .childHandler(new ChannelInitializer<NioSocketChannel>() {
                    // 5. 添加具体的处理handler, pipeline 是一个处理流水线
                    protected void initChannel(NioSocketChannel ch) throws Exception {
                        // 日志handler,转string的handler
                        ch.pipeline().addLast(new LoggingHandler(LogLevel.INFO),new StringDecoder());
                        ch.pipeline().addLast(new ChannelInboundHandlerAdapter() {
                            @Override
                            public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
                                super.channelRead(ctx, msg);
                                System.out.println("msg = " + msg);
                            }
                        });
                    }
                })
                // 绑定端口
                .bind(8080);
    }
}
```

### 1.1 fafaf

afdsfasffd
