/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","7cee3f275f376d182f811d7e1a998381"],["/2019/01/02/Anconda常用命令总结/index.html","48e3e1024e722f87867629e9fb2fb9db"],["/2019/01/02/句型/index.html","f119119a8aa934de277404002b528f94"],["/2019/01/02/日语助词/index.html","c4021037dbbab2cbb20ac73419765c8d"],["/2019/01/03/on-my-zsh/index.html","07eb7e63462e2ecb73c98478d6790dce"],["/2019/01/04/《当我遇见一个人》摘录/index.html","f2c9ca7d52b25cb3dbd55174f0a8a1a2"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","4605ad18bbde606f9cab55a3333aa6e1"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","068d728d488958128dac2d4daeff9c0a"],["/2019/01/04/经济学笔记/index.html","9d4fdc48cb6acefc719e53131768331f"],["/2019/01/04/语法总结（5-15）/index.html","d5c694cd35a1b763389d5a4d153f4cd3"],["/2019/01/05/linux常用命令/index.html","5ca808c861b887ec84ce0bdc8e329900"],["/2019/01/05/mamba/index.html","488de1b6536344ff7ddddd58cbecfb96"],["/2019/01/05/rust 多平台demo/index.html","48f80e697642dc56b85d3fefe0860130"],["/2019/01/05/tflite编译/index.html","ad09b808db38015aa427eb97008fb00e"],["/2019/01/05/tflite转换/index.html","f26d4b85fa739fbc1249e578b4bc14aa"],["/2019/01/05/torch安装/index.html","6acd309e529b90426d094cc17374a9ac"],["/2019/01/05/vscode/index.html","1996ac3b06cc9960c5fb1169ae548423"],["/2019/01/06/敬语/index.html","4755314a56e557a0dd87f29c89d592f7"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","da724322c0ac3b7f8496902cf93af768"],["/2019/01/07/RNASeq数据下载处理全流程/index.html","5b4089ab003192ddb4cb51ad7af7f3dd"],["/2019/01/07/cuda 手动配置/index.html","4870fa3abb8cd314a7e24ff2c3f096b8"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","7cac26fad4613d1788b865c86bbee034"],["/2019/01/07/docker-ldap-mysql/index.html","2634f15bda821cafc5e5dc9931e62685"],["/2019/01/07/docker代理/index.html","f5d31cde318855bce28450122fad76f2"],["/2019/01/07/docker安装/index.html","c74b941a8e1b3024999a6a027e9c9083"],["/2019/01/07/docker容器挂载硬盘/index.html","f9128b98f5b088dd21ae835fc4c59e6d"],["/2019/01/07/github上传代码/index.html","f443ea1e84676b46fa369d36497d751a"],["/2019/01/07/kaldi 安装/index.html","e88caf28995527541f676ca1816835fa"],["/2019/01/07/linux常用工具/index.html","b41b51c3e3d288c2cf9ad98d1b59629c"],["/2019/01/07/opencv/index.html","12e0630fce8425d44b7a4f30a84c7689"],["/2019/01/07/ssh 远程连接docker/index.html","fba0859d3495917fde7600984b9f1f37"],["/2019/01/07/导出/index.html","87e86da7a30207554136ad3657738e0d"],["/2019/01/07/换源/index.html","fc4f76a24d2060ec4a98cea4abb9bd7f"],["/2019/01/07/服务器配置LDAP/index.html","cdc08614a112b8f99d9f47c4351a32c1"],["/2019/01/09/markdown/index.html","babfb0211defc798d296e99d80ff96c3"],["/2019/01/09/opencv图像美化/index.html","5466ab65acced80cc81210dd2c0ebe04"],["/2019/01/11/19单元语法/index.html","1b53f73a8be309b0d6cda98322aea2e4"],["/2019/01/11/20单元语法/index.html","9298ffae4229e3b32fbe9ebe80eab4e8"],["/2019/01/11/opencv-图片几何变换/index.html","830a88e378ad961bb38441a3291efbfa"],["/2019/01/11/opencv-图片处理及绘图/index.html","b3f8b60775796efa0bd3a3c833217664"],["/2019/01/11/wine安装qq/index.html","f674e3e66d04931bb14b25ddda16d386"],["/2019/01/12/tensorflow-可视化/index.html","4f5618d62c67348a7ae2f9868e710d52"],["/2019/01/12/tensorflow-基础语法/index.html","38ae1d4ecd376c6cde88125159969fac"],["/2019/01/13/RNN/index.html","7dc029e461fc0f991c5f448a6d860c98"],["/2019/01/13/keras实现CNN/index.html","2c7f5d9a569ca26a4bbab2423407b74f"],["/2019/01/13/卷积神经网络实现/index.html","8cab96f774aa99bdd078c9fa88e0ca85"],["/2019/01/13/循环神经网络RNN-写诗/index.html","4984ca0ecf264cb3901fed75157ec09b"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","642cc9b7fc8a7ee1550d7af1d8d66acd"],["/2019/01/14/反向传播/index.html","198e646f480e9fa5cafae2e0684e6330"],["/2019/01/14/图床/index.html","81f581b70496f372fb32af224de8fc2c"],["/2019/01/14/感知器与激活函数/index.html","22b76484450faf69dbe33f8512ade38d"],["/2019/01/15/PIL简单应用/index.html","f7f7a6a404197156acf9bbf486e86f9d"],["/2019/01/15/卷积神经网络理论/index.html","18890989db4a68399b5063994a724010"],["/2019/01/15/图片分类之pca-svc/index.html","9cfd5155f2e0f0d48cac1a5278938611"],["/2019/01/15/强化学习基础/index.html","3d3ada63577c9e60c13d223511af821e"],["/2019/01/15/经典神经网络/index.html","e74939c12885076ca3621522aef0ca90"],["/2019/01/16/DQN/index.html","65d15993b9e80c705d5a8ab66ea8777f"],["/2019/01/16/TCP传输图片/index.html","cc27fdcd0cc30e0a7cb7e36691a644d2"],["/2019/01/16/时序差分学习/index.html","93c1100463f4ca59291b79961d5cf834"],["/2019/01/16/蒙特卡洛方法/index.html","12cf679312292a43acd26015fad9f77b"],["/2019/01/17/Double-QDN/index.html","e93a0ebe492221888bc2d55a29409438"],["/2019/01/17/RNN理论/index.html","f2b19cc5b41cf29c02c48217f9e29aa8"],["/2019/01/17/梯度下降/index.html","bbcacb49285fffaa03aa3d970a0eea4c"],["/2019/01/18/PG和TD3/index.html","1956ed43699016e36a9b65ab76afa459"],["/2019/01/20/21单元语法/index.html","7fdfb89142537a983ba1b02ab6a25eef"],["/2019/01/20/GAN理论/index.html","6b2ebc89104dc2144dbc4f80bb3fa63f"],["/2019/01/20/PG3和IRL/index.html","f8366f4b2272fc3fccc144bcdfcea990"],["/2019/01/20/数据集/index.html","9fed26a4c1324fbbf12c0272619a32cb"],["/2019/01/21/DCGAN/index.html","8dcdc8d059e3d2985a008bd178eab745"],["/2019/01/21/LSTM/index.html","0998b0e60ce6b5e24244d29c6587e2b0"],["/2019/01/21/点击预估/index.html","620e19610a69bb4078d8d2c9398d3ef4"],["/2019/01/22/SVD分解/index.html","f16b177389acfd94684e26421afe2b59"],["/2019/01/22/SVM/index.html","237d58c73dd4cabe5fdbe821919acfcb"],["/2019/01/22/机器学习简介/index.html","bcc38b154af847790dbdcd243a2b41b7"],["/2019/01/22/线性回归/index.html","b90a25ae33e4407afd1f2ca9513c80d0"],["/2019/01/22/逻辑回归/index.html","98b55e0ae2e9d884c1b2aaaa54f89764"],["/2019/01/23/numpy/index.html","bc7866a233546fd9f63c1ff571241a8b"],["/2019/01/23/决策树与随机森林/index.html","7bae375adba3fbcb55f4123a18aaaa89"],["/2019/01/23/聚类/index.html","acc4ea4d31b19932e93e4a69971b304e"],["/2019/01/24/matplotlib/index.html","e835252ac774558a99f9fbd2d33eb374"],["/2019/01/25/pandas/index.html","352118f8a4ae15157d6ef5b51afd50a8"],["/2019/01/25/语义分割/index.html","5343ff3eb9d389c47733d9093de18e65"],["/2019/01/27/22单元语法/index.html","e268822c27a96ff9a4480d371965b4e1"],["/2019/01/27/SVM案例/index.html","871368822f51f0d4e232009cfc42c764"],["/2019/01/28/requests库及爬虫案例/index.html","6e9223e2de685b3319fd84bf2bbc8672"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","373f4e43d90f35a04dba8afde3cd192d"],["/2019/01/28/异常/index.html","c8830968e534c8f174890373a1c072a2"],["/2019/01/28/描述器和装饰器/index.html","feb9d772a5c58a22359d0129c97def4d"],["/2019/01/28/文件/index.html","71a311e972d60391317b7458b96d3420"],["/2019/01/28/正则/index.html","3adddfacfb0070a3ce850f617c638f8a"],["/2019/01/29/函数基础和函数参数/index.html","b73eef8878565d7646ff3410bb194834"],["/2019/01/29/多继承和魔方方法/index.html","099a3f82af2df067f3ebf732335e73e5"],["/2019/01/29/类定义、属性和继承/index.html","6c9b59236a740fe64061861b0b9f2b13"],["/2019/02/27/23单元/index.html","89cfcbb9be886b88758bf0c7efd69857"],["/2019/03/12/hexo加速/index.html","90cafc03acc57b9f30e0d8f4667ecfb0"],["/2019/03/12/hexo系统重装恢复/index.html","2f71ae02315bce64b01bd9d5851db48a"],["/2019/03/13/24单元/index.html","7e7426a8134c41e32905a0b492f51b69"],["/2019/03/19/25单元/index.html","117b015b9f45a71cc407fd9b79a09603"],["/2019/03/26/26单元/index.html","dbd2932cfa23544a19b6396430602d67"],["/2019/04/14/27单元/index.html","92e37436b8ddf61c8412467f32d3466f"],["/2019/05/01/28单元/index.html","21034790fa88fe1dea6dd7c923d080a1"],["/2019/05/02/29单元/index.html","6f4cf6774a52a84f64c0594973e9c167"],["/2019/05/12/30单元/index.html","d870dc516be6846b8a80fa54ecf2f8da"],["/2019/06/03/jni/index.html","3a16b7c0c1c0bb1f1439949116ada94d"],["/2019/06/07/JNA/index.html","19671bcf9b9e5dc00b11207b88b4acd4"],["/2022/08/07/R配置jupyter/index.html","d8e6206346bdd66e979e4ddf802ccd6f"],["/2022/08/18/FFmpeg常用命令/index.html","1f8851c59296a1aac5266e7bddc198a3"],["/2022/08/18/linux系统代理/index.html","c3f1d668a5efc99e6ff53853fc562fc6"],["/2022/08/18/matplotlib补充/index.html","c480f7ea7f5e6dbb7a7bbca7dc712f2c"],["/2022/08/18/常用命令/index.html","ce06efd2eb6e77f1c27a253a43991968"],["/2022/08/20/sacred/index.html","9cc3d9a4385e7512c3f3778de72b3c4c"],["/2022/08/20/wsl/index.html","c39f01fdd1f4d9af6836c762ae2a02e2"],["/2022/08/20/双系统安装/index.html","d99228cf2a1deb5c7ed7a448f687511b"],["/2024/11/08/source/index.html","b0b820052cb675e5259a9297812285c5"],["/archives/2018/12/index.html","de4af97425553bd5716ec8a1f6244343"],["/archives/2018/index.html","334e025904f96f3da4b02f942885773e"],["/archives/2019/01/index.html","eb95c4eab5c3a1d75c80cded6cc4d0c7"],["/archives/2019/01/page/10/index.html","563bbf9d0ac904431ce62d340fe5d592"],["/archives/2019/01/page/2/index.html","4b2b9b3e316f9f15e86ed0fc97df0331"],["/archives/2019/01/page/3/index.html","4866826af9fc66c7b073dea6bdeeb5fc"],["/archives/2019/01/page/4/index.html","a16579f61156b10c75260bd3ca0dcb1c"],["/archives/2019/01/page/5/index.html","167fce4732ef55f2d2ab1bcd8ab7484a"],["/archives/2019/01/page/6/index.html","30f88ab7fd0c8997cbb10060e76b276f"],["/archives/2019/01/page/7/index.html","517925312a00382f247fc79c44639bd2"],["/archives/2019/01/page/8/index.html","65688fddd0a34d44a04a0e7ff5a1191d"],["/archives/2019/01/page/9/index.html","162583ff57b2f58b8a703f6aca6b5570"],["/archives/2019/02/index.html","47356a31863d7fcac315306b89b0660c"],["/archives/2019/03/index.html","085cf9ae2f420c6522272b301ecd9115"],["/archives/2019/04/index.html","5ecae90d3d713800b5b63a7b7b553f79"],["/archives/2019/05/index.html","a2047bf6ad97a4fa7c88b8ac575e693d"],["/archives/2019/06/index.html","23991ed9759eeb103f9d571db3cec662"],["/archives/2019/index.html","c9956067dda54e23e1f7d412ac42f15a"],["/archives/2019/page/10/index.html","79301d4f9bf10e9b5bdaf388e7a5d4c8"],["/archives/2019/page/11/index.html","13fafe0e18b1e05d0d87324cf99186b6"],["/archives/2019/page/2/index.html","1042bfb13ea6b0cf5c8367e3d4009214"],["/archives/2019/page/3/index.html","50e28ed3277a45bf9f0b228fe0f086c5"],["/archives/2019/page/4/index.html","cdf4990b86198f782aa7a4aa2c3127b4"],["/archives/2019/page/5/index.html","68812666b1c9253b31c5d29575b3cc47"],["/archives/2019/page/6/index.html","4147f216e9bd9cdc17b3f26b550b6f21"],["/archives/2019/page/7/index.html","a4b2994cc17f9439a237afff7b94abf8"],["/archives/2019/page/8/index.html","33a62b6a5b20705409a2a20446bffdb7"],["/archives/2019/page/9/index.html","fcce526d7185d18eac2777765863edb9"],["/archives/2022/08/index.html","efbceb77c22c3457494f29e9389d99e9"],["/archives/2022/index.html","2a5bee7e8f48b63323489e45e0ebb17b"],["/archives/2024/11/index.html","7fed2b72012d1f65454e337512b6dac3"],["/archives/2024/index.html","5f3410df2b382c2dd09388ee26f14cc0"],["/archives/index.html","d43aa4ba27576f3479ec74db5eb7824d"],["/archives/page/10/index.html","9245c7976d5a6d69138108a179b130e0"],["/archives/page/11/index.html","c3cbe27d07ca92f85b6ca28b27d77b3b"],["/archives/page/12/index.html","1318f25390ba254eeb176cef53bb189a"],["/archives/page/2/index.html","f30d0cccd5f8e86e2d365415e129bdfa"],["/archives/page/3/index.html","b40d32d35b7f10d82e2a10edb3a8f679"],["/archives/page/4/index.html","cf25ad7afe2ca41fdf727dbebf306997"],["/archives/page/5/index.html","54327a69751ebb47f89092abe9e4679b"],["/archives/page/6/index.html","e8e75a5b4cda75e46af41d10cca4ef75"],["/archives/page/7/index.html","690f7fd0b60c98f77514066b22b5d556"],["/archives/page/8/index.html","c1ed9477fe4cdefc3e85ca2f6248b02d"],["/archives/page/9/index.html","adb1008f79085c52acab9ecc6dbbaac0"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","5180eea974ee778cbd69964d9b7be3d2"],["/categories/dxz/index.html","3a29c2dc589733b843694a035065aaab"],["/categories/index.html","594e0f3a131f5b756e66449acc504349"],["/categories/linux/index.html","41c6ddfd00149892a7f79048074b9423"],["/categories/python/index.html","4febed37e97f0c282d2ce4c11e9cdd24"],["/categories/tensorflow/index.html","30c186698af225747b64d6c139edc10b"],["/categories/图片分类/index.html","f33bb96f8236669af3e697d7eb0c728a"],["/categories/工具/index.html","1e187aaf9ad1a35a18f84e22ce30cf1c"],["/categories/工具/page/2/index.html","9c392c59ca7943a7a6b35826cb5016d5"],["/categories/强化学习/index.html","646760155cb4d905ffbdd6865470c30e"],["/categories/数据集/index.html","f79a869a290d317430604f9515274927"],["/categories/日语/index.html","b8f10b93eccd17e1386cb45b1162e865"],["/categories/日语/page/2/index.html","5a7e2ba149af969a04e551fb69f8bf5d"],["/categories/机器学习/index.html","0d54c75f8fc076fc00c70eb745917709"],["/categories/深度学习/index.html","9e4226f5cef3ec9a6f059f3b5dc93f11"],["/categories/深度学习/page/2/index.html","781f0361d1c65a8d1c30c935df66bf0b"],["/categories/深度学习环境配置/index.html","f13cea87818aec3d5bbbb81518d53993"],["/categories/深度学习移植/index.html","b21d44242e9a911d53c084bc289708b2"],["/categories/计算机视觉/index.html","f4b46fa5ad20274c7980396bca90b07c"],["/categories/读书笔记/index.html","188852a5a2872868b35da9312a582630"],["/css/main.css","76950c3eab5fb316a0848d20f70ec3ea"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","fa216076ea86d55afa2e0e722ace94ba"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","ea36e3329a59dc60bd88f5ddfcda2398"],["/page/11/index.html","ac5cbf0c9c9a68b2170a15ace191f847"],["/page/12/index.html","fa45b27b7a4352505e0d7af98dcf53d3"],["/page/2/index.html","0d995882789b141bead46df5b684c1bc"],["/page/3/index.html","2850844de3dba0367f2240d2cc21db91"],["/page/4/index.html","755a70ebd1e28003736a961207db858c"],["/page/5/index.html","90e072cc3bc8e32c3482ba9b6f14937a"],["/page/6/index.html","2e443415c0d51227b89b6fe82c5a7c39"],["/page/7/index.html","055a3be0bf72bcef560a29333317d1f9"],["/page/8/index.html","ff1000f2475948d3cb0dcf9b62d0ebbd"],["/page/9/index.html","0abd60fac08f335623ade3de70c6e456"],["/sw-register.js","d4e90f3209e1b2f76fea5c3b20be1e7a"],["/tags/AlexNet/index.html","0c235e8d20bd0b1dced3ba616d676a70"],["/tags/CNN/index.html","0818855635d229a08de057ef300c70f8"],["/tags/DCGAN/index.html","938a71ab9db148d2dc1671768ff530ee"],["/tags/DDPG/index.html","cf9b942816548060cf9494a0fce1a5ec"],["/tags/DDQN/index.html","fd096a946572a7fd95c081e553ef0732"],["/tags/DQN/index.html","d9ac959c114fd98add9cb10a616b57d8"],["/tags/GAN/index.html","e7131fc8fc433751a292080e2078cbc5"],["/tags/IRL/index.html","c8aa086951a30dab1e3689e9a9a0f8fd"],["/tags/LSTM/index.html","925fe0828c999ad35f6e68ecc4afd67e"],["/tags/LeNet/index.html","54f6c4a0fe19de4f8ef4dffa9d5a7df8"],["/tags/MC/index.html","0bc764aaad3a178ccff5c88a93aefb5a"],["/tags/PCA/index.html","013f396d70bead4721ed71dab08c2406"],["/tags/PG/index.html","67ad75d6924e19b1cbde0b433da08b60"],["/tags/PG3/index.html","f781628717893ea87df27468a0e2c2d5"],["/tags/PIL/index.html","d2bacb0bae9d2f8c7f74acca3b9ecfc3"],["/tags/R/index.html","168f621a19533283babd9e0cc8414d68"],["/tags/RNASeq数据下载处理全流程/index.html","bed29a15cbbffdd888415205f00a9fc1"],["/tags/RNN/index.html","045b22df723d2a7a2d835e29d28a6ab7"],["/tags/SVC/index.html","23680ee43e50d80a6e08c3ace5c5c049"],["/tags/SVD/index.html","f4f51eed1d63a419ed6df7dc9001b5f0"],["/tags/SVM/index.html","3d4818e0ee483115f7f82479ce08f980"],["/tags/TCP/index.html","4ef6ab4ed086dffb87e2db1bddd78dc2"],["/tags/TD/index.html","ee7ed89a0482f3000d643c7899aafa01"],["/tags/TD3/index.html","a00fa8513ded2fc9f1f8292f39dfe347"],["/tags/VGG/index.html","010e2ce9bdf1c52218d955391fd52611"],["/tags/amd配置/index.html","c7346021d071115def461437f81a935a"],["/tags/anconda/index.html","6548a9ab79fce5a98b46068b45b8b50f"],["/tags/conda常用命令/index.html","2324368d28a13a724fec5fb35146994a"],["/tags/cuda配置/index.html","d1f7d1a2987b4490043fe9e7a0e317f8"],["/tags/docker-ldap-mysql-arm64/index.html","675c3647135a51d36d80f473e0dfd623"],["/tags/docker-ldap-mysql/index.html","613069c6e8ddb11d91d3d2d9647b31e3"],["/tags/docker代理/index.html","5516fb129bf0e4452971bd4d570a18ff"],["/tags/docker安装/index.html","65f76045f506fe076c8a301f56d737df"],["/tags/docker容器挂载硬盘/index.html","8da9f78ae33d3485e01ac1abf6f1d495"],["/tags/ffmpeg/index.html","55e1e20e51738d034ffea06cd26c38a8"],["/tags/github上传代码/index.html","42cc496f3c65cc4d08d1afdad2844cde"],["/tags/hexo/index.html","e79cfea016538bf7d50abac9bc226293"],["/tags/index.html","f0573ec66a674bb57aca2db6e985de35"],["/tags/java调用C/index.html","ea5a46cd67d287a457444feff7cb07d3"],["/tags/kaldi/index.html","6d5ad89473f4a74e2de2cfb18c29161e"],["/tags/linux命令/index.html","4c5e5c0b1e111077666487339c57e50c"],["/tags/mamba/index.html","6fffead2eed9bd42025f30b1d61ccb24"],["/tags/markdown/index.html","a820a9d3dbcf7e0282baa65258b2de86"],["/tags/matplotlib/index.html","9c6197ea0e050b96421c2c9007ca6b71"],["/tags/numpy/index.html","94ec2a553ffa9354220bb3218c8ac727"],["/tags/opencv/index.html","fe72a260022ba0a1f7669648a4cbd3e0"],["/tags/pandas/index.html","c5bc0d70867fd793d03a60789a59b273"],["/tags/qq/index.html","820b14b04573985ccd862c0719eed3f1"],["/tags/requests库/index.html","5a4657a7a976b8143ea0bbc411fdae50"],["/tags/rust-多平台demo/index.html","903f7fda52351927b2cd676e6c0a09c8"],["/tags/sacred/index.html","527e11bebd18e61b3b6f15c6c7264000"],["/tags/ssh-远程连接docker/index.html","8e9107da74fe2b9dc1743ea157c4714e"],["/tags/tflite编译/index.html","79fa22b457059b5d7f6e8b3895012207"],["/tags/tflite转换/index.html","8ca18aa6b41b1aefaa3cda9e37895a52"],["/tags/torch和apex安装/index.html","ae9873746945adef368d587d75c7f97a"],["/tags/vscode/index.html","648ba2c9790c37d30f59f2e5ba23d13f"],["/tags/wsl/index.html","21971c12276cdcd2c8df48571b7b626f"],["/tags/zsh/index.html","70d28c6f8dc4ce41fa08bcb6f2dfe7df"],["/tags/代理/index.html","a9f28fb67a891796c0b1a29091ae2f6e"],["/tags/决策树/index.html","68921d71bde4c4e5ba48f9e39b44aeae"],["/tags/函数/index.html","dd47d58d7ebd599146e71ceceaf53ad7"],["/tags/列表推导式/index.html","1544b0fa05ebfba3973d23e0d5cce73b"],["/tags/助词/index.html","8271b0680fbe9221d271269da2471d9e"],["/tags/包/index.html","3d7c601a3d98a2454730631eee83bccd"],["/tags/卷积神经网络/index.html","90a0fa49fbe45f94dda437de5ac16479"],["/tags/双系统安装/index.html","7383fbeb5d568351c6ae3acf0fa22bc1"],["/tags/反向传播/index.html","9c3988b40fd57454c9e87e695be5d7c6"],["/tags/句型/index.html","e3a6085c96d003e90b59594ecd5df40b"],["/tags/可视化/index.html","2b7c987d9a191f50d15ee8bfa98883b8"],["/tags/哲学/index.html","51ec0599feb4827385816142878f19c5"],["/tags/图像美化/index.html","9cb16c4f2d5669d393aa4247a232193f"],["/tags/图床/index.html","21ce85632e338871568193729a613bae"],["/tags/多继承/index.html","0dca9c66d0666da74d59949579282d1a"],["/tags/工具/index.html","358ba46e2715c18d13451def192a4df5"],["/tags/异常/index.html","aed9713e6da39222de974dbb99667678"],["/tags/强化学习/index.html","ecdc6af4785bffacdea40ee9cedd802b"],["/tags/心理学/index.html","f8ae9ac02d2e27ed164c6d11e7750666"],["/tags/感知器/index.html","c9d07804918dbf5067f8ca23692f92af"],["/tags/换源/index.html","d96edc7f810a607d6f1963bbc27f4aca"],["/tags/描述器/index.html","141ff8dc7a0ea2469ac2fc392b5f74e5"],["/tags/敬语/index.html","17cc44397ecf6d3bf4d604f32678b104"],["/tags/数据集/index.html","e0a55f7562f38ec36aeb218ad2d82494"],["/tags/文件/index.html","30a6011100676d46866d820da87c5501"],["/tags/服务器配置LDAP/index.html","3ef3d4109f974c28dd2166b9dc616c48"],["/tags/机器学习/index.html","448d9ab68dcfab457837ca7ac8bbdfe2"],["/tags/梯度下降/index.html","80f0c03e0ccfe8c7aa508b0d866a9b22"],["/tags/模块/index.html","4c48494da72445058363c7b598194882"],["/tags/正则/index.html","6feb0cd5223d610cb971b6a6eb63f1ea"],["/tags/激活函数/index.html","0d2f02cc1a27383f7f26b39c7469d416"],["/tags/点击预估/index.html","e3e5861a1b4fbe827dd1af4150f8bcfc"],["/tags/爬虫/index.html","44f8b40772c7902358525b5c33a451cc"],["/tags/生成器/index.html","6e16dd9927603cda31716d5778abb70e"],["/tags/类/index.html","50344cf1eeac0d189e7027fbd7b0ba5d"],["/tags/线性回归/index.html","8cd78c33e3befc4b69bd9e8c57b3fea4"],["/tags/经济学/index.html","52868e8b8c630a566d42f7853bb9e09f"],["/tags/聚类/index.html","fee064c18138d3926869ba60201bdfa7"],["/tags/装饰器/index.html","1d4faf1e493cf638e6b76b363202e352"],["/tags/词型变换/index.html","368856596babdc32ce4815c0ad194ec4"],["/tags/语义分割/index.html","b811c7ec253634f2c0630c0c6ec50793"],["/tags/语法/index.html","1575e827d1bc898168962ef528cb53e5"],["/tags/语法/page/2/index.html","b4843bec62d94313d5dc7333422dbdb6"],["/tags/迭代器/index.html","e8b123abc8e7b93a7d884be097dd3a4d"],["/tags/逻辑回归/index.html","1c00f873ff60f7b272e794c92a4fb75f"],["/tags/随机森林/index.html","715cab79e48de70c1ef25061f337e4c4"],["/tags/魔方方法/index.html","9dbc90374f29a1cfbf94fcf3a42f418d"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
