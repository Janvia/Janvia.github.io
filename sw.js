/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","09a3eddba9a48da57a53f3af310a42d9"],["/2019/01/02/Anconda常用命令总结/index.html","09f121ef44af393f1900668bbc227f7c"],["/2019/01/02/句型/index.html","549a3681ccd3b52fb2484c6c06a3a91b"],["/2019/01/02/日语助词/index.html","c5d510b8c0159b4fc545f2112cebcce6"],["/2019/01/03/on-my-zsh/index.html","db0225884e94f4be53f5b0d37e1406cf"],["/2019/01/04/《当我遇见一个人》摘录/index.html","af29c3c272d57b18b105cefce55bb015"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","aa5bcc47c89247a6df6840a9591b8f61"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","c2f7877206f0b6b965e561ca3154c353"],["/2019/01/04/经济学笔记/index.html","e066680f41260a439cdd06e1ff83c3d2"],["/2019/01/04/语法总结（5-15）/index.html","034b69c02d7578f7a2725f4e12fd11da"],["/2019/01/05/linux常用命令/index.html","92f5045cd24d3d3273aa61e9515ce6dd"],["/2019/01/06/敬语/index.html","964392b2613d47ed839ce2e8e6ed94c0"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","f119f60d425cc33c72b70834a7fa20dd"],["/2019/01/07/cuda 手动配置/index.html","03ccb92b8685c9ff3bbec405188b1741"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","e566d223db646df94b13a3c384a5c5e7"],["/2019/01/07/docker-ldap-mysql/index.html","af5f5805f7315b3006a4a7aa249c1dfb"],["/2019/01/07/docker代理/index.html","d55be947c7ed19e2d7fa186d18513a7f"],["/2019/01/07/docker安装/index.html","9cee67f9dd85053dd121606a36689594"],["/2019/01/07/docker容器挂载硬盘/index.html","ef5500ad8b45ffd9e5793b9eb9b6f628"],["/2019/01/07/github上传代码/index.html","5de5984a69ec99d53692600f946b18da"],["/2019/01/07/kaldi 安装/index.html","7ef3c952ed6db81ba50b7d86e3c313f2"],["/2019/01/07/linux常用工具/index.html","9f2f9f05bd1b91028a3006e18e4a8b17"],["/2019/01/07/opencv/index.html","8a93a7452df02cb716153459bd5a85ce"],["/2019/01/07/ssh 远程连接docker/index.html","81f401d51dcc5b18866cd88ade494f91"],["/2019/01/07/导出/index.html","1e91d82eacd2053d30d5d0aa13c3cf0b"],["/2019/01/07/换源/index.html","a25eb78778472bdd4b9532f4a94c26e0"],["/2019/01/07/服务器配置LDAP/index.html","6da33d2901522cf9c110240774ad745d"],["/2019/01/09/markdown/index.html","bf7857958d77a9ad62296258ce8937ca"],["/2019/01/09/opencv图像美化/index.html","a7de16dda86855db786f8600e7c90ec3"],["/2019/01/11/19单元语法/index.html","4a303c78277debd85e88a83b7065a0ea"],["/2019/01/11/20单元语法/index.html","ca84fc2aa9f69c669bbca6f58b691190"],["/2019/01/11/opencv-图片几何变换/index.html","ddc907bdf1136c3254b80957b89caf3a"],["/2019/01/11/opencv-图片处理及绘图/index.html","061f5afe514e72ce30ac4150308cb175"],["/2019/01/11/wine安装qq/index.html","8d11be10d4147e1443673adf45ad95dc"],["/2019/01/12/tensorflow-可视化/index.html","0c06434d36cff1c6035465f5a9cf5179"],["/2019/01/12/tensorflow-基础语法/index.html","76727b8fd56532e4b92d7420c05904ed"],["/2019/01/13/RNN/index.html","916c55747bbf6e5cdf937eb08e0a79a4"],["/2019/01/13/keras实现CNN/index.html","63b80ff00680e1c5538932ed7cf36784"],["/2019/01/13/卷积神经网络实现/index.html","90f3a46c8aa7f424dd90737be96faabc"],["/2019/01/13/循环神经网络RNN-写诗/index.html","12b876583b87f81c2091308f5c8a98aa"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","caba957eec7a31a20b8de507d34039cb"],["/2019/01/14/反向传播/index.html","bf2f948f8cd244a8778c0212d3e131de"],["/2019/01/14/图床/index.html","29443cdf5583347f1367528cf2a222c6"],["/2019/01/14/感知器与激活函数/index.html","ce43eaa5b4abdb649c184cbcb6e2bfff"],["/2019/01/15/PIL简单应用/index.html","5019c6469820db4eb545b2b21afaa357"],["/2019/01/15/卷积神经网络理论/index.html","900732efcc82b04f9c17aadcc4cce9f2"],["/2019/01/15/图片分类之pca-svc/index.html","8848cb42fc18ee7369635ea2722f3d88"],["/2019/01/15/强化学习基础/index.html","14e57cd6074315fb191041f385a22df6"],["/2019/01/15/经典神经网络/index.html","627cf9c44db56f7825df4601b90fd09a"],["/2019/01/16/DQN/index.html","57ebeba4ffcbe4f944ed12286133666a"],["/2019/01/16/TCP传输图片/index.html","aa9e8320d13c747d293afe987e7563b5"],["/2019/01/16/时序差分学习/index.html","61227f8f8c4e671c75d29c8dd8b62819"],["/2019/01/16/蒙特卡洛方法/index.html","ab26b1b3731ad3f39026b802271db71e"],["/2019/01/17/Double-QDN/index.html","2f5586a63f276f1801b00f3ab100dba6"],["/2019/01/17/RNN理论/index.html","e34b34f58cc005494931246a1b8283d6"],["/2019/01/17/梯度下降/index.html","44998c977705c945835c2dcdb2deaa90"],["/2019/01/18/PG和TD3/index.html","b57ba59654be0ece5a3ad5041c8d7a68"],["/2019/01/20/21单元语法/index.html","2ab5d8dcc9207d10144539eb80c54f3d"],["/2019/01/20/GAN理论/index.html","6aa371216ac48294b3dd5dbf980a48d9"],["/2019/01/20/PG3和IRL/index.html","f1b7c6be9850a29120431b33828a7a41"],["/2019/01/20/数据集/index.html","ececb15f9957a95b9cbfd0fcf2e622d1"],["/2019/01/21/DCGAN/index.html","e067867adaee5f53cb0f362fcedab4dc"],["/2019/01/21/LSTM/index.html","963b7a55630112697f37e5d9259428fe"],["/2019/01/21/点击预估/index.html","b778adad7159c30f10d0d00cfe59993c"],["/2019/01/22/SVD分解/index.html","3d4b7e9f7768b0728377d21e061746ab"],["/2019/01/22/SVM/index.html","f89c7c82e39f4abec3847873b8e3bc88"],["/2019/01/22/机器学习简介/index.html","c63a0036c55a9057197b39079f708d45"],["/2019/01/22/线性回归/index.html","b5c42fb3339b6ae0482730cb2382d48b"],["/2019/01/22/逻辑回归/index.html","65a884285faf43d7a20a480f61bb041a"],["/2019/01/23/numpy/index.html","a19ff672e3248bb4a4cf425e00def1f5"],["/2019/01/23/决策树与随机森林/index.html","aa9a44c5cb87d8553402a1e86f2f2710"],["/2019/01/23/聚类/index.html","d5a3b7b578a24ac312c07d47bba0d99b"],["/2019/01/24/matplotlib/index.html","56caee0ba33a25b3cb084e4231083feb"],["/2019/01/25/pandas/index.html","33961db547f50a7a4288172a141d7794"],["/2019/01/25/语义分割/index.html","1f3fa3c070713bd768e7bf4ee3211e1c"],["/2019/01/27/22单元语法/index.html","ca5a3c8332715cb34bd7a76e5f95663f"],["/2019/01/27/SVM案例/index.html","0e7b18ecbe5dc32338b6121e10719a3f"],["/2019/01/28/requests库及爬虫案例/index.html","788ed688645bf1e2ee1acbab26c8da19"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","96b5028be7fdeada8ce6e2cdcfb03b36"],["/2019/01/28/异常/index.html","7dd6274a2e3d6b585ecfb274d0ab9d37"],["/2019/01/28/描述器和装饰器/index.html","7903d5842ed376c888e3bbd9de8d3d95"],["/2019/01/28/文件/index.html","c9d36cae0927e805686be36a889669b2"],["/2019/01/28/正则/index.html","9813bb745f47dfd9184f3b819d4a27c2"],["/2019/01/29/函数基础和函数参数/index.html","825f9a4898d11c196ee12886015dd791"],["/2019/01/29/多继承和魔方方法/index.html","8f40b32161c2229fde3dbd570c22ad98"],["/2019/01/29/类定义、属性和继承/index.html","ccaa45761aa1e66a1c9190440d2ac8ea"],["/2019/02/27/23单元/index.html","7b894d14eeaae01e1c13463d0738cbcf"],["/2019/03/12/hexo加速/index.html","923cb475a95cdb5215eccabf01ab9e6e"],["/2019/03/12/hexo系统重装恢复/index.html","bbafe97d4e9b0332cfdd989df0c6ed43"],["/2019/03/13/24单元/index.html","c7ffc813a4c4c327a9f50529b323cb2c"],["/2019/03/19/25单元/index.html","a5ee879a0e28c6ed3dc5ba2a4ace7ad9"],["/2019/03/26/26单元/index.html","71bf21ab78ceb6b87cc28e02286ff8e8"],["/2019/04/14/27单元/index.html","3d55f2c98bc019cb06d117fdfcb7db5a"],["/2019/05/01/28单元/index.html","b33b7eb4323e43d20a175c3318b20365"],["/2019/05/02/29单元/index.html","3d9aacd74f6b0fabb015849179b1744a"],["/2019/05/12/30单元/index.html","70c869e1d417b044cc35b59fbd3c182d"],["/2019/06/03/jni/index.html","97a9626ac8be8333574dba19bb654ae6"],["/2019/06/07/JNA/index.html","5ac99b4e561be8c1e2c0e0c6fd5f0695"],["/2022/08/07/R配置jupyter/index.html","8d9156243f675a8948d32182b9d2bb4f"],["/2022/08/18/FFmpeg常用命令/index.html","b2f5776c369971182f7d8dc7d47b2532"],["/2022/08/18/linux系统代理/index.html","b8a038716bccb3ca1443184e1fb3a355"],["/2022/08/18/matplotlib补充/index.html","bb33ba71836dad55e85fdbd3eb4b97b2"],["/2022/08/18/常用命令/index.html","8c23e277b2d44d4505b46555d646e8d6"],["/2022/08/20/sacred/index.html","aeaad20be4f0a4de9819403ca9d22845"],["/2022/08/20/wsl/index.html","0630f252b8839915e9fece864ad3a046"],["/2022/08/20/双系统安装/index.html","6a1fe3001e0def2fad78823ce9783b93"],["/2023/06/28/source/index.html","6d7dfb844095c920569a5d7f63be15e3"],["/archives/2018/12/index.html","dd47242c27d6ae61d7b6159b4495d289"],["/archives/2018/index.html","769d4f365350b6a962d8ec45fdd0a1d9"],["/archives/2019/01/index.html","f7137e5b7b725f4e1992b9ef146e11de"],["/archives/2019/01/page/2/index.html","e31f1ad3721ca872b96d3b6d7c936829"],["/archives/2019/01/page/3/index.html","18f417c798f8e3154861bef90e54a855"],["/archives/2019/01/page/4/index.html","1b826a4351a43a352b2a5ed8a7d6ce55"],["/archives/2019/01/page/5/index.html","b37548c8367229addf705cccdc19091d"],["/archives/2019/01/page/6/index.html","de425705cbbd7b9219ba4fea449a6e36"],["/archives/2019/01/page/7/index.html","414ea6ece87487a8e5f3d7a708bdb2ea"],["/archives/2019/01/page/8/index.html","abf2b88d8a66a3c49bcffc135bf640b5"],["/archives/2019/01/page/9/index.html","4265eb7ad45c819df4be8a2ae0ec1af1"],["/archives/2019/02/index.html","9277e4f6ed729999b71b80a53cf1dd71"],["/archives/2019/03/index.html","a7e8e5961c9b0ec23476fd4db24e97c8"],["/archives/2019/04/index.html","327fdd1346f7a9ef84d6bac54b095345"],["/archives/2019/05/index.html","f64837d6187bc3cd54982da5dedfb07b"],["/archives/2019/06/index.html","79385e75ea73dc7f0e8776722ab95299"],["/archives/2019/index.html","07fac18c263942ed17d55de405273591"],["/archives/2019/page/10/index.html","07aa2463ea7cf400723ff81b5579104e"],["/archives/2019/page/2/index.html","3928de0f745be41e16a70e0428d666c8"],["/archives/2019/page/3/index.html","5bf4e4498230638926e49a843e9e8b2a"],["/archives/2019/page/4/index.html","e95054bc1d1641e6e9f29e6d0cc62cee"],["/archives/2019/page/5/index.html","f28535d0acc253f677f01f997a13d97f"],["/archives/2019/page/6/index.html","caaf5060fe05a2e4fa8b99bead09da7b"],["/archives/2019/page/7/index.html","64c013753b254c45337faf9c24cfb734"],["/archives/2019/page/8/index.html","aa00c98b46bdba57f7ad44873b44d452"],["/archives/2019/page/9/index.html","4e059339b18cce1109dcab1165605c7e"],["/archives/2022/08/index.html","4df21873d797fddf4e55fd6ba5071128"],["/archives/2022/index.html","2b37c6ffd8138f72a17a202649f83149"],["/archives/2023/06/index.html","b8ff5fafd54b4d630e610904ef8f04ad"],["/archives/2023/index.html","7b12ab999f42a471e647f346cb760a22"],["/archives/index.html","8eea726a9466db321e453343c35bc2f7"],["/archives/page/10/index.html","25e45da40be2bdb23250ee102c97f0b9"],["/archives/page/11/index.html","d32b0aef19ef6c845689d1e2bf5ec894"],["/archives/page/2/index.html","85dd769590dfeee44310e8ee05a72385"],["/archives/page/3/index.html","2dc0190367476930f196615d3c187ff7"],["/archives/page/4/index.html","49f30ba09e3924c936ee877c9310c0bb"],["/archives/page/5/index.html","08f119e6ae3b81a1f5579b84b217d2ac"],["/archives/page/6/index.html","7e358ac34ecb6bb47b5414905dec629a"],["/archives/page/7/index.html","9934ab9b73bf9764b763a317e3835c4a"],["/archives/page/8/index.html","ccc4432b1175aa2328a39dd8b1e2c114"],["/archives/page/9/index.html","ad5b3bfebfd69f9c185ef15b63932694"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","fb05ee7bf904c877850c9d298e66c90f"],["/categories/dxz/index.html","c41d6976628755ae01bc83f492a2092e"],["/categories/index.html","e1449bc7e8519049013f439b3259cf94"],["/categories/java调用C/index.html","ece10ba8c92f978ff37069711b7a0849"],["/categories/linux/index.html","bc5b95aa4af055b8738d3000e21d218e"],["/categories/linux/page/2/index.html","82c7569af6e188a17e265d8a0fa6c9ae"],["/categories/python/index.html","3c7fbf9dc73d82c91453400b1bcd8bc7"],["/categories/tensorflow/index.html","2e18096dcf5a8bce4e7d32e0b4ab1597"],["/categories/优化算法/index.html","766a30bcecb22d303b851be125d2fbb9"],["/categories/图片分类/index.html","4006b0ffd51f67bf52cdcdc0f70765a3"],["/categories/工具/index.html","175d110f83649f62feaa39d43f440539"],["/categories/工具/page/2/index.html","60a12aeae8ffdb34ce9b3a2a1b994833"],["/categories/强化学习/index.html","2559d942bc8d3b6f49a3520a11899ca2"],["/categories/数据集/index.html","9d81cce828d668519973ff57e659fb66"],["/categories/日语/index.html","678cb512699ef947cfced3bc7716eb64"],["/categories/日语/page/2/index.html","442954f1bfc56dd8a794c111354754b7"],["/categories/机器学习/index.html","85078d0831a7cca33735392fde316e14"],["/categories/深度学习/index.html","5a25e647f850d137fe69d33313bca9cb"],["/categories/深度学习/page/2/index.html","e2ee787ed51920fd1c537e324fe9f86d"],["/categories/计算机视觉/index.html","6fb2a946a11fbc127349b6dafb4ca0be"],["/categories/读书笔记/index.html","de4f50e689118d522929369297c3da49"],["/css/main.css","d292070c436a1c65e1bacd45888bd01b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","0c11356d88cc277ab9152bb22f252aff"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","015ad89c91be8970e0d0af44596a34c1"],["/page/11/index.html","49f197f4235d34f895779af7db50edcb"],["/page/2/index.html","ac86a54cab82afc95b1e2e0c60f45c90"],["/page/3/index.html","01a86f331f4f902c4a73e1af003023b2"],["/page/4/index.html","e5f1be1259155245d5abc2b091ecd942"],["/page/5/index.html","2b5835301527166a5371f21d35d72357"],["/page/6/index.html","ce15ba9bb3bd4a818dd775cc69712e8a"],["/page/7/index.html","4ffe2e2c3512028f08339d9913df7f49"],["/page/8/index.html","3aa58bad9de84f1f23b0d689b6ad38b4"],["/page/9/index.html","aa0767a8bc90dec92f5955d3712ceac6"],["/sw-register.js","6b8d71fc7dea1ecab4985e91cf6d682f"],["/tags/AlexNet/index.html","88585842c36e0ff78453d1ba3a093f77"],["/tags/CNN/index.html","4cac3e4ac6438da4eec241090c37e245"],["/tags/DCGAN/index.html","420efa9bedb876af97ec2e3a22b10c03"],["/tags/DDPG/index.html","8aad86653f839b462f428292651d3138"],["/tags/DDQN/index.html","7bb0d79ce18ad1d75190873ef2ffb1e3"],["/tags/DQN/index.html","7a733935af8a5d46ad32c42a46bfe075"],["/tags/GAN/index.html","9937e25b85f2a81347aebb8e8917afe0"],["/tags/IRL/index.html","7657fc793fbd626119803e3b785a89d8"],["/tags/LSTM/index.html","b24b7ccb26950b7f740e560eba8eff3b"],["/tags/LeNet/index.html","f1c31155112a09b1c7b4fbb8a441b1c2"],["/tags/MC/index.html","1b7b592d67ffdff3e39d9793b734380b"],["/tags/PCA/index.html","0fdd85a54e82419d2fb4b2f95a3b4bb7"],["/tags/PG/index.html","4b0e5d7d4140f38c4c64edfddfb4320c"],["/tags/PG3/index.html","301a0b378c7d3b0849731b967102742c"],["/tags/PIL/index.html","786b52d24ab5ee29d0e0e262353f3053"],["/tags/R/index.html","01397876a9eae2bb878c4b14ea2147a7"],["/tags/RNN/index.html","d6813fdd1168cb138a0cafac53ffba08"],["/tags/SVC/index.html","bb8db6fc422f45679eafa148e64beffe"],["/tags/SVD/index.html","6b04c8e896bd8aac63496856f7ebd08e"],["/tags/SVM/index.html","81f06d186f49f002cbfdce74dfca9974"],["/tags/TCP/index.html","a11f10351653606d2ff7b544d7a1e23b"],["/tags/TD/index.html","7291332d0ac19f21af2a232c3fe4e5f9"],["/tags/TD3/index.html","7a631818b7e2c3faf4c616685ab3c049"],["/tags/VGG/index.html","ed8e66b388f6d3bec94ed266914e38ad"],["/tags/amd配置/index.html","1cf63552b841bc943b0131dccafe56ed"],["/tags/anconda/index.html","08ba95f7cad3f36def5d7b737afa309e"],["/tags/conda常用命令/index.html","0733bf9d81c7974211771a5ef1c1a8db"],["/tags/cuda配置/index.html","40c5f810c0137baddfbdede09264c372"],["/tags/docker-ldap-mysql-arm64/index.html","c750fa5c003ce706790eac8bfb2e30b7"],["/tags/docker-ldap-mysql/index.html","cff8f5f89508851bea3f3e92f3d4ff41"],["/tags/docker代理/index.html","d234f77c9ecd06b57c4fb78ad6a83434"],["/tags/docker安装/index.html","0282c2245124396d84a3c13d63231136"],["/tags/docker容器挂载硬盘/index.html","45c779c6c084396dac6d861b5ecd94ef"],["/tags/ffmpeg/index.html","a49b00cd266c8acce52e043de9c602d8"],["/tags/github上传代码/index.html","ef2acac351094aaffa57952f73538a94"],["/tags/hexo/index.html","1ed4d2bd8d80abc5d982403955c12370"],["/tags/index.html","b42beeac9074476abbb40e7fc8f869b5"],["/tags/java调用C/index.html","5f9c2664cbc310c81f8800432d25c70b"],["/tags/kaldi/index.html","48326ddddccd3fc409fdf3e1a5cf05eb"],["/tags/linux命令/index.html","365c99dd0b99d6bdc67b63fa4ed52da3"],["/tags/markdown/index.html","0207c86f8165e7c90c3545845d471f73"],["/tags/matplotlib/index.html","053aaa53dee7bc67ff61c84f865a540c"],["/tags/numpy/index.html","8b6cecf28b9a3b37b9caf3dfa27a348f"],["/tags/opencv/index.html","5f1f40c0c9aec47ecec311332ee14daa"],["/tags/pandas/index.html","ef6818772b90578c4b8ac50328cbe182"],["/tags/qq/index.html","9b1baacebf38cb7dbbc775ac25d48dd0"],["/tags/requests库/index.html","0a8f68aad9ec203817f4ff8201f35206"],["/tags/sacred/index.html","151cc97f4270d479b1027b7f2b05b276"],["/tags/ssh-远程连接docker/index.html","d1b7df4e5ffc0a4be1b27c08d2694c75"],["/tags/wsl/index.html","c7e0c895b4ab5e4e770115e2c26d60f2"],["/tags/zsh/index.html","4252a74a7ea704fed456ccf8d854030c"],["/tags/代理/index.html","75304b39592acab972038b7fec74a168"],["/tags/决策树/index.html","677d8ff1b301df47d0f9e2f36ebe0bb1"],["/tags/函数/index.html","4882d573ae8aa3665108e372aaa52b4a"],["/tags/列表推导式/index.html","90a942d1db3065a6cea77e15171f0d48"],["/tags/助词/index.html","8d589d208d1718588810318de1af297d"],["/tags/包/index.html","f53d5f47ced997f0d6cce34a43e41225"],["/tags/卷积神经网络/index.html","3a5624bedff5f3e403a0b5784ececae6"],["/tags/双系统安装/index.html","7f9d88c0572ba375df4d231ede22dab8"],["/tags/反向传播/index.html","ba1cc343ad6dc80bab95e1e589295001"],["/tags/句型/index.html","cf92ecf08ccd6274db93fd7378577338"],["/tags/可视化/index.html","0fa97f99c659a6e0b6447d163b987052"],["/tags/哲学/index.html","f7177e1f1c001071dbd15e5d04af7f1e"],["/tags/图像美化/index.html","58246e87027b6d1599be0787a81601d8"],["/tags/图床/index.html","2669fd5be43bbbc332c1481b83c3d1a9"],["/tags/多继承/index.html","809ea7f9733d83c9cfda37df42094106"],["/tags/工具/index.html","7d27a0e863cb6e0b1d29170e28b71b81"],["/tags/异常/index.html","ca958523d98d40a59c581b2d60391528"],["/tags/强化学习/index.html","81bac0b7bf14f22c2756fe80bbaefd34"],["/tags/心理学/index.html","f6d52225645040f430dae8daab471a80"],["/tags/感知器/index.html","f605eea3b28c1b429f0e2ecc76dfc32f"],["/tags/换源/index.html","f453659cb7d24f0a663bca99bc9dee14"],["/tags/描述器/index.html","d79047cba0c0529305e49a8531f8c19c"],["/tags/敬语/index.html","c923959967f182e5574d4b1a4f2aaf48"],["/tags/数据集/index.html","4ebea2d318ac8c7c2864b555fba508cb"],["/tags/文件/index.html","0e0304ce105622d1e9a8047bd009bb39"],["/tags/服务器配置LDAP/index.html","a40b7a1c9115d7233880221aece587b8"],["/tags/机器学习/index.html","fa3083246d6e33d19f7a8f4958296ffb"],["/tags/梯度下降/index.html","00f7558389542eca9c354d4a77a37f8c"],["/tags/模块/index.html","9cdec45e9babda2dd4cc5860ebdd9440"],["/tags/正则/index.html","097aa37e779eaa8a805f3bdffd674ce0"],["/tags/激活函数/index.html","a07e3190edd04d6360a9dc3648f5b493"],["/tags/点击预估/index.html","d3e062cbcfe6ed98bc7e49d330ff03ed"],["/tags/爬虫/index.html","5675d2e9be206c0c72798f5b46e63c12"],["/tags/生成器/index.html","212485b1f5e4e2972397082539afd091"],["/tags/类/index.html","75053d21064879e48eb52a07c1afd346"],["/tags/线性回归/index.html","79dca15a822f115661c5077acd52f036"],["/tags/经济学/index.html","a7563e068d6114b05816bd6a250219b3"],["/tags/聚类/index.html","40a764301b7a526bc43eb61939b6f475"],["/tags/装饰器/index.html","1f7c6b75c5321fc5077bbee5eb6a6a48"],["/tags/词型变换/index.html","dcbc0ea64d645c914494ed06179a5c23"],["/tags/语义分割/index.html","63ee8d958dd56e7b42aea6c244eb037d"],["/tags/语法/index.html","01da4797bf2b251f2638b75b5072998c"],["/tags/语法/page/2/index.html","5c9c751b20eb881749192eecb5825195"],["/tags/迭代器/index.html","da51f0a1f8b613da2be076c129b9c5f5"],["/tags/逻辑回归/index.html","0400fb3b50b62a2418d7e725ba86df75"],["/tags/随机森林/index.html","a4072195da9a11d10c7de80a2a8ec95d"],["/tags/魔方方法/index.html","c3378805acaa333715fd01291b74b918"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
