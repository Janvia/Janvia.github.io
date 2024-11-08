/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","04e9317d114a63d0d2a2d091fc029361"],["/2019/01/02/Anconda常用命令总结/index.html","4975da1763f0ef6872832364bc0f83d1"],["/2019/01/02/句型/index.html","1bcddca8f936e6e135f4a1a3a9f89815"],["/2019/01/02/日语助词/index.html","7f55f8f8f93efa74d031a6fb324899ed"],["/2019/01/03/on-my-zsh/index.html","f91d3512d9dd61420c441283f61290a2"],["/2019/01/04/《当我遇见一个人》摘录/index.html","5a96628356e7491feea653d6e8b5d7cd"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","0ec8d37644a12c4f147b543e02b00835"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","105425c02c12550b4d71d4e72a5d9b5b"],["/2019/01/04/经济学笔记/index.html","0593983e43209f85b4cfa5b4efc070cd"],["/2019/01/04/语法总结（5-15）/index.html","47e3fcae27970594694ea9f5436b5384"],["/2019/01/05/linux常用命令/index.html","7777b76ce838cffc312b8028770a8c5e"],["/2019/01/05/mamba/index.html","1e9eeb97031fa71428dcd8f7bcee4132"],["/2019/01/05/tflite编译/index.html","50a7a8375815691eaf5b0ad808c82811"],["/2019/01/05/tflite转换/index.html","787aa01ee54a47be9abf31f5b82b348f"],["/2019/01/05/torch安装/index.html","94576997254474044b4ff2d1b933ca3d"],["/2019/01/05/vscode/index.html","65b911e2d77c06c1675352c9ebcc1cf4"],["/2019/01/06/敬语/index.html","682068ec4d6cc41b4b98d07246490d4f"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","325f20c02400fbeca4ab61e09a501873"],["/2019/01/07/RNASeq数据下载处理全流程/index.html","b4f70553d4e79319435676fbcbf9f97f"],["/2019/01/07/cuda 手动配置/index.html","58f9850f176b737ae3d01d90463d591f"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","3f957fa1aea535070dcfc502147234b9"],["/2019/01/07/docker-ldap-mysql/index.html","b4078e9c608a163153762d0c2cea217b"],["/2019/01/07/docker代理/index.html","4dcdf8b6397d34b5e9ff4aadae255599"],["/2019/01/07/docker安装/index.html","f48bc899ffb931bf1f5c22b89aaa6a92"],["/2019/01/07/docker容器挂载硬盘/index.html","07e3dc582583d1fc679b23519d662688"],["/2019/01/07/github上传代码/index.html","412c94ec6cc9cbde6c0388670bb3fae6"],["/2019/01/07/kaldi 安装/index.html","6af05e924d5dafecab12b813b79a8a45"],["/2019/01/07/linux常用工具/index.html","b36de2a36c2c901d37606e5320d2d668"],["/2019/01/07/opencv/index.html","783f327a3211f22d716326f6b4f3dca0"],["/2019/01/07/ssh 远程连接docker/index.html","1d27f7c44f123e3f86b98421870f396d"],["/2019/01/07/导出/index.html","c2e236230378dda7c12e423ccc2abb70"],["/2019/01/07/换源/index.html","adfed2645eb32bc7a39cc481eb8e4924"],["/2019/01/07/服务器配置LDAP/index.html","7a2b52f354b85d9b0c44c24cfb60232e"],["/2019/01/09/markdown/index.html","7fe65fa6190e93525c066d4014dd94c9"],["/2019/01/09/opencv图像美化/index.html","c80c6293f544c4d1591a8e9d3d8696ee"],["/2019/01/11/19单元语法/index.html","47dbc07e5b646f59c2594cc6fc187c2b"],["/2019/01/11/20单元语法/index.html","0176bbcb50d6a8eedbbbc6816df0b4a5"],["/2019/01/11/opencv-图片几何变换/index.html","bb42aa479e8aa4c7f09a293e0370d37b"],["/2019/01/11/opencv-图片处理及绘图/index.html","70645a0c92a71a57e98d0f25ffaa7e38"],["/2019/01/11/wine安装qq/index.html","c7602708598be39c72e8f1dbd04f5a66"],["/2019/01/12/tensorflow-可视化/index.html","b30cd4102c8d706b0a7e291ca5fb09bf"],["/2019/01/12/tensorflow-基础语法/index.html","723407118b38ef46364a88788e6b0cba"],["/2019/01/13/RNN/index.html","0b0f5c4addd7d7eb1ff6835b62af6d5e"],["/2019/01/13/keras实现CNN/index.html","3c9b7fe6e44cfd555ee15316545bd49f"],["/2019/01/13/卷积神经网络实现/index.html","da72ff3aef8aaacc66c1f8f6afab68d8"],["/2019/01/13/循环神经网络RNN-写诗/index.html","86e3ea671e771d903a16b861c1e22b98"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","1c1f1e483a79565155bea0040842db22"],["/2019/01/14/反向传播/index.html","18e6d75a0a2fd806c41be47b8493f2b6"],["/2019/01/14/图床/index.html","19aa4d0d9a6de67c79710f72d0838f34"],["/2019/01/14/感知器与激活函数/index.html","05593ac683e855e1aa0112db2843d446"],["/2019/01/15/PIL简单应用/index.html","2f2df5be89299e393cf2a1c55614cb79"],["/2019/01/15/卷积神经网络理论/index.html","b585b369e5a29dd41335bf66aaca7f38"],["/2019/01/15/图片分类之pca-svc/index.html","f158fe63c94fa325a7bc85890cce510f"],["/2019/01/15/强化学习基础/index.html","45d9a9ab54eaa2a204bc0500ade9a0e3"],["/2019/01/15/经典神经网络/index.html","8f6a1afb08417e528e18e4ab8d8c6d21"],["/2019/01/16/DQN/index.html","f13513011a1153a13591b5b18120e3b2"],["/2019/01/16/TCP传输图片/index.html","ba51188434afd8bf91b8631f235496ca"],["/2019/01/16/时序差分学习/index.html","e0876be7c4cd7f8f4f0c089588106017"],["/2019/01/16/蒙特卡洛方法/index.html","af8e4014506cc55d1a00efc3a5630400"],["/2019/01/17/Double-QDN/index.html","099d84fcb827cba469809ddc7657f1a4"],["/2019/01/17/RNN理论/index.html","53fdb54a338f4e9ae12142e1dd777041"],["/2019/01/17/梯度下降/index.html","8bf25216d389653a55cd4d47815541a6"],["/2019/01/18/PG和TD3/index.html","7937b21114b3ccd28a88e87a81d7dbd0"],["/2019/01/20/21单元语法/index.html","9b46c42730eb4988522e03e960e2e570"],["/2019/01/20/GAN理论/index.html","a5433ee2452b61dc5df4f0062c39f039"],["/2019/01/20/PG3和IRL/index.html","84149eb0790216dfac2647694dd56a0c"],["/2019/01/20/数据集/index.html","edf2666d21c35af44ef251794c657ffd"],["/2019/01/21/DCGAN/index.html","94dfa8390cd54043f093baa47ac5e205"],["/2019/01/21/LSTM/index.html","cd6bc474f07c06a410b80f2a05e900fc"],["/2019/01/21/点击预估/index.html","75f38f39dd8f1c96425b93c102bc2483"],["/2019/01/22/SVD分解/index.html","9222bdaacc6f65737983b1f91f73c517"],["/2019/01/22/SVM/index.html","907beeef92c71a03a7c4557d70583654"],["/2019/01/22/机器学习简介/index.html","0f1acc9924f725e123b87e72d11ccb0e"],["/2019/01/22/线性回归/index.html","ef13566d9c6831f49e67706843a40a3c"],["/2019/01/22/逻辑回归/index.html","1100f56a2ec204b573dba684cbb03a65"],["/2019/01/23/numpy/index.html","57c7cd0350c3b07b0bdde91c806d105b"],["/2019/01/23/决策树与随机森林/index.html","66a730f0a01b02ab90a7e07373da45da"],["/2019/01/23/聚类/index.html","cacc3c6654feb3ee5ebf733e37317842"],["/2019/01/24/matplotlib/index.html","30a455d08c6400296ee6eebaf296211e"],["/2019/01/25/pandas/index.html","59142183a42891cab4a9e984b4c4a975"],["/2019/01/25/语义分割/index.html","6fb01ee6e410179286f45875c68ef55a"],["/2019/01/27/22单元语法/index.html","bdf1738fa20796c5743944a7954aaef1"],["/2019/01/27/SVM案例/index.html","e2d8d09b17e20ab84ea5acaa6bfeca7d"],["/2019/01/28/requests库及爬虫案例/index.html","045b36d1352791014b15f7082f411ef6"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","3ab755a9a4b8f8ac8a6e970d98cc382b"],["/2019/01/28/异常/index.html","7c38111cc6cfbef4804a2707999e7d9c"],["/2019/01/28/描述器和装饰器/index.html","d2cdc730fb8ce72e10452c2d7707d539"],["/2019/01/28/文件/index.html","dde854fe2671b64ed731ad94fbb73ee6"],["/2019/01/28/正则/index.html","9ed958cc7d7f6b6624a49cf4391a8185"],["/2019/01/29/函数基础和函数参数/index.html","ac103aee6291f866b31d7bbce0665145"],["/2019/01/29/多继承和魔方方法/index.html","a3e88fa86245af7a685f8581d23ac0d4"],["/2019/01/29/类定义、属性和继承/index.html","570df43579cfa2f2c96dcd9a6ccf4062"],["/2019/02/27/23单元/index.html","75905ed27651f019e926b4b9b5d155c5"],["/2019/03/12/hexo加速/index.html","3d81c17b5eab2ed29feafb5bd32f68fb"],["/2019/03/12/hexo系统重装恢复/index.html","e25e32774ef5f866c347edfed7e46e9c"],["/2019/03/13/24单元/index.html","14ebdc003a43d6d6b384c598cb62a946"],["/2019/03/19/25单元/index.html","54f28c26656ea18b744177691d9db7f4"],["/2019/03/26/26单元/index.html","59840333807a8b5133650857751d8bea"],["/2019/04/14/27单元/index.html","792455137de09dd70d163887c29e5b63"],["/2019/05/01/28单元/index.html","c52d198b88e80c19cb202c19149275ae"],["/2019/05/02/29单元/index.html","b1e18fd50053a55f3caafde8b2ebc432"],["/2019/05/12/30单元/index.html","95c9e64b0392278062c885012308e2bd"],["/2019/06/03/jni/index.html","046a0d828dfcc5e01c08a6c19a556eb9"],["/2019/06/07/JNA/index.html","3e8f5fd97e1484a18993f093e50145df"],["/2022/08/07/R配置jupyter/index.html","528e0e1e4a04f87e78e2c276be36b78d"],["/2022/08/18/FFmpeg常用命令/index.html","dda6463cf4239501b80d45d890ff17e6"],["/2022/08/18/linux系统代理/index.html","107882ef14ad761ef93256b59c2897c1"],["/2022/08/18/matplotlib补充/index.html","276bbae3015b3dc9ae77376453f91f77"],["/2022/08/18/常用命令/index.html","db517d3c7f27e99031f58e3aa98e03c1"],["/2022/08/20/rust 多平台demo/index.html","e7aefeb8af7ffb54ba9d21053df24599"],["/2022/08/20/sacred/index.html","3c284b4d41eb86acc2ad7f482aa777fe"],["/2022/08/20/wsl/index.html","78c719803d587749e02ca8efac75b986"],["/2022/08/20/双系统安装/index.html","6a16040c2c5d75b6291b5eb67d9878d1"],["/2024/11/08/source/index.html","5002a8065008f17958731a389c550498"],["/archives/2018/12/index.html","e4adaa5c67c5d841b637fdfa35e6b628"],["/archives/2018/index.html","be429de6d685e0d07a8ca7d6a00a3136"],["/archives/2019/01/index.html","b9ce7b813b5cd0af00b20217d6594726"],["/archives/2019/01/page/10/index.html","e0668190b1b210e6d56ec460664d8516"],["/archives/2019/01/page/2/index.html","529aa56397c301861d7bfa93be21551c"],["/archives/2019/01/page/3/index.html","5b2f1fbb8da82b4d1bda0341f78666c6"],["/archives/2019/01/page/4/index.html","0c3cce848ebf2cea9e3f9fa4be312881"],["/archives/2019/01/page/5/index.html","7d2786e17a590c20578f0be9bf3f0b53"],["/archives/2019/01/page/6/index.html","406e8ef7130f578d2c0b2ec8a72a4198"],["/archives/2019/01/page/7/index.html","9af501df5306240ada6b0b166393f5ff"],["/archives/2019/01/page/8/index.html","bdb9fa823bf56aa552d29d6127cb3e67"],["/archives/2019/01/page/9/index.html","94b9fbf7d705b9cd1ef098dbb0fb73a6"],["/archives/2019/02/index.html","946b3ddcd524b6c85e9b13a5c7a244dd"],["/archives/2019/03/index.html","91b89968ee73f8048406d53c407d2b2e"],["/archives/2019/04/index.html","adfa5267f4a3e81fc1a1651f9f54f573"],["/archives/2019/05/index.html","8dc045088c29525bdc0a95bdca0ae176"],["/archives/2019/06/index.html","8dee3b65be132f80e2d9b0496f34294e"],["/archives/2019/index.html","6de083c698e92cbeba0e10c64cb4d52a"],["/archives/2019/page/10/index.html","b3c537ae9fe52e388ad2b868231c9c08"],["/archives/2019/page/11/index.html","c4e26433204c0e9ec6023b67ebefb105"],["/archives/2019/page/2/index.html","25a6e1be4c19c58169acf74f595fad49"],["/archives/2019/page/3/index.html","faa3d2997dd16045393e10bac1aa521e"],["/archives/2019/page/4/index.html","a96258fb7e4659d5f8acf90428b6a392"],["/archives/2019/page/5/index.html","ffce7588dc49ca48399b978bb4b28cd7"],["/archives/2019/page/6/index.html","39ac76f033f37b8884927f40302038a9"],["/archives/2019/page/7/index.html","dba03e3cf87505da1e863d0bc1b0159d"],["/archives/2019/page/8/index.html","7cbcc73318a79426fbee4d7930050391"],["/archives/2019/page/9/index.html","e521666bf7f22e20cc3e77ee9d3c472f"],["/archives/2022/08/index.html","b4780f753885b5c3ebcf54d88f837947"],["/archives/2022/index.html","b3216fcc9c2c4f5cef82f4897fded07c"],["/archives/2024/11/index.html","48dd9b07cf9814f757167c854ac6cbc9"],["/archives/2024/index.html","35e68ea9dbdf5967eb32b83bd967166d"],["/archives/index.html","d347ec50a4c37617136e7a9d3754a0e8"],["/archives/page/10/index.html","8a632b7db3f05a03280f5f94969f0e00"],["/archives/page/11/index.html","0d92531381a03058722a19c92e756375"],["/archives/page/12/index.html","abbbbd406ccb3c400a381f51fc3c94f9"],["/archives/page/2/index.html","4b234889a6ff40b2e979f2e322e26c7b"],["/archives/page/3/index.html","be096a6aa4d402d77097778905b5caa1"],["/archives/page/4/index.html","574faa95afb7df29b5608c9fd1db2478"],["/archives/page/5/index.html","dd260408166f2e5809f45b43a24b76a9"],["/archives/page/6/index.html","55a0ee07e44c2d8c3f9738b10a2f0602"],["/archives/page/7/index.html","36fcfbf3e64239d1716e3802c62f40ff"],["/archives/page/8/index.html","d6f68553398080cbdf1b89501e92c756"],["/archives/page/9/index.html","9dae0c9326d8b64824f285b6aabba9b4"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","3b71f34a22b439679b54d8a10e76a016"],["/categories/dxz/index.html","7f542ab1899a4caba8a2fa9f84aa50e2"],["/categories/index.html","98d468c0780fecfaa8991878a8f4f39d"],["/categories/linux/index.html","2c92bd09461ff56ebc16f1e370c1f816"],["/categories/python/index.html","ee83f160b760e37508bed405f45903ee"],["/categories/tensorflow/index.html","5fe7ef83566c04dc1075b8f04f0bb48b"],["/categories/图片分类/index.html","c747004ba70db6f3e7577936cdb33a2f"],["/categories/工具/index.html","2875efb4583458cdbf3dc36f341515f3"],["/categories/工具/page/2/index.html","bab972ac0328fac30165ffb01db1a3b2"],["/categories/强化学习/index.html","fae09495dea0ba4a8d9a7e0424e6966e"],["/categories/数据集/index.html","460c6f548c1ab4855c026b9503f79286"],["/categories/日语/index.html","e5c139139a509ee91db29382b20d5d9c"],["/categories/日语/page/2/index.html","69df430380f56580d3ddf25c0e006daa"],["/categories/机器学习/index.html","a37e2f48a8f0fc94c702ef98c9a17698"],["/categories/深度学习/index.html","e5be2a8551265b1dae590b1c01791531"],["/categories/深度学习/page/2/index.html","e8b47bc319cf16a4b7156aaa8b686deb"],["/categories/深度学习环境配置/index.html","98cdbd80052abcb3e31f071c603d04e6"],["/categories/深度学习移植/index.html","8134a3d1eccb6d7304a4fb1f9e05bdff"],["/categories/计算机视觉/index.html","7415b7db259321345c59cce98b53dbbf"],["/categories/读书笔记/index.html","693c4ead0e48f812a82a64062c30da98"],["/css/main.css","e8c90ff10483636c84e7124121c5320b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","177b8785ed7fc4542cce9f3427eea28b"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","ebc6c0bc19bfa77be57d5d9d48245f65"],["/page/11/index.html","d1b6efed955a15332fbafe42dd7b72ba"],["/page/12/index.html","1f2580912c6c9ebba47d717d076f37dc"],["/page/2/index.html","08f72af438bbb8fcb967bfa915d99d49"],["/page/3/index.html","d5f0b489693c82950baf859b5c3c8c3f"],["/page/4/index.html","0860658330ee6f0fd57bb4090de78ae3"],["/page/5/index.html","93ae964b4d5f78a8b0aca0d4e70e6262"],["/page/6/index.html","e135679cc3f3e60802ba90f696258262"],["/page/7/index.html","ad8f5ab27a7c93f47e37086244b4f799"],["/page/8/index.html","d57124b461543fff546f86c1f85a0a0f"],["/page/9/index.html","8a4094467c8bb8c4e1aebf9d085d5558"],["/sw-register.js","ab8feeeaed9158d0545ac40fa8b55394"],["/tags/AlexNet/index.html","e02b06d649742ce0a38020c66bd8eefb"],["/tags/CNN/index.html","9dcacb40084d7fe00d725a7ae7a36dcd"],["/tags/DCGAN/index.html","221a69ab0dcca8423a16c1763779ca96"],["/tags/DDPG/index.html","de8ab45bb7832c6ade338c56dfc4dd5d"],["/tags/DDQN/index.html","c6545ef5d99a0412e4e408c5c5214eba"],["/tags/DQN/index.html","58786b6a2d8b0f5180c91f5271b80084"],["/tags/GAN/index.html","28233f857594dd8995ba46e33837965a"],["/tags/IRL/index.html","b425c8cac6189315c03d92aaab860519"],["/tags/LSTM/index.html","e9b9d7c2877256fee3c494a38d01caa7"],["/tags/LeNet/index.html","3659e9b2d1e44bd4635d740c0f0880bd"],["/tags/MC/index.html","f1136ef6cd3451dd61eca5ccfe35e00f"],["/tags/PCA/index.html","f4fdf3b9ee1d2d4e8435ed636da7d2e6"],["/tags/PG/index.html","4c9376dd6526630d42574ecc0d3591cb"],["/tags/PG3/index.html","eaefb9a02e2c51c3013f54cbbd30dfe2"],["/tags/PIL/index.html","6a21365f2949c4b40147c6a2ac64fa50"],["/tags/R/index.html","1bd1bfc38526f7755995047593b9f017"],["/tags/RNASeq数据下载处理全流程/index.html","3427cea832d773c48bf2929250c237d9"],["/tags/RNN/index.html","44b3706af8480fbe6f5d883f6e57db28"],["/tags/SVC/index.html","608f6fee72405ee679e98fbd3b78746a"],["/tags/SVD/index.html","508452ff5ed60fddc55c03261522eaf6"],["/tags/SVM/index.html","030ba4d6b1f984ea86041db18e943589"],["/tags/TCP/index.html","6d0da6b77ed2b0059a3ff6d4d8cf226a"],["/tags/TD/index.html","36a19d91d84435b0b5c645b01564043d"],["/tags/TD3/index.html","5ec49829044dd09f634627afce24b63d"],["/tags/VGG/index.html","2c93d188a556a0c7946af9f3b6f3685e"],["/tags/amd配置/index.html","0f41968a0871e910ac8290d6465c9c40"],["/tags/anconda/index.html","1448d1a71d24990917c6654b6a346d92"],["/tags/conda常用命令/index.html","595ad3dee3e0501a654ae041a24505cb"],["/tags/cuda配置/index.html","8b6f516dbca49e6d9e86158b95239430"],["/tags/docker-ldap-mysql-arm64/index.html","7184faaa4580aaf2bfa5d5b4f5cb52ca"],["/tags/docker-ldap-mysql/index.html","0e23e7ef59b4c1a150e0b01b265cce87"],["/tags/docker代理/index.html","e2323a64aa96fce016edfcc9d0e3d977"],["/tags/docker安装/index.html","7d73dbbd02a0c35e600f1e64e2d6b8cf"],["/tags/docker容器挂载硬盘/index.html","1ecc6c5427563bf2812ae1f3d8bbf443"],["/tags/ffmpeg/index.html","d9608f64e64d85c8d767405dab3fc86a"],["/tags/github上传代码/index.html","2a6f6746e67471cc5d8cf1dca1fb8193"],["/tags/hexo/index.html","240376f93b6ef542fde1b8145911a55e"],["/tags/index.html","a8a2b54d81a343b599a8c9aa07d233e1"],["/tags/java调用C/index.html","d2823d8a70af27644fed8ff79164ceae"],["/tags/kaldi/index.html","edeca072d9fac534fe6fd32f4cb5c37b"],["/tags/linux命令/index.html","4c01ec4e154d5e8bbd35840e6515876f"],["/tags/mamba/index.html","8b9d33b42fa54c03fe850f4f65b54ad4"],["/tags/markdown/index.html","9afdd2bc00e36d5be53fa34dcb5ac03e"],["/tags/matplotlib/index.html","ca75b4cd7046c51f7bf6baf7c9a826e4"],["/tags/numpy/index.html","6525da967ed65be7062a2279e5235a75"],["/tags/opencv/index.html","5445211b330994902fccb4cba45549f2"],["/tags/pandas/index.html","46307233f18756235cde58b2ceecc7f8"],["/tags/qq/index.html","fe0ebecf3c1f93c1dca5056627867ce4"],["/tags/requests库/index.html","e5a4ba445e7f24a0f090bc4a26d2becf"],["/tags/rust-多平台demo/index.html","5323dc1ef897a25218539cf6f6752b7a"],["/tags/sacred/index.html","0e388170cecf8c613f1ce0fc5a6b67ea"],["/tags/ssh-远程连接docker/index.html","3a092a1e94473412d2ce7b1658f19229"],["/tags/tflite编译/index.html","c1c4e79ba4e4a2ed207d32e76d0e5a35"],["/tags/tflite转换/index.html","1a476fd69b4fbfbb25de62997307e7ae"],["/tags/torch和apex安装/index.html","7df0e5eb4b9cef9bf794e64b3928ad20"],["/tags/vscode/index.html","18a6e96d460dcaca24961a44ef4a0be9"],["/tags/wsl/index.html","5931d983e89e8d7ffa10a0d58844ec80"],["/tags/zsh/index.html","5cc475650b7dde18ea22eb09563627de"],["/tags/代理/index.html","38ae398d55f08d368d433ffb9caefc1b"],["/tags/决策树/index.html","f71d65a6f29bb8719bc6b6581e86ceba"],["/tags/函数/index.html","6c9f13ff0b8d501a35cc0bbd31756ffe"],["/tags/列表推导式/index.html","14c8bce818f8da58bda2e6e3c365ecb3"],["/tags/助词/index.html","3b3bc8102ac21ab6f68eabcf76f4c6c4"],["/tags/包/index.html","14426331e0a132b6032302be2d7a77b3"],["/tags/卷积神经网络/index.html","f130acd4eca668ba56cbd6a4c9b4dd62"],["/tags/双系统安装/index.html","4628a0db269a746d39d50d50a91d4bfc"],["/tags/反向传播/index.html","74125620b2f76abca5c61d51ba090ff7"],["/tags/句型/index.html","1eefee18f311ea15db32716990494cb6"],["/tags/可视化/index.html","20daca0436264fc1f7db1778499aa396"],["/tags/哲学/index.html","7cbf1f81398cbcd00d8de260423e9c68"],["/tags/图像美化/index.html","32df99c0aabf35ded57554f972ca1c7d"],["/tags/图床/index.html","c2f5e80345d312d7d91be199dbd2cc2b"],["/tags/多继承/index.html","9cf54897a8b60a8dcf087272f3922e4f"],["/tags/工具/index.html","43e90c846d87f2e66528a555e839d6d7"],["/tags/异常/index.html","28487706b07749d5443366d34fe51c42"],["/tags/强化学习/index.html","ca4c9ac5f2e3cab1c0abba69d4c131d6"],["/tags/心理学/index.html","d7d1a6c84faa31f21bede598597fed35"],["/tags/感知器/index.html","fe1f02a4be4cca876d164d0f5dec1040"],["/tags/换源/index.html","9ff5e1e3b7e1777feb91a03b89ae6b89"],["/tags/描述器/index.html","ac28b1e656b95d9c5e5d3d6e33d63381"],["/tags/敬语/index.html","609a682d63147ebc19dbbdd20d332785"],["/tags/数据集/index.html","784b34c8cb585d05894950bbacfaec5d"],["/tags/文件/index.html","f64d86681518b33c32d5e3aea881095e"],["/tags/服务器配置LDAP/index.html","8c3c2001c08463b9963fe55b9ba05695"],["/tags/机器学习/index.html","d3cbde4b9738c675ec1665f8ee238337"],["/tags/梯度下降/index.html","31a0267333027d50719efd74c3b68ce7"],["/tags/模块/index.html","9d129464a3bbbd0404e3c8aedbfb522f"],["/tags/正则/index.html","3f717532f7ba35a606652d75ee94999b"],["/tags/激活函数/index.html","7b909718fe308363420241db7028c8d8"],["/tags/点击预估/index.html","2e6ca454ba728882399987a92dcc0fa1"],["/tags/爬虫/index.html","d2679118c2c42cbfc7274af583b34a6c"],["/tags/生成器/index.html","4afcd8f784fd00a2c2edba27f96c4bcf"],["/tags/类/index.html","0d59f57405142f40e78866355a0817ea"],["/tags/线性回归/index.html","d42aabf5771cd99a36700e4a974a56e1"],["/tags/经济学/index.html","edc43e424b1a5257cc96935e053366a6"],["/tags/聚类/index.html","c23117898002d26b2faec1ad5f7504e4"],["/tags/装饰器/index.html","e0b9ca45c8dc877af5c4e2b55a844427"],["/tags/词型变换/index.html","e40fb111f3d2438b2265167fa97eff3c"],["/tags/语义分割/index.html","71f3a270362564b60c60f645747a49b7"],["/tags/语法/index.html","4c0677635cc6a97810c2eee7d4beacf8"],["/tags/语法/page/2/index.html","c560f5e523ebead25a010d53fbc1a486"],["/tags/迭代器/index.html","b673f3c5cdfd44c1d2e1034f5306d409"],["/tags/逻辑回归/index.html","1ab428070bc8d983e2283768c266fd8e"],["/tags/随机森林/index.html","dade28def8edb8a9cd3307e8b3e46991"],["/tags/魔方方法/index.html","7e6f5af3e65ac32fea227a35cf7fea0b"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
