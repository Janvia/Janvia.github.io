/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","2feabc4768c381b60a50d5a360f0e4e1"],["/2019/01/02/Anconda常用命令总结/index.html","312502862d32832ab98aa7ea82d29e43"],["/2019/01/02/句型/index.html","7f12f8b9769c746458be3ef08acdf706"],["/2019/01/02/日语助词/index.html","abe85d255f63fb71edd642cb62b5ac52"],["/2019/01/03/on-my-zsh/index.html","3fe5a7c75865bebb553b09095f5720a9"],["/2019/01/04/《当我遇见一个人》摘录/index.html","6ca5df54236a963ac847dc0a15ca8f21"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","32c4269e084a45472aaff51ffed47f79"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","cb7729be4ae4377f2c7b03b580b737de"],["/2019/01/04/经济学笔记/index.html","d962a1b764141c48e2262219a54114c4"],["/2019/01/04/语法总结（5-15）/index.html","5b69f1eb81158d371820186e238b8e81"],["/2019/01/05/linux常用命令/index.html","22180ceb32ede0f2b05a522703421b46"],["/2019/01/05/mamba/index.html","f0f95ed309ae0046c61dcfb39ff0a3c1"],["/2019/01/05/rust 多平台demo/index.html","a48f350f6e2c4515a0ecde921f82e06e"],["/2019/01/05/tflite编译/index.html","aaec11b5f6ecfbe997deb0e07647c349"],["/2019/01/05/tflite转换/index.html","bfbd8b41883e919ec5d85fc1f5ea7f10"],["/2019/01/05/torch安装/index.html","89a3d58ed8bca1c7bad53c419b4fce38"],["/2019/01/05/vscode/index.html","c828d9866fa5a934ae6d4297a7ccc96a"],["/2019/01/06/敬语/index.html","8dca9ede447c0cb9a4b8d2a02c0c70ac"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","fa8862c3be5474ebacde447bb765f836"],["/2019/01/07/RNASeq数据下载处理全流程/index.html","1690f9d9c11c62c4c71ceece55905c27"],["/2019/01/07/cuda 手动配置/index.html","90474c98141f5d075345f8b5bdc3053a"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","c9ae7d8de26ce2087b6f793f5b4266fd"],["/2019/01/07/docker-ldap-mysql/index.html","c4177e3ad152e74160299fbeff8ef2f7"],["/2019/01/07/docker代理/index.html","88d1f5ba93cd326570205ff879d56481"],["/2019/01/07/docker安装/index.html","e97c7188ee6eeb4206110fa807ba96ed"],["/2019/01/07/docker容器挂载硬盘/index.html","f8c67b0c911489a5b6706d047e47a87c"],["/2019/01/07/github上传代码/index.html","bcf70c18beb75cadb0ba6cc801e2a787"],["/2019/01/07/kaldi 安装/index.html","903501b084e65aba358ce815639ea59f"],["/2019/01/07/linux常用工具/index.html","b3bc55869e62b5026dc439c5e8a16f9b"],["/2019/01/07/opencv/index.html","fc12fde70c8cba77425e7a6f946df4be"],["/2019/01/07/ssh 远程连接docker/index.html","5459b1768de2d9cc93d5de754691a388"],["/2019/01/07/导出/index.html","3c82f0d18452c3553196a91193563822"],["/2019/01/07/换源/index.html","a4828340a749888079e4c1839008ae8e"],["/2019/01/07/服务器配置LDAP/index.html","85e74174f49a9d3902bd9259f9395957"],["/2019/01/09/markdown/index.html","9d7f3d6e020391b63b84cb00804b0a4f"],["/2019/01/09/opencv图像美化/index.html","bf252f77496654a0c9cced557c42456f"],["/2019/01/11/19单元语法/index.html","f907bb78e81d2465cdecbf3046d3ccd1"],["/2019/01/11/20单元语法/index.html","b3efb893ba3c831b29c5725f2c54eab5"],["/2019/01/11/opencv-图片几何变换/index.html","7ca77994f375b547ba45e8eda36a076f"],["/2019/01/11/opencv-图片处理及绘图/index.html","79e14886073cd01d07006871ae6ab5ef"],["/2019/01/11/wine安装qq/index.html","5a75573fc3844027e77dee6e5938673a"],["/2019/01/12/tensorflow-可视化/index.html","f753e4ddeac93a63a29096864b58cc1a"],["/2019/01/12/tensorflow-基础语法/index.html","4ff36aef2255837fa370679371cc06aa"],["/2019/01/13/RNN/index.html","9922c88e907b5f663eeaa84554145adf"],["/2019/01/13/keras实现CNN/index.html","9a711b74513f5a032ff4009795729d48"],["/2019/01/13/卷积神经网络实现/index.html","9618fa7208b9a21e3f779e37eef411c2"],["/2019/01/13/循环神经网络RNN-写诗/index.html","fd05dd2b7504f37ae7a4b6e70cd496bb"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","68251ffb5f1172a7fc027048b2edc136"],["/2019/01/14/反向传播/index.html","07069540a26e0c48b36a7ee3fd4ebd56"],["/2019/01/14/图床/index.html","31a33b88d552271a176c6946394588f5"],["/2019/01/14/感知器与激活函数/index.html","0e857fe35bc81f2e43a38ebf7bd05fb0"],["/2019/01/15/PIL简单应用/index.html","1a744da35dae905d28de05f7da6cfe33"],["/2019/01/15/卷积神经网络理论/index.html","1863bdc0981c3a562d6cf32a5e0e8fa8"],["/2019/01/15/图片分类之pca-svc/index.html","6028fbcc23b49ff7eff0a7ddc7c8f49e"],["/2019/01/15/强化学习基础/index.html","5adfb2d2de8f0aa292ba37d8bb5727a7"],["/2019/01/15/经典神经网络/index.html","f556b719a49ac6cf2a3f3f2b801aad9a"],["/2019/01/16/DQN/index.html","60c752385a1cb3c24bfcdf65114ffbcd"],["/2019/01/16/TCP传输图片/index.html","b640c554c33d26bf278969e7bd530fe3"],["/2019/01/16/时序差分学习/index.html","cb109d60ec7b88f1360459f9df8e75eb"],["/2019/01/16/蒙特卡洛方法/index.html","50de3fab76fb6c46b1a442aed20f2dec"],["/2019/01/17/Double-QDN/index.html","1b98993668ccdec3b01e4197e0c3bfb9"],["/2019/01/17/RNN理论/index.html","7e3609d9d874ddd54cbc9314d730485a"],["/2019/01/17/梯度下降/index.html","2394fb7cfab6b9ee8fb4f615ea970187"],["/2019/01/18/PG和TD3/index.html","2db6c519b75f66af444035a5e5ccc5b0"],["/2019/01/20/21单元语法/index.html","2f6123d0f3df7b1a75e3f2b1478c89c7"],["/2019/01/20/GAN理论/index.html","5caf379208e9c4eb83f8a2aaffe515b4"],["/2019/01/20/PG3和IRL/index.html","ec9660a15042c9e55c010c4874b12df3"],["/2019/01/20/数据集/index.html","859e59ef195005f5e8cfae2bd5d00788"],["/2019/01/21/DCGAN/index.html","e7c8f8004ac499b22e97dd3361eca7e3"],["/2019/01/21/LSTM/index.html","c0a25f9a1ca2bd0b697cfe96b7417ebf"],["/2019/01/21/点击预估/index.html","c5dfa542e9b84dffbde41b8becd3ac59"],["/2019/01/22/SVD分解/index.html","1540098a87745e3fd4f15e485c4954cc"],["/2019/01/22/SVM/index.html","b1c1abdcc2207992751f8045086d3728"],["/2019/01/22/机器学习简介/index.html","1e335f39fbdc176187b61cee02028488"],["/2019/01/22/线性回归/index.html","2a605d258fe192f28517b0b0dab69314"],["/2019/01/22/逻辑回归/index.html","c16287c9578231d2f0f654e394cf379c"],["/2019/01/23/numpy/index.html","79e305e3a5ca4d0138b9e825ca5fc18e"],["/2019/01/23/决策树与随机森林/index.html","fc35704a182d6d219815c6f70f14dcb3"],["/2019/01/23/聚类/index.html","9668e21abbd253b1d4de3eda3af32148"],["/2019/01/24/matplotlib/index.html","f6485d85c4e682133d70445506e6090b"],["/2019/01/25/pandas/index.html","f4f76b115c10d4b3f3a3b7c8809123af"],["/2019/01/25/语义分割/index.html","a69e821a3e0e37085e22654f40fc92a4"],["/2019/01/27/22单元语法/index.html","8580b03f6621c0ff1ddb88a21a787650"],["/2019/01/27/SVM案例/index.html","f07e9525963c1e9ac042af051dbf8edc"],["/2019/01/28/requests库及爬虫案例/index.html","ac614418d8b71b5492128dce7ae5db95"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","2b19a7044aedf1ce8387826840dcbaa5"],["/2019/01/28/异常/index.html","47ec688d75f68b6122129a299c6a0224"],["/2019/01/28/描述器和装饰器/index.html","f9eb6f609d1d66dfa2678a29f9cfa8b8"],["/2019/01/28/文件/index.html","bb24270d93ab8578ab70df831518c4ae"],["/2019/01/28/正则/index.html","ba9ebb047025e3ebbec64736d3b45955"],["/2019/01/29/函数基础和函数参数/index.html","d28013b9f7568934d4214f2aa336d54c"],["/2019/01/29/多继承和魔方方法/index.html","02b557033189e63e5d95d3007e29193c"],["/2019/01/29/类定义、属性和继承/index.html","d1a7375ad636419a11fecdad153c008c"],["/2019/02/27/23单元/index.html","0a432ec9c84a7394d031169f4a08010d"],["/2019/03/12/hexo加速/index.html","22b1ccfef518a250f8750f209e5e5a2c"],["/2019/03/12/hexo系统重装恢复/index.html","9dd9b2c2b5741ac07ad3cd435236f2c7"],["/2019/03/13/24单元/index.html","2dff67d945c55aa689ce122ac70d503a"],["/2019/03/19/25单元/index.html","e02ecaab9006c360d0c93f3046fdbfb5"],["/2019/03/26/26单元/index.html","a97ef83615aa7f4506a88606475bf9df"],["/2019/04/14/27单元/index.html","1757c92ca701630b157de8740b5693af"],["/2019/05/01/28单元/index.html","59d0a9ec405f53bb200f6cd150cfe216"],["/2019/05/02/29单元/index.html","c379d93c480ac863effbd85fe4138dca"],["/2019/05/12/30单元/index.html","336a6698a3cf21f0178f46a9bfc638b5"],["/2019/06/03/jni/index.html","802bc5806b895d9632eab306ddfd44b0"],["/2019/06/07/JNA/index.html","01a8afac63e8f5b0c99eff4571fdafa6"],["/2022/08/07/R配置jupyter/index.html","ff0df2a0c4d06361bb8218b61e900a85"],["/2022/08/18/FFmpeg常用命令/index.html","9aefe341b7068ef117f160b4a7bad4ed"],["/2022/08/18/linux系统代理/index.html","6f84a4a81ab0ae43a8f045cdedb2d6f9"],["/2022/08/18/matplotlib补充/index.html","4714c56775c3354e7e2771635049e818"],["/2022/08/18/常用命令/index.html","e018af22d07a15b709d80d6914e68a98"],["/2022/08/20/sacred/index.html","070f787f49f604d4af1f40fd1a9f945f"],["/2022/08/20/wsl/index.html","e03e96ab5a55af1c5d7e62c0bbd070a8"],["/2022/08/20/双系统安装/index.html","6bfaa582a2cf86a75ba8c6f8e2d0db25"],["/2023/06/28/source/index.html","c60b6be23ab66cb756e9e053e9165178"],["/archives/2018/12/index.html","f7c5c0c6387288edb19bfaa47fdfa318"],["/archives/2018/index.html","67ce6b4d3370014e5329074e31710f7b"],["/archives/2019/01/index.html","8df68e197c342355e76ea4f100ad1a4d"],["/archives/2019/01/page/10/index.html","5d65f2da9d698fc98957a4eaf440cc05"],["/archives/2019/01/page/2/index.html","e5e136c75fb93c4809e68ba9ff345807"],["/archives/2019/01/page/3/index.html","293e3a99d215753b7b2539474d286b8e"],["/archives/2019/01/page/4/index.html","c4cd3e8d207e5197f7db9728bf96c684"],["/archives/2019/01/page/5/index.html","83652678f747ff25fec5bed81eca2d2b"],["/archives/2019/01/page/6/index.html","057b7013493b1425cbec2d2ca4d28afa"],["/archives/2019/01/page/7/index.html","96875a30f766c859c6c42e5d7e3962ad"],["/archives/2019/01/page/8/index.html","1697cbfdd819b76621812ccd5245dcc5"],["/archives/2019/01/page/9/index.html","6c0980200212dd3c9bf8c9846dfbc49c"],["/archives/2019/02/index.html","ddb1b353f9390ec08dd23b7c26331ee4"],["/archives/2019/03/index.html","beb459ad12a8d64e0ee41baaf8ee0b10"],["/archives/2019/04/index.html","217b7cf8e587678a6206d852b367bf8f"],["/archives/2019/05/index.html","396919bd6e4697e05cd7ccb029315169"],["/archives/2019/06/index.html","9beba8776865c8d9e1076a29667a6614"],["/archives/2019/index.html","6ad934c4f459c4fe032a548269d15651"],["/archives/2019/page/10/index.html","b6454d78c09eea84ff4d7dcf49d492b9"],["/archives/2019/page/11/index.html","ea0cd8c22211db010d1d9bb8737e99af"],["/archives/2019/page/2/index.html","2c03003ab7d1130b30d6459d7536468e"],["/archives/2019/page/3/index.html","1a64c75fe5afdebef29e930b9fa0906d"],["/archives/2019/page/4/index.html","4ea3ad0f1e8f59b88a05ec4da5460d53"],["/archives/2019/page/5/index.html","99e5399678baf043590ef56ec10ed3db"],["/archives/2019/page/6/index.html","914e94bb1456f9652b58a9be5dfc5372"],["/archives/2019/page/7/index.html","4e9527d61c3bf84a6a2317eaeb1b09b2"],["/archives/2019/page/8/index.html","831ec3035642f787b0cb9fc2ebf48185"],["/archives/2019/page/9/index.html","071a260ce4a3975fa798caf46ac50b68"],["/archives/2022/08/index.html","e1375571783bb3eb4e0a52cc4f541d5d"],["/archives/2022/index.html","31d9d205d61c93108cabdcbb89b73225"],["/archives/2023/06/index.html","93eda6e68582443cbf884eb243a1cf83"],["/archives/2023/index.html","e38530a7f63fa6351ed40b5bf2b89b4a"],["/archives/index.html","5cb01f7be96299d4fe65eb8793a2be34"],["/archives/page/10/index.html","538b8f098ea1a3d4aec3554626cd7ce6"],["/archives/page/11/index.html","d25a6a9273522247050009e373a6a310"],["/archives/page/12/index.html","c734bf2fc28f5a50bdeff9ed96799944"],["/archives/page/2/index.html","7a15276ed136188868912333f8b5dc35"],["/archives/page/3/index.html","dd67331010da24f8591ca71072775f3a"],["/archives/page/4/index.html","47250509d179d8ad07d773e8776e0aff"],["/archives/page/5/index.html","2e54e49a141b736105a96b8a0ae5172c"],["/archives/page/6/index.html","a328acfee26e8cd9271b01e64bd18a93"],["/archives/page/7/index.html","00b84fc10ef096576d666c00b9f24dc7"],["/archives/page/8/index.html","814578ee94f02c31724c48b5fea7ca05"],["/archives/page/9/index.html","e3ac17f9305d07a1594d217915ff279f"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","2f42eff8dd94724d80864b5b8533d3e3"],["/categories/dxz/index.html","41a16291af52e895c56293a2cfd5f135"],["/categories/index.html","44d8319b2a3b1c4a5d842eafcf5b2cc7"],["/categories/linux/index.html","b986768519a2ba2c6a63f40dec93a1a9"],["/categories/python/index.html","9ff44a29a7cfb81e9d12e75655f0ec5d"],["/categories/tensorflow/index.html","49f271c5b1f4b904ea8f6f0a213b43ca"],["/categories/图片分类/index.html","1a33413e68b036b16e4dfad221441cd7"],["/categories/工具/index.html","dfe020c1716d70805db15be70bd0e024"],["/categories/工具/page/2/index.html","6395aa2c63339c98f2100c3c1b7270a7"],["/categories/强化学习/index.html","9475217c8fa2b10867bcfc7ed7d4ba5b"],["/categories/数据集/index.html","2d479d359d19d5e5589e26654e277764"],["/categories/日语/index.html","30cf73da7e5cb515c82cd0a2d1632719"],["/categories/日语/page/2/index.html","95d6f223cc244f3ba935b0235dbd43ed"],["/categories/机器学习/index.html","5d3eafedbf1b0ad8415e9262b4e5351a"],["/categories/深度学习/index.html","42912ff98b3f5bd77c267e40516890d9"],["/categories/深度学习/page/2/index.html","d010393b548d3e8082e924d040a84059"],["/categories/深度学习环境配置/index.html","b39155819fabca76c57c402eac05e462"],["/categories/深度学习移植/index.html","47941f43cd1001094ec4cf266043ef5c"],["/categories/计算机视觉/index.html","c7807252b0037910034da38c77f6a4cd"],["/categories/读书笔记/index.html","6703f59c9ca9b0ffde8c286e06bbe61f"],["/css/main.css","89285864a44dcaba8ce9fa839f2af6a7"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","8b2b54279599965243b3c412e9b2f5ec"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","fca90e7979f3603aed06e01b346e217c"],["/page/11/index.html","345b04374918354e6723883e1b8a17cf"],["/page/12/index.html","f7b0550f5bb166cb8018c3db4d6218d0"],["/page/2/index.html","0579ebf86db0da0b86d76eadd318a3f5"],["/page/3/index.html","7d8b8d9d5fef7145a898050c3bff2b93"],["/page/4/index.html","18201e4124c9925a8034878f7f321590"],["/page/5/index.html","8dbfc58171e87699ff5308d4dada8ae7"],["/page/6/index.html","3a49cba3bd2b8b0a727d11e0d6701350"],["/page/7/index.html","1d5069e5e849c630fba27b5fb0ff9304"],["/page/8/index.html","72107cb39b6659dec30513e8a3270406"],["/page/9/index.html","e54f985c6bb2296d26a64a158e74c4b8"],["/sw-register.js","ff5cda58dae3a6bb6df3d653858f1acd"],["/tags/AlexNet/index.html","d4d628d531de52ac7fd28d0805507f44"],["/tags/CNN/index.html","b82a6820c7e38e682ae48b5205f70ebf"],["/tags/DCGAN/index.html","4d4dcddfa47a815dc0c4e025a43f8d48"],["/tags/DDPG/index.html","259ed68c830cb51a894accc9c01ba989"],["/tags/DDQN/index.html","5ba938546388dd1295125ebd5ce6470b"],["/tags/DQN/index.html","e5f749246d9b7210f762e0a30b584783"],["/tags/GAN/index.html","5f2c3ab677d38e773770a23008174eab"],["/tags/IRL/index.html","308820a4f238aac67071503206f7eaba"],["/tags/LSTM/index.html","c5ac282d8d212cde667e92d837d43d89"],["/tags/LeNet/index.html","a3e4401975a997dfa016df4b55bc3643"],["/tags/MC/index.html","8514daf70972e46aff3d218258762947"],["/tags/PCA/index.html","08ff33edb5cdd139b48ba563bd490aaf"],["/tags/PG/index.html","37983371314f2e90989cd26e4c3b8d5f"],["/tags/PG3/index.html","b70d7f83f1b16524f2353b236fbea865"],["/tags/PIL/index.html","0bb636b7117211a18ebbe712a6ed4573"],["/tags/R/index.html","a140d80b042f54822f3bb180e27e8db2"],["/tags/RNASeq数据下载处理全流程/index.html","1606d193836c52264ae72460d8d2263d"],["/tags/RNN/index.html","c9c3e36c242ac913850101a0139cc1df"],["/tags/SVC/index.html","7714b79ce5ddaba731a510485d6ad2ea"],["/tags/SVD/index.html","cf749318b825b58a5ca731eea8a2249a"],["/tags/SVM/index.html","6a4cd9fee367b6ad97c1460b7b65ee60"],["/tags/TCP/index.html","12d0be1c3d36249415cddd4f8d15cb05"],["/tags/TD/index.html","099479b76933a745d61a8040b398a8fd"],["/tags/TD3/index.html","622a399826bc127e957ce1de22e03544"],["/tags/VGG/index.html","4dd9b4b6905b6828895c2e9d8cddbed0"],["/tags/amd配置/index.html","657b61a119d10eb443126ba2a3ecffec"],["/tags/anconda/index.html","864e08fc5fbe558dd033ff21b6326890"],["/tags/conda常用命令/index.html","9f2314b94a95f663e5d50100ecdbf084"],["/tags/cuda配置/index.html","f68e0c51700fd963055fc973238780df"],["/tags/docker-ldap-mysql-arm64/index.html","102c0b0e2d058bdeb1e97d3bc970506f"],["/tags/docker-ldap-mysql/index.html","8ba23dd345708e80f6d119a170da2257"],["/tags/docker代理/index.html","cc2a6ee73e6028586b2f01f51f15b3ad"],["/tags/docker安装/index.html","be945a4c7e73e1882f9f51f52db148ff"],["/tags/docker容器挂载硬盘/index.html","b1cea496f862555da42ac6b03ba858a5"],["/tags/ffmpeg/index.html","69fa05d1c04967c909d9d89a8613d592"],["/tags/github上传代码/index.html","2f95b0f1da75e5888d41b4ba406c150d"],["/tags/hexo/index.html","8fad82ac15721e39c3f2462de82a5fe4"],["/tags/index.html","2d4b5bfaa3e243080b53016d773179a0"],["/tags/java调用C/index.html","5298dc501863aecd68464970ca44e049"],["/tags/kaldi/index.html","d6570037f93c8744b2b4263d5aa190f9"],["/tags/linux命令/index.html","c17b984dffd7b87956095f96a8b35d9a"],["/tags/mamba/index.html","941d9af1b5a5772faf01c9ca71561fa6"],["/tags/markdown/index.html","e00cf9c1aa196056f43aba51770a741a"],["/tags/matplotlib/index.html","0e6b7a973ab14f1d557419a2b958b824"],["/tags/numpy/index.html","73298badc012f60f367d3557d6d0276f"],["/tags/opencv/index.html","58207c0c50d1bd8bf2937dace45e5760"],["/tags/pandas/index.html","a7f269b9ca794eb5bee8add26dc1f0e6"],["/tags/qq/index.html","2126b696241c48deeb650def27bfd972"],["/tags/requests库/index.html","99c0b939ccc832e65b123b2d10c5564f"],["/tags/rust-多平台demo/index.html","fe8d782f9295dbe770226bcfc1bf0faa"],["/tags/sacred/index.html","1ac72e3486701bdf98c95fcea5e7fe01"],["/tags/ssh-远程连接docker/index.html","a3c9b1a9f592bc2c11859c52ca0a63c4"],["/tags/tflite编译/index.html","dff201b9fb9a5a278fb9a6a0a0c90246"],["/tags/tflite转换/index.html","97a09fa889528aa50327d2ed98db81ec"],["/tags/torch和apex安装/index.html","afce57cdcec93982b5f15e534c2d99cd"],["/tags/vscode/index.html","d4eea985d23b69a88a48a5bb44029968"],["/tags/wsl/index.html","662d9c12cc634a5f4d9a89c6c85679db"],["/tags/zsh/index.html","ba1282a120ee7898ad01dbd29dac901c"],["/tags/代理/index.html","f30196031287604b868861653ad3e376"],["/tags/决策树/index.html","470f3fc7e9fb456ce95ac594b98237af"],["/tags/函数/index.html","a99d4c2ff9907de78075564d9324f83a"],["/tags/列表推导式/index.html","83e4be950d214e960c51b43d0eb9f6f4"],["/tags/助词/index.html","711c445337395b86f62e01f580c36b5e"],["/tags/包/index.html","ae0f4d0a2c914f9f0258af5da37b450e"],["/tags/卷积神经网络/index.html","25af874f7897ab4c4a2507ab95f69fcd"],["/tags/双系统安装/index.html","df2a66e37b58b8323648b381d7160e6b"],["/tags/反向传播/index.html","e90bb7cc3e2990d212220dbda0ae151e"],["/tags/句型/index.html","a09d44afe93384c0b4d6ad0e2ef70423"],["/tags/可视化/index.html","db0dc41c777f4cd953d157a966820938"],["/tags/哲学/index.html","957249ed0655bc4ddaa332414ffc1bb3"],["/tags/图像美化/index.html","1bf8f89f6209ceed5f10e8ac5cd04b95"],["/tags/图床/index.html","7f693179378068336d08a8678e57dc6e"],["/tags/多继承/index.html","af1e38f5dbf8223060d978ed1b48564a"],["/tags/工具/index.html","c0436e6c2ed2ef18313bb46a4310d9ed"],["/tags/异常/index.html","5a77d7dcd39cb6edf1b93a6a21b7b772"],["/tags/强化学习/index.html","a33692f82b883cd33bbeba6b3e3fae95"],["/tags/心理学/index.html","69f856960448d766f1a19d2cdd340603"],["/tags/感知器/index.html","1800be613f7335d0182c0e2d9d89c5f8"],["/tags/换源/index.html","e5db17f4d98f9bd5a1160fcbce785fc7"],["/tags/描述器/index.html","87164d862252a4489036ceff47e587d0"],["/tags/敬语/index.html","7fece791a12684b1ed5c059ff2518a86"],["/tags/数据集/index.html","3eb38460892ff45789433c2bb2d9e6ca"],["/tags/文件/index.html","7f870e5cc6dba0c133ad2c2950bfb960"],["/tags/服务器配置LDAP/index.html","15d76865b35024ae056c844a957f82ee"],["/tags/机器学习/index.html","b38b318966e9781a67669c1bd17ecb36"],["/tags/梯度下降/index.html","f0acb0965bf4b82dc71023328b370800"],["/tags/模块/index.html","21d23e1e699311943ca65cae3012a0e6"],["/tags/正则/index.html","a6610e4ef4389e0810211858742d7ef3"],["/tags/激活函数/index.html","7b5c06613578015e4499ec3a1d6bffc4"],["/tags/点击预估/index.html","310fdbafc22466b522e4b65a44db8688"],["/tags/爬虫/index.html","4c9f66238fbd430eb2d4ec55b8120d6d"],["/tags/生成器/index.html","54ea46d5ae10cf8e945bc0b9e8abc9ac"],["/tags/类/index.html","cac4691e5aa17b837109e420393802f5"],["/tags/线性回归/index.html","db9b399b6658e897861caa7b4dc7db6c"],["/tags/经济学/index.html","b51d2c48a96bbab07128394052fddaa4"],["/tags/聚类/index.html","3f10eb462eca6f58326cd8096e38e303"],["/tags/装饰器/index.html","75833db29dbac997a11e9ea078baf1f1"],["/tags/词型变换/index.html","05910b1cee27d3e6272776d48b02b489"],["/tags/语义分割/index.html","4cdbbc7b901eb5ccab9120760ccb05f5"],["/tags/语法/index.html","c6299d9a8b612ae9bbe030e19d06b385"],["/tags/语法/page/2/index.html","fc7c5f138fcf67735cd410d75e1457ce"],["/tags/迭代器/index.html","999f0815529028e7da5fe5e78a301043"],["/tags/逻辑回归/index.html","299f7ca4be2449dddf50bb0a2ae3ba56"],["/tags/随机森林/index.html","c600ef0dfda2b3585f5415116a5498de"],["/tags/魔方方法/index.html","64d5f27a4001408767cd10f3e0728c95"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
