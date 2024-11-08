/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","c44e5573407aced44ea0627b75ccaee7"],["/2019/01/02/Anconda常用命令总结/index.html","9726b928aab056e6b5c5b23d1f20a5ce"],["/2019/01/02/句型/index.html","e7f34ae419d2867a763773171a7a9507"],["/2019/01/02/日语助词/index.html","83e7543d7cfb14cafbeb4ed2d6238af2"],["/2019/01/03/on-my-zsh/index.html","4d50fb8eefadd4a3eef49ff55dd231b3"],["/2019/01/04/《当我遇见一个人》摘录/index.html","6b5c847e71053d542efd3ee11d6da4f8"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","b223adec427fb82e3ac091f032be70b3"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","903c113bcd17390e4d4d254f4fb17d1e"],["/2019/01/04/经济学笔记/index.html","98349fe36f27b8ee614c99c1429d1238"],["/2019/01/04/语法总结（5-15）/index.html","3999c2eb585e6acd5ea1a1b14f57a8a1"],["/2019/01/05/linux常用命令/index.html","03e6107a9071e572ad862d80ea2b6a57"],["/2019/01/05/mamba/index.html","9f11749ec72ded60dc00a99467e4c2da"],["/2019/01/05/tflite编译/index.html","5b28095f213ad30778186925f8e23531"],["/2019/01/05/tflite转换/index.html","35f981a5c24bac3d9a27ae91bc5ca00c"],["/2019/01/05/torch安装/index.html","a5046fccc72abbb2b06c080468cdaf64"],["/2019/01/05/vscode/index.html","205031d4bf4a8db8ff4e2dbe8084fa70"],["/2019/01/06/敬语/index.html","ea60fa7fd38e826c18d03f269d626f99"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","79c2e58d9d31c198cd1bb0200d06b8f0"],["/2019/01/07/RNASeq数据下载处理全流程/index.html","a39f3c43f58ef59f59df220c35184c91"],["/2019/01/07/cuda 手动配置/index.html","df9d8ca2144044b5190520026e6a9a79"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","60c6b8414ce886d1190c24e77de7961a"],["/2019/01/07/docker-ldap-mysql/index.html","ede81d09f9ffac157c93f40d2e96065b"],["/2019/01/07/docker代理/index.html","3c31ef800529f35a524ac25044f385ff"],["/2019/01/07/docker安装/index.html","f6622b37e1cf9dafd688b8516895b5e9"],["/2019/01/07/docker容器挂载硬盘/index.html","04b7f12c221b4b35d9e2e33005e2bd66"],["/2019/01/07/github上传代码/index.html","a31bac1d4ce4bef797b9464ab810d700"],["/2019/01/07/kaldi 安装/index.html","1e0f9dc67fad3a48da6ac93de67c26e8"],["/2019/01/07/linux常用工具/index.html","8f5e9ba47ea6ccf16d43145c067e4b2a"],["/2019/01/07/opencv/index.html","27a25ec5e8ab4a68ce9d6204c531dfd0"],["/2019/01/07/ssh 远程连接docker/index.html","15f1aa8308f6a92147293c9c014b8d9b"],["/2019/01/07/导出/index.html","e830f8750d3e2e5d99411076bb6480b1"],["/2019/01/07/换源/index.html","79979b9c3ec0182b669f2ebdafc4ad75"],["/2019/01/07/服务器配置LDAP/index.html","bc3ef42105875da79a8ae048f79f6003"],["/2019/01/09/markdown/index.html","1b43178e71f11ab175eed5ac7849c232"],["/2019/01/09/opencv图像美化/index.html","b6f802e70c96c2a145846e92d920d5b4"],["/2019/01/11/19单元语法/index.html","66c56cb482c7736b9cb956e92fb6a691"],["/2019/01/11/20单元语法/index.html","df163a9bc4158f50b3ab02b7f611aa53"],["/2019/01/11/opencv-图片几何变换/index.html","f9b59b6a44ab726e563b34d661343b0f"],["/2019/01/11/opencv-图片处理及绘图/index.html","6671916ee42beadc14f32d1c363496a8"],["/2019/01/11/wine安装qq/index.html","397cf8ab8c1fd0d053164f2678cb7db3"],["/2019/01/12/tensorflow-可视化/index.html","e321cea467095b88343d9cfa3fada438"],["/2019/01/12/tensorflow-基础语法/index.html","c9c55b55e98e70ec4a0cc22dceff185c"],["/2019/01/13/RNN/index.html","7cd6f92c6bde09831d218c6938db1282"],["/2019/01/13/keras实现CNN/index.html","07fb4df0d9d156b8c7c7d80f1756dd0f"],["/2019/01/13/卷积神经网络实现/index.html","2e63805e28df77c120c0759dbbd2bfee"],["/2019/01/13/循环神经网络RNN-写诗/index.html","cc92f74acf9e32df7d25c20225f1cc23"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","b49b84ecdcae3e39721f425b28e42b4f"],["/2019/01/14/反向传播/index.html","720bdbbd8bdbcfff6f3c4435ce897316"],["/2019/01/14/图床/index.html","78684acd6021875bd6807473f313e13e"],["/2019/01/14/感知器与激活函数/index.html","96441d89f6c1eadf1bfeec45d9430a79"],["/2019/01/15/PIL简单应用/index.html","49e8e29dca5317874b135c5d1100d135"],["/2019/01/15/卷积神经网络理论/index.html","7ef9aa4fb327989626fbeba119193634"],["/2019/01/15/图片分类之pca-svc/index.html","3c6047ce8c7bcfe587ee59528620454d"],["/2019/01/15/强化学习基础/index.html","47bf6265b9b65c92c84690fb012c1500"],["/2019/01/15/经典神经网络/index.html","a5733662e883a6347d0d0ef6c391ac6b"],["/2019/01/16/DQN/index.html","73fb42a4c5d9f73a33ae20dc1232d178"],["/2019/01/16/TCP传输图片/index.html","a5e98cef261f65bfc17757147ad61a35"],["/2019/01/16/时序差分学习/index.html","70bd7c706f009bb7814bd94beef4cf0e"],["/2019/01/16/蒙特卡洛方法/index.html","c94df2b16806a8f21bdaa830ae221999"],["/2019/01/17/Double-QDN/index.html","0037c103f6284eed09c1cff346b2a2e2"],["/2019/01/17/RNN理论/index.html","3940bd1cdfccf7ef10558649e02010f0"],["/2019/01/17/梯度下降/index.html","a5626fe5e7fcb4ddaed1cfe32f799df1"],["/2019/01/18/PG和TD3/index.html","17541a3b626e4555bbf750e2091eb500"],["/2019/01/20/21单元语法/index.html","66ba5e22fb61af5b57f2f4ea598a62f5"],["/2019/01/20/GAN理论/index.html","021912509574f807d4bb31507166ccfb"],["/2019/01/20/PG3和IRL/index.html","8adda4f0c2ac72539ac8a72c91e48097"],["/2019/01/20/数据集/index.html","21d2f5fc911dc71ba9b3b28980374fd1"],["/2019/01/21/DCGAN/index.html","3259b8ea8e8b2f07b66b040030eb4a17"],["/2019/01/21/LSTM/index.html","ea62df90352c3e04da25200fca745cee"],["/2019/01/21/点击预估/index.html","0fcaf13279612e49ef257219e0408b14"],["/2019/01/22/SVD分解/index.html","373bdfc47daad59d9d4564f416cbe452"],["/2019/01/22/SVM/index.html","f93294dae347a3de6b4954cb893dade2"],["/2019/01/22/机器学习简介/index.html","f455f24e382e82bf918dd966561a6540"],["/2019/01/22/线性回归/index.html","6d99de19561f1925095c87cd90f50371"],["/2019/01/22/逻辑回归/index.html","43a47af3dfe245e54216a256799d73a0"],["/2019/01/23/numpy/index.html","089ffdd8bf01fbf808ca627dc5d48092"],["/2019/01/23/决策树与随机森林/index.html","905dd7f0b1ca8e9fed3e2863992e155d"],["/2019/01/23/聚类/index.html","743cf3eb67e304637a7e58974b8d5753"],["/2019/01/24/matplotlib/index.html","fc7638c9c3f2c8184bb38ebe663e8408"],["/2019/01/25/pandas/index.html","5c1f1616f7fe41009dfdb2ab5b42adcd"],["/2019/01/25/语义分割/index.html","bf519fb313212bbe06fbe901e3cbde08"],["/2019/01/27/22单元语法/index.html","7f95642116e22f7028317a68b3e8b997"],["/2019/01/27/SVM案例/index.html","bf573e039054dc5060e873ba46fb1fb7"],["/2019/01/28/requests库及爬虫案例/index.html","9869cc5e4958e058f96450ab15c3e967"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","103662232f735236570c2173cc9198f0"],["/2019/01/28/异常/index.html","8cb83f5aabb9084e9164f4af75ebc9b9"],["/2019/01/28/描述器和装饰器/index.html","613626f6d7c688950bcc13db80d75436"],["/2019/01/28/文件/index.html","503d9007a81bac12bcb3f7482d3d24b6"],["/2019/01/28/正则/index.html","4f8cc082ea7bdbb6c2a1fb914714cc30"],["/2019/01/29/函数基础和函数参数/index.html","ca6fe6511dcb94b5ce4325e17df14343"],["/2019/01/29/多继承和魔方方法/index.html","620dab2677184dd1f79a165da9eff69c"],["/2019/01/29/类定义、属性和继承/index.html","65d8248d42a1c43b72552c02d2a794ee"],["/2019/02/27/23单元/index.html","1ba140d8d1cd7beca5d9507b09243b32"],["/2019/03/12/hexo加速/index.html","2a1b2610c07fcb4fed153d15015f5b3b"],["/2019/03/12/hexo系统重装恢复/index.html","5a5130a0b23d4f09ebef5b33b0143568"],["/2019/03/13/24单元/index.html","75f401900989b540ee3a6a9e9fa903c1"],["/2019/03/19/25单元/index.html","c10d0f9bab94766b191a03c8365872d7"],["/2019/03/26/26单元/index.html","2f8aa47fd98000d501a4951f95149afc"],["/2019/04/14/27单元/index.html","cbd87f41f0fb628a444271583f2c9a7e"],["/2019/05/01/28单元/index.html","6646e63f3be93bfd93e7e3aa73cbb588"],["/2019/05/02/29单元/index.html","b7081fe4f0c884d66e66c4b007985a66"],["/2019/05/12/30单元/index.html","f5b20f90b8fe02b57cb65888121718f9"],["/2019/06/03/jni/index.html","2c2c591de3228d5d231e5fb6c4dccb57"],["/2019/06/07/JNA/index.html","3c694dd421d2a8d768cdd68d774fc72f"],["/2022/08/07/R配置jupyter/index.html","db707eb5bf1aa8bd922915619a0dbed7"],["/2022/08/18/FFmpeg常用命令/index.html","f0ca3daaa0500c95817d5f6ff1acbf75"],["/2022/08/18/linux系统代理/index.html","f16d7f39028b5096bcc1633e695b72b4"],["/2022/08/18/matplotlib补充/index.html","279cd5acfc4bed81cc43a7a9012d380b"],["/2022/08/18/常用命令/index.html","8a1acf8270f6a809e003f148e9cd8296"],["/2022/08/20/sacred/index.html","5e3cef9a3fe03e3ef67e7691348585ca"],["/2022/08/20/wsl/index.html","5692808fff0499b21eb1c481577241c1"],["/2022/08/20/双系统安装/index.html","e5bfbf9619c5f0a205924ab4023b0caa"],["/2024/11/08/rust 多平台demo/index.html","9075271037a07f757edaa5d0364a2f9b"],["/2024/11/08/source/index.html","2e1cfe934e2b70af6ab99058193a9e6e"],["/archives/2018/12/index.html","4e0ae076e62ff054960d782ae0013757"],["/archives/2018/index.html","f89c46e385174df6414276dc7d2d97e8"],["/archives/2019/01/index.html","ca9634a4b9cfa32b85fc2dec4cf98286"],["/archives/2019/01/page/10/index.html","bb8c3935dd55b704a9c325c944961729"],["/archives/2019/01/page/2/index.html","78a5678c19d581a49a54d8b2c53fd05f"],["/archives/2019/01/page/3/index.html","eec7c8ede484fd31adda6ac16b0f4b08"],["/archives/2019/01/page/4/index.html","969bc2e73c270a25c6d949e02200e3c9"],["/archives/2019/01/page/5/index.html","69453add95093124b58cae61d3d4cf96"],["/archives/2019/01/page/6/index.html","8bec39c428a3220351f58c87125e8eba"],["/archives/2019/01/page/7/index.html","1a2ceec68f942ee7b79321e6fb59c3e0"],["/archives/2019/01/page/8/index.html","7f123069226830f47746e1419e645728"],["/archives/2019/01/page/9/index.html","b875495e13724dc16a776678074e5084"],["/archives/2019/02/index.html","f11af2f686db4e6c48665b19a9e2b880"],["/archives/2019/03/index.html","bcc68d5fca31121a760a1a0a3a831f04"],["/archives/2019/04/index.html","296cf94e7db4dc90a803ed12c9fdfc6c"],["/archives/2019/05/index.html","d6e4511fea84033adb943cf51030d1fc"],["/archives/2019/06/index.html","4e47aa6c8c973c45263452f16ea41b76"],["/archives/2019/index.html","b7378a9d9e7f15ce86166818d6f3dfd4"],["/archives/2019/page/10/index.html","70599239c843ed341fc967eb5c341d4c"],["/archives/2019/page/11/index.html","75b27bb8ca873e5c65eaca35dd0e70ea"],["/archives/2019/page/2/index.html","75988057458a0ab902566e28f2947cc9"],["/archives/2019/page/3/index.html","42e44f617eb8249f4ea44b1e0fb9cd28"],["/archives/2019/page/4/index.html","e0f727264d820642b49468a77646489f"],["/archives/2019/page/5/index.html","977b4ed838f9d26ec391d37155a7bbb5"],["/archives/2019/page/6/index.html","50c96b711eb932e83fae68a4f1e63911"],["/archives/2019/page/7/index.html","284ecfcc38b8ea4d7de491b0bd2fb293"],["/archives/2019/page/8/index.html","9b179d36b0da828145c7edf03498a977"],["/archives/2019/page/9/index.html","74224588e7996ecd6044ba243b9e07f3"],["/archives/2022/08/index.html","2315d163a442fc2e585dfe3719dbe002"],["/archives/2022/index.html","da2adca369ee13fdda6e6659b4b9104a"],["/archives/2024/11/index.html","b24ffa2e6bf12d611c7fb885c76eb635"],["/archives/2024/index.html","64a1c1c5a9953cb9ff64889d4a94ba3e"],["/archives/index.html","2e585325c76718e1b12970ba30da3ed3"],["/archives/page/10/index.html","adb965294d316de49dc3b3ab8525fcb2"],["/archives/page/11/index.html","2ed10502609d964a57f50d050d8af512"],["/archives/page/12/index.html","92cdd2c1635ab9d906e9200604355c83"],["/archives/page/2/index.html","7fe6f6f27bce9cf33d394bcecf70225a"],["/archives/page/3/index.html","e489add248ece59f51950989e4325532"],["/archives/page/4/index.html","3d3db95204f9f2f1a5cd2492263b30ef"],["/archives/page/5/index.html","f3b151125c2511a76b4b34be93160171"],["/archives/page/6/index.html","3d93455fbf91ace61c40e9879acb7f6d"],["/archives/page/7/index.html","0f06308784baeda4fa09384d26eef6fc"],["/archives/page/8/index.html","88b957accd567911400dac82fe56a169"],["/archives/page/9/index.html","3a7e82da633879575797576032bea50b"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","7918f3acc773b5750e6407559aa3c4ad"],["/categories/dxz/index.html","884a6ad1b66b2ad8b603202ae437e545"],["/categories/index.html","1cedadf302eab0f15b45751b745e6f3c"],["/categories/linux/index.html","ec61db2e59ad2ab573bffdec220ae02e"],["/categories/python/index.html","258b89243e41764682931f5dc64cebf2"],["/categories/tensorflow/index.html","d062d2cdbd64f391f1e51598a8e6d6c4"],["/categories/图片分类/index.html","09d072503da634f13c263ef2ae9cc21c"],["/categories/工具/index.html","e41e2dcb5ce87893ca3283f245642725"],["/categories/工具/page/2/index.html","96da847ea0764389214545bed3c66dc3"],["/categories/强化学习/index.html","8fdac8d19649d1544d2c06ed8d151e60"],["/categories/数据集/index.html","4e03e042737bfd3c70a9767a644adf21"],["/categories/日语/index.html","b22eda5013e6eea81c2ac3e4c5377cdd"],["/categories/日语/page/2/index.html","40e5221ac20d4c81f2ba49a15bd88751"],["/categories/机器学习/index.html","cb31c2f53315d6d7a3eabe7eee84250d"],["/categories/深度学习/index.html","0afae565b5f205e5bc42e81995f15406"],["/categories/深度学习/page/2/index.html","469aeb802f33dd552289471e4c720b35"],["/categories/深度学习环境配置/index.html","af65b6a40ca1128ec934e66a8f204df1"],["/categories/深度学习移植/index.html","73050b6013e80ef6a728b9cd168d2147"],["/categories/计算机视觉/index.html","a1d539a9ea7ba8fc953761809ba02d36"],["/categories/读书笔记/index.html","cf6f191151b326b481335a4d474537e7"],["/css/main.css","a1d2d837cfdec9b91e81bbabf01e7e9c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","e9bfeb258091b5416d40de5c47d3ea94"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","6fd3d95ddb8370322c98ec48eaf4fd3a"],["/page/11/index.html","39076e7350ca0e540f9d9e9c82d7f42a"],["/page/12/index.html","14424dae82be63f983738c0332c41b29"],["/page/2/index.html","3a3c308c34440e131fe4f388b66074e9"],["/page/3/index.html","1aa8b0a2870a110ee972410222819fe3"],["/page/4/index.html","423a34c939e844aad75864c456b92dcd"],["/page/5/index.html","a23a3eeb2462574eb2b81010d11bd890"],["/page/6/index.html","83f6d16ee9f676e95dc314715521ac2a"],["/page/7/index.html","56c06e2af6d67a2a1b70db4a648ee8f2"],["/page/8/index.html","baf039ef24cc9610542d210d934b3cda"],["/page/9/index.html","118888293fedf023e9d82be087576485"],["/sw-register.js","7e1857c4a91d71e08b0e0eb7d1321b00"],["/tags/AlexNet/index.html","60e4524a25d1279996153ace0b75e208"],["/tags/CNN/index.html","0665c6a6f7ebab4cb306977dfc5b064e"],["/tags/DCGAN/index.html","e5b83db257e260d8ad9196589ae8af57"],["/tags/DDPG/index.html","771d23c2d87b7650dbee93349d7fed55"],["/tags/DDQN/index.html","b577c7cd75f198df41848ee1bd1ce0bd"],["/tags/DQN/index.html","c580169bc0f9ca5ce57456de6c07fff4"],["/tags/GAN/index.html","9a410486e491da002be2d23013a68bcd"],["/tags/IRL/index.html","5e4be734deb98a29f30685a15d6a899f"],["/tags/LSTM/index.html","8cf33d5073e947797943ff87bd3eccc1"],["/tags/LeNet/index.html","f0c68507ed4001e854a7c410e3ef9f4a"],["/tags/MC/index.html","16ae52a4f7561c4dc8e2b144fc4fd9ef"],["/tags/PCA/index.html","ef2339e827c28d2d63a4db7c00025a5d"],["/tags/PG/index.html","7c222ee31ef2a0d29d964f5e41a85c24"],["/tags/PG3/index.html","eaa5d68575a2e14eb70ddf35ee5214db"],["/tags/PIL/index.html","71bf5d4b0e2a7b6af3863bf835ff59dd"],["/tags/R/index.html","d7158000f3e93147035cc8e41afb6564"],["/tags/RNASeq数据下载处理全流程/index.html","6e1edc5208160d4ebd374fc845bba025"],["/tags/RNN/index.html","9c43526b6800d9d79122a79a96f80ac0"],["/tags/SVC/index.html","3c20adb8aa883b83a677711ae83db006"],["/tags/SVD/index.html","7a447ea7bcac8d3155e33c647e0735f8"],["/tags/SVM/index.html","4798c0fe3cfa6f77cf6c9a10b12ffa26"],["/tags/TCP/index.html","76669e802047d6d090a0782e39187ec4"],["/tags/TD/index.html","45f267235d3119a208b79277dc83a8fb"],["/tags/TD3/index.html","94eefc9fca1253617de9eedaac76ddc5"],["/tags/VGG/index.html","88e2c593186fb66c7581b3b0f1a6ebbd"],["/tags/amd配置/index.html","25e54c1bf57e6b6b2b65dee4af970000"],["/tags/anconda/index.html","b7adb97554cddabd66e43c1935bbde53"],["/tags/conda常用命令/index.html","69e7d42e975f260da43a6998ab5a0d13"],["/tags/cuda配置/index.html","f7a5a43dcf53d0d18315bccdc7dea341"],["/tags/docker-ldap-mysql-arm64/index.html","caa0978e65fa25338771bf3788435046"],["/tags/docker-ldap-mysql/index.html","b17269d3477010c5d84d44153d2d6685"],["/tags/docker代理/index.html","e888f56a961d5ebeda3075606921d77b"],["/tags/docker安装/index.html","92b25b190fbb2b48dabd1213d9f9c347"],["/tags/docker容器挂载硬盘/index.html","43fdc06b6c25b2fef4a15d0ebcb62c30"],["/tags/ffmpeg/index.html","9e4a9c0a290db06d1252c8fc7c689699"],["/tags/github上传代码/index.html","81027a6711fd1bfacd50666c544fc76f"],["/tags/hexo/index.html","7eab9e13c7e40b429c9d6ea51b79aea9"],["/tags/index.html","bf093cafcdf732fe8a45ccbdce29f5d4"],["/tags/java调用C/index.html","1aa3cd9ae411360f7acb32391596a118"],["/tags/kaldi/index.html","5321ba7d807d7d116bc492f8c3cb0091"],["/tags/linux命令/index.html","2f288056ff470a27253cf6e80ef7e575"],["/tags/mamba/index.html","4504fc3181809918370e9b92e961d641"],["/tags/markdown/index.html","25954cbe9cfe9977a001eb19fba8bfec"],["/tags/matplotlib/index.html","c099331157e87f2d83a4204caee8b5cf"],["/tags/numpy/index.html","83441095a20e212f095929b0814269e6"],["/tags/opencv/index.html","0957765c73c1639a28c83b9f2da872a5"],["/tags/pandas/index.html","60724b5d5add37787ff510e71e27bae2"],["/tags/qq/index.html","3d4518ffe8e12044e12409bf2d929631"],["/tags/requests库/index.html","86efd3cb9f222b699e5bb16a5d030a65"],["/tags/sacred/index.html","a3ff2ab834ff919690a1171e1b0f482e"],["/tags/ssh-远程连接docker/index.html","f13c2ede48a6bbafc2e76bd72a42133c"],["/tags/tflite编译/index.html","2391b2c5ac48c3ef66a2bc8e352f7fff"],["/tags/tflite转换/index.html","8a50d870dd2b862b01aae3fe519236f7"],["/tags/torch和apex安装/index.html","d76481c3a31cb49319bab7aaea707030"],["/tags/vscode/index.html","95e7600958352097bf6d2798cb9623cb"],["/tags/wsl/index.html","03ebba269b2326c818ff2e30f2a76939"],["/tags/zsh/index.html","c6614a42993fe9ad9f88bc285e66abc8"],["/tags/代理/index.html","1035a40d25298efb07ff8cdc56101194"],["/tags/决策树/index.html","f59bbd6fc6f23693d53c03e856e77364"],["/tags/函数/index.html","357c441fecbe066b026b838c7526e440"],["/tags/列表推导式/index.html","286ffafe6fdc79b7ba6e658e898a477d"],["/tags/助词/index.html","199e354fcc87f49618f59a942578eb11"],["/tags/包/index.html","2b2a76660934141dfad5f330dfd6a122"],["/tags/卷积神经网络/index.html","3127023b70c1304bd72819326a04a54a"],["/tags/双系统安装/index.html","5f8732089c081589ccc0bc77268e1ab7"],["/tags/反向传播/index.html","04315259059e760e7195e01208c5ef05"],["/tags/句型/index.html","32253d8d7f0d964c4c9a3662c48c724d"],["/tags/可视化/index.html","567eed8c2bc3600e1889042a18cb577f"],["/tags/哲学/index.html","ce46ac453379af4931ffa2a498e18163"],["/tags/图像美化/index.html","9ad629cf00df73bce6257c999c93b875"],["/tags/图床/index.html","1ca451e03ae5a196f9844cd23d159914"],["/tags/多继承/index.html","b270b0ad7c5909ec0430be31da0997d8"],["/tags/工具/index.html","f2b4aa3c54d945bd73f7193da9969853"],["/tags/异常/index.html","c70a60c15559135f0b55ed3a6d1a8492"],["/tags/强化学习/index.html","6dd68ee14fe844625f46a1c66b59f6d0"],["/tags/心理学/index.html","003d3b64ae88a1346ef25aba31447a95"],["/tags/感知器/index.html","17bb39cc49ce6e07ca98221d0dbde543"],["/tags/换源/index.html","bef31696208d9aca0a595e0520053e49"],["/tags/描述器/index.html","ec69f07c3ab51a286b09520971d7326a"],["/tags/敬语/index.html","5599ead223e1b53c603de3b24db69d0a"],["/tags/数据集/index.html","4a33925c20657714787ae121f5707e89"],["/tags/文件/index.html","1421ab36f0e8334258f9bab20cbea79e"],["/tags/服务器配置LDAP/index.html","ba35cf03d16243bc5cd26dc62f43e768"],["/tags/机器学习/index.html","ce748efc6781b88c3e01f1529c816115"],["/tags/梯度下降/index.html","0b54a67792561a2caccdfe036cd9fe74"],["/tags/模块/index.html","049ca63134791ca7c04efb150ec15b3c"],["/tags/正则/index.html","7b5c6d221022641b46fef71cb67c5948"],["/tags/激活函数/index.html","8cbba948b478363b8b3df453d3ab6b98"],["/tags/点击预估/index.html","44cc48192cfb4f6c4ae9c8da4222de59"],["/tags/爬虫/index.html","c19db7568ac2d1a45667271f03a1c159"],["/tags/生成器/index.html","96d8741d0612fe0d4bec0603e5510be5"],["/tags/类/index.html","3ed9189177ae1e8a8d5dadc44e9df087"],["/tags/线性回归/index.html","ebf02ff1d88496e4b4241f4be4b287b4"],["/tags/经济学/index.html","cb2c3809dad51766969a9f23dbd125c2"],["/tags/聚类/index.html","5fce082a7a7ba68466617f5b1f2a2510"],["/tags/装饰器/index.html","569743bdfd8b47e0c2ec02728ccffa2a"],["/tags/词型变换/index.html","cd422ab27860557652459747fa604ded"],["/tags/语义分割/index.html","4c5103045ee3f77cb073f610aff8f60f"],["/tags/语法/index.html","0b449e968462bc9c3a861cff5ee4c55e"],["/tags/语法/page/2/index.html","51039ae4ccb3df30e92c9753fbf6c26b"],["/tags/迭代器/index.html","b2253978f61ed596f178a1de53875156"],["/tags/逻辑回归/index.html","b387e1413dd929c607be453516417c5c"],["/tags/随机森林/index.html","a7ceffd862261e9a52528ef9dc342c62"],["/tags/魔方方法/index.html","41a8aeb225fff656e6db9b3aa5edcab2"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
