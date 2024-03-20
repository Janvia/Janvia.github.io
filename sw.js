/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","86a9d3347479d3d6a78df5eeeee511e0"],["/2019/01/02/Anconda常用命令总结/index.html","393623286bd9af69fcfd92c9a426cac7"],["/2019/01/02/句型/index.html","11d639b85411f3be015304ad508d59a5"],["/2019/01/02/日语助词/index.html","a9a14fc5a6d6ff18f8274da36e666fa9"],["/2019/01/03/on-my-zsh/index.html","7f7943331e495a46e8baef964f17cd3a"],["/2019/01/04/《当我遇见一个人》摘录/index.html","0d6d788c745b8303148c9a1823e149af"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","77c995a26ea5cc92b1d7a2e9f5d8ce43"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","b3c0f100b2870e754be3f134cedab752"],["/2019/01/04/经济学笔记/index.html","544b470bf5413b2320cc93ce26e32666"],["/2019/01/04/语法总结（5-15）/index.html","045c7a12fcae0d0809c56f238c5e6a05"],["/2019/01/05/linux常用命令/index.html","c5fd517aa66255e36c9e9e80541bda44"],["/2019/01/06/敬语/index.html","397677b0bacf498bf8370b9026025705"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","33a387ba14ab77f6fbc433ee9d232371"],["/2019/01/07/cuda 手动配置/index.html","f14284c2222d44ee5662f722fd40cda8"],["/2019/01/07/docker-ldap-mysql/index.html","ca99497bb1a676c23bc464dd488d1296"],["/2019/01/07/docker安装/index.html","9e0ed03810267dc54c0c22c6352fdad8"],["/2019/01/07/docker容器挂载硬盘/index.html","6a531c2625cf6da8718a0f940de8bae5"],["/2019/01/07/github上传代码/index.html","136d614e9ffd043158159f39f50c5cdf"],["/2019/01/07/kaldi 安装/index.html","d746ec62ea5eb0503c89f76174491394"],["/2019/01/07/linux常用工具/index.html","e5982effe6f3789562024615628b46b7"],["/2019/01/07/opencv/index.html","f4fc973c1175bda89d87721249f514c8"],["/2019/01/07/ssh 远程连接docker/index.html","0feb3b956bf0099285591416f658789a"],["/2019/01/07/导出/index.html","cb2c77f0afccb5515abc530a8764cb5f"],["/2019/01/07/换源/index.html","930485fd9b365da7baf15263c6e966a9"],["/2019/01/09/markdown/index.html","d25bb90c2d12963a403110faa887698c"],["/2019/01/09/opencv图像美化/index.html","bd4f85ee42f3ce508755f1f5d40ba5e9"],["/2019/01/11/19单元语法/index.html","1d42cff767134693b3dcc6625515b9ea"],["/2019/01/11/20单元语法/index.html","7a567a643e7675b6497b884ec5f49638"],["/2019/01/11/opencv-图片几何变换/index.html","f0691db63bb3d3cb83b5df06e3236c32"],["/2019/01/11/opencv-图片处理及绘图/index.html","d19d0b3959d2022b01de1774ab70b246"],["/2019/01/11/wine安装qq/index.html","1e45c3519c5d17b4b7e907074da53184"],["/2019/01/12/tensorflow-可视化/index.html","9a5a879b6d8cda5b0a44c224510a09c2"],["/2019/01/12/tensorflow-基础语法/index.html","0fd65b3895b4ced590e9db7058c7d18e"],["/2019/01/13/RNN/index.html","1989adfb042f5eda64b4ca1a379ff5aa"],["/2019/01/13/keras实现CNN/index.html","d5525d4a04c62cf4faa91d72012b825d"],["/2019/01/13/卷积神经网络实现/index.html","049ed241bcc814fe0e52f8ae5a267ee0"],["/2019/01/13/循环神经网络RNN-写诗/index.html","2b76085d9bf9d64bded592112c583c88"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","763dca8f4c56e2f2ee21d801dcbdab5d"],["/2019/01/14/反向传播/index.html","988b19acda047743ea9acebd9c713eb9"],["/2019/01/14/图床/index.html","6e86b30d320b9946429bdc5c30b64c9a"],["/2019/01/14/感知器与激活函数/index.html","eb0f640f732d6ada10db6ae04c4bdff9"],["/2019/01/15/PIL简单应用/index.html","59d6bed481b00a2f56b0fe04cdcfc1d9"],["/2019/01/15/卷积神经网络理论/index.html","e50320072d1490ba64075a0fc331e485"],["/2019/01/15/图片分类之pca-svc/index.html","f7b48fb1d002b5a47d16468e0aac904a"],["/2019/01/15/强化学习基础/index.html","548c6c62d0154105e7105943a4af881a"],["/2019/01/15/经典神经网络/index.html","1a37314a094451b6d75af06e2a1fabf0"],["/2019/01/16/DQN/index.html","c33668e36bd88ea95f225db61fa128c3"],["/2019/01/16/TCP传输图片/index.html","4618b5889da35c2d6049a992476f7f21"],["/2019/01/16/时序差分学习/index.html","8ad7909cb06d31a8835a4503e8b67122"],["/2019/01/16/蒙特卡洛方法/index.html","818df8bee134cc1641572b4b6fa0f862"],["/2019/01/17/Double-QDN/index.html","631d049274d78eb0b5308c1ec85be979"],["/2019/01/17/RNN理论/index.html","7db14b4cd89dbc17188a876bac0fdbef"],["/2019/01/17/梯度下降/index.html","e0b3a58b2c4b7609562f5d893ba57a48"],["/2019/01/18/PG和TD3/index.html","629cf185eb141345f85a845b997fb1ad"],["/2019/01/20/21单元语法/index.html","362c82d8807faed0119bf85ddc56c9ee"],["/2019/01/20/GAN理论/index.html","b83b2035e8394c16b9adf4a8fd7c8f40"],["/2019/01/20/PG3和IRL/index.html","22577965ab1e4017382988d43f392db9"],["/2019/01/20/数据集/index.html","70c1d519a7d356825687db29b3609258"],["/2019/01/21/DCGAN/index.html","65adf8e9f454237e81868116360a70e6"],["/2019/01/21/LSTM/index.html","995799f0fb05dad82a987d61de9f5a97"],["/2019/01/21/点击预估/index.html","b3a96def67a26aeb5e005e8dd4d11e2f"],["/2019/01/22/SVD分解/index.html","8371db6ae38651a0c237079c5a350f81"],["/2019/01/22/SVM/index.html","81d042c6f4b82f585ebbae9f3910332d"],["/2019/01/22/机器学习简介/index.html","ba76c89a56e4a7b096edbb6656a6f7a5"],["/2019/01/22/线性回归/index.html","348e86f0efb98c9b48ab9b2fffce0f24"],["/2019/01/22/逻辑回归/index.html","19013cb26dca5fefcea4b825afe6eb06"],["/2019/01/23/numpy/index.html","c9df60dbafa27fdd580860ea63edf4d1"],["/2019/01/23/决策树与随机森林/index.html","948b5f18c97de2a9c6a0d6a3543d848f"],["/2019/01/23/聚类/index.html","1ff7d934e4386614aeffb5e05b5982fb"],["/2019/01/24/matplotlib/index.html","363bd38a6b20b89b1f76e438ff9085c4"],["/2019/01/25/pandas/index.html","2fdd4ff56f4fba4345555f1ac2aa1dd1"],["/2019/01/25/语义分割/index.html","360aebe51c467b6db3a23532972bce53"],["/2019/01/27/22单元语法/index.html","4d20510ffcafc5e932cee3e571d95d7b"],["/2019/01/27/SVM案例/index.html","78b2ea7313f9614dde3e48e40031d5ad"],["/2019/01/28/requests库及爬虫案例/index.html","38326970166554f7c747bc0014972326"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","a6ccf4b5e38ed8a2b584f9a5b2d1cc1c"],["/2019/01/28/异常/index.html","873aa8d0b04c147c6761fce3396c1917"],["/2019/01/28/描述器和装饰器/index.html","82baf549938c1b20f1972db0fbc9e31f"],["/2019/01/28/文件/index.html","1b27496e73a5cb6a28ea437cf41f0c3d"],["/2019/01/28/正则/index.html","807cdb10b133d9127f387a4615e89634"],["/2019/01/29/函数基础和函数参数/index.html","837363ef4794909520492d4f08d52f96"],["/2019/01/29/多继承和魔方方法/index.html","087ce1285ab58cd02af47c93bc3a4155"],["/2019/01/29/类定义、属性和继承/index.html","794c53b13363e47e9019edb2d5713b9b"],["/2019/02/27/23单元/index.html","1e3bfdac74484dff8b38adb1fb1369a8"],["/2019/03/12/hexo加速/index.html","7d8f7ee4911ab2c4b168c237dba9c194"],["/2019/03/12/hexo系统重装恢复/index.html","9736e6bc778c902247178e5eef4cce0d"],["/2019/03/13/24单元/index.html","f534f8452b4c50bf42bc5695e130cc52"],["/2019/03/19/25单元/index.html","7ce823a557e11c45b0c2a6d7e50ce127"],["/2019/03/26/26单元/index.html","b5f7e1e72de564e9722b196a932bd8ae"],["/2019/04/14/27单元/index.html","296c9ecd85ab75e993841caec4b01a91"],["/2019/05/01/28单元/index.html","a69cab7761c1b8aa3a818598a073a4b3"],["/2019/05/02/29单元/index.html","fed28d98d056f3e42234ab7bf46675c1"],["/2019/05/12/30单元/index.html","2c08a4888f8f5f86925ba86e7392c1d7"],["/2019/06/03/jni/index.html","be92b69df131e5dcfbd5946800fa731d"],["/2019/06/07/JNA/index.html","23cc4374cb70199b669e4a193e52d593"],["/2022/08/07/R配置jupyter/index.html","c11af8c05d57dd2284fb578cd19ff7d1"],["/2022/08/18/FFmpeg常用命令/index.html","7eaa8cbac2f4b14c05948f8c51f68f45"],["/2022/08/18/linux系统代理/index.html","56ebaedc8f2730595845026e36945c1f"],["/2022/08/18/matplotlib补充/index.html","498990f81a4ed5ca2f9b0860ed2e918f"],["/2022/08/18/常用命令/index.html","03c18ca473f32d95e600d652427a05ec"],["/2022/08/20/sacred/index.html","740b33f88e2ddafa67208c9190c9a56e"],["/2022/08/20/wsl/index.html","4bec1502177defad779f704516c3ef30"],["/2022/08/20/双系统安装/index.html","aa85b363303b289629d82d504b33d79c"],["/2023/06/28/source/index.html","1d0e3748b487ba024949df4d047900cd"],["/archives/2018/12/index.html","595481a3652b0bbe3a512021c0609369"],["/archives/2018/index.html","ccfbc1152f6f4be4cff24f0584c8eff1"],["/archives/2019/01/index.html","1f263fa7645b055f28fcd51781c55a37"],["/archives/2019/01/page/2/index.html","acd8fc05c329c65ee202a05f4d89e8da"],["/archives/2019/01/page/3/index.html","80ba33daa6c162b421f481f3319ae402"],["/archives/2019/01/page/4/index.html","022d9961e9f3c63b3ae5d5bcd19a4aaf"],["/archives/2019/01/page/5/index.html","00615f851092f069ebc374fb6cfa8f48"],["/archives/2019/01/page/6/index.html","625b97d74f9ed3a06120bf804f0d6cd8"],["/archives/2019/01/page/7/index.html","7ae7dc94e76714b87bf09abaa74d2bd5"],["/archives/2019/01/page/8/index.html","affaa9aa01887b9621e50fe056cb79da"],["/archives/2019/01/page/9/index.html","5ca2be998847ad24c3ac390c7fb1d75d"],["/archives/2019/02/index.html","ab93d3656c51e5926a6d96aea057808d"],["/archives/2019/03/index.html","44e666da9208e69b40ca76590e003e2d"],["/archives/2019/04/index.html","ce54e06a84e1ee8368abd34965f63d2e"],["/archives/2019/05/index.html","cdf8170dcd9822b7a6e850b02f981c0f"],["/archives/2019/06/index.html","60cb0639fd26312d5918dbab655afb18"],["/archives/2019/index.html","e7163ea0f3dc7dc5008be7305bbb6586"],["/archives/2019/page/10/index.html","65faa6fcab8a9db2f7b839b358244104"],["/archives/2019/page/2/index.html","39e060639cbad1ebde3c569855abb40e"],["/archives/2019/page/3/index.html","1ded6edb25713d152873c2cec3216264"],["/archives/2019/page/4/index.html","e4eb789d370679f134e1010193586c86"],["/archives/2019/page/5/index.html","698f9dfceeb13c6ae2822f3427e06e7f"],["/archives/2019/page/6/index.html","f88cbe140c145e80fb14539500f06749"],["/archives/2019/page/7/index.html","3862894bb9d5a4df14a12a9b0ea2e586"],["/archives/2019/page/8/index.html","9ee13bf69638ea0bf99315667607142a"],["/archives/2019/page/9/index.html","286c168b615507beaeed7d7e60e8ad0a"],["/archives/2022/08/index.html","6deb3347410a6fa0d39a8c45d1281bd3"],["/archives/2022/index.html","31c0529342de08605193747c16482fea"],["/archives/2023/06/index.html","d4837d5052c68736fdb6a5b2f0d1c01b"],["/archives/2023/index.html","36babe48747357e439c139f8ae3f20e9"],["/archives/index.html","179b05a1e440f5e4174553ed21a10ce5"],["/archives/page/10/index.html","e2bec70d5ec8dbc54707bcbfd1577a7a"],["/archives/page/11/index.html","5234a4db0e25949db5e6ca6af73dcd96"],["/archives/page/2/index.html","b80a70ae6f66aa29a3e3b4664f256b82"],["/archives/page/3/index.html","8af135bd22272158a298c9b6715aff99"],["/archives/page/4/index.html","674d59acb5aefe9f8d320be0f1377fad"],["/archives/page/5/index.html","ff334b40f0dec4063b2a462c99f86ba6"],["/archives/page/6/index.html","88be194af40bc147db627243f6b59408"],["/archives/page/7/index.html","b3d96a8700f61fe927559e69ab6a8ffa"],["/archives/page/8/index.html","56e160c6720b482054c6399912370129"],["/archives/page/9/index.html","86d7da14b21d3d558b6ad9db57119af8"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","8320c26dc624064a183b23cccc519120"],["/categories/dxz/index.html","dc836a028bd71e6ce8db42b97b72c8fc"],["/categories/index.html","27a440916a6aafc6930cffa2367a6ce4"],["/categories/java调用C/index.html","d0e8c71893a1043a2746a4b97307f11e"],["/categories/linux/index.html","005823463837fcbb38210e0518b11b0e"],["/categories/linux/page/2/index.html","0c34f92df1ec7d3c1cdf1f1af41bfa64"],["/categories/python/index.html","638a4369031c371ef310f0dc8fe3c755"],["/categories/tensorflow/index.html","a63211444faea1f892c5503e4f9944af"],["/categories/优化算法/index.html","0548d6ccdb9b42ce56a9f9dd337ed873"],["/categories/图片分类/index.html","1a02a9d721ee649acc0361db3d17d205"],["/categories/工具/index.html","77e2fa3b4f77f24b6664547cf7491adc"],["/categories/工具/page/2/index.html","8afbd1e98aa5699299db2084d3d85bf6"],["/categories/强化学习/index.html","2935718e87f3976bfa401517737087cb"],["/categories/数据集/index.html","f4adaab80191009c570f8b55785ec8ab"],["/categories/日语/index.html","dc37ae781f1d37cc49c7473185950bf4"],["/categories/日语/page/2/index.html","93490b6b358192150d7eed73a90db659"],["/categories/机器学习/index.html","8220f5aa1223599677e6198b7efd4c6a"],["/categories/深度学习/index.html","94afc3e09a14b62f892f759282bdb175"],["/categories/深度学习/page/2/index.html","327aecf2f8efe181fdd7490fdc9e6841"],["/categories/计算机视觉/index.html","b7cc605f85442763d0d95c5d1d056271"],["/categories/读书笔记/index.html","67fe432606660a4c813e5910b757f1fd"],["/css/main.css","9f573df2941b26f040c1dd4d8073f71d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","3517647d736071eab9b2b7e82264b9ac"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","6806ff06c181a3707000b813143db352"],["/page/11/index.html","f6085b039c297e7aa24089357b6d662a"],["/page/2/index.html","5e04f407faae0b71b7de468db9ad55ff"],["/page/3/index.html","a1b56eade7cad80072606c527e6bbbf5"],["/page/4/index.html","7e1f50bd873c8876c9542e360fceb182"],["/page/5/index.html","99a8517abb9cf7493087c6bdf0001716"],["/page/6/index.html","f0c1d7f4d356bcd059b9172d242a7763"],["/page/7/index.html","99ab35d4cb1d98f6b70209faacc26f41"],["/page/8/index.html","2d8a59f8dbada6dae1f25bdd3982b506"],["/page/9/index.html","1e9bcc4ece919a7dc0f310f5bebaffe9"],["/sw-register.js","3a02aef164bfa896515cf969eb104209"],["/tags/AlexNet/index.html","645dc1fde292df719d2b74e1234587b7"],["/tags/CNN/index.html","acc1cf75bae67b31e2c0380bdadd78ff"],["/tags/DCGAN/index.html","6cf4d0c7f0a2b7c2fc3a9ac9ee3998c3"],["/tags/DDPG/index.html","efd141d47ea2a728caaa1b4ce4b312e4"],["/tags/DDQN/index.html","023bbd1a256e3ce33b4d8f728b23748d"],["/tags/DQN/index.html","408a34ec7ba68cc3dd376f483e122ed1"],["/tags/GAN/index.html","459098be79199cb875904b9ad565b3ea"],["/tags/IRL/index.html","a5a1d53f9817ec69e102b50a671cb5fa"],["/tags/LSTM/index.html","3253e191e2da131c4141086869cde05b"],["/tags/LeNet/index.html","fb7f58a867cd19358ae434f0eac961e4"],["/tags/MC/index.html","2bec641043b7011ed5d71e5873a39c8e"],["/tags/PCA/index.html","a605d501a48d3b1727e9089f8c9ddece"],["/tags/PG/index.html","4fde6bc022413fa44caf324fe059747f"],["/tags/PG3/index.html","bcd51e0cbb9125f2e002f8890c4ba307"],["/tags/PIL/index.html","088263a47de4b3982fc9c9ad407b5277"],["/tags/R/index.html","169605e1629607d7d99f24af81faef12"],["/tags/RNN/index.html","12ca0769f9c8c843b0a5db68293351d9"],["/tags/SVC/index.html","97a63fa49801aaeb03694670d608c256"],["/tags/SVD/index.html","c8ce0d61735591b0a74054e07265e931"],["/tags/SVM/index.html","75e76092f9273ca424c1a8f6fb57a79b"],["/tags/TCP/index.html","d9b6a0161106697531f28b3093c30db6"],["/tags/TD/index.html","f3511404bfdbe736ce030e2ea0e285ee"],["/tags/TD3/index.html","cc2afea32592002b55e7878f0e035d00"],["/tags/VGG/index.html","df5f92343d5efafb857a47d8e605b24e"],["/tags/amd配置/index.html","56a0b14b78fd7a5d5c5cbde810a9c171"],["/tags/anconda/index.html","56e61efc47115c3f3e7a2e2a625be728"],["/tags/conda常用命令/index.html","4c63be2b3978c82aba8f1acaf4e56c1e"],["/tags/cuda配置/index.html","0b4b971392bcb6903d8359a74ce95c2f"],["/tags/ffmpeg/index.html","b47177653748d122ac8c8e2f100ab33e"],["/tags/github上传代码/index.html","cff5420c80994fe76ad4d7e53badab06"],["/tags/hexo/index.html","995967fb76f3dd55dfe240703146042c"],["/tags/index.html","8018c7390d42d9bad45079da5756b7f8"],["/tags/java调用C/index.html","ebbcf99ac6b20dffba064739249d329f"],["/tags/kaldi/index.html","ffb9ccbfe56c59494fad28770ba122fb"],["/tags/linux命令/index.html","f4a579994c3ed5e01e4ec71ff5e40111"],["/tags/markdown/index.html","d398442a74f8ea9e06ec6cd285244f10"],["/tags/matplotlib/index.html","e133b6812b6ae06800e1d7b317d396b4"],["/tags/numpy/index.html","e03498fba1c74c71315351b174ccdd3c"],["/tags/opencv/index.html","77c9ea1897a2b88cca095c09c2a09150"],["/tags/pandas/index.html","972b8f677e2c45ae4580bab7b4159575"],["/tags/qq/index.html","55f3905a706fbf66099b646cd91534d4"],["/tags/requests库/index.html","5f8c0c32e4d92199f76fdae67d7e39fa"],["/tags/sacred/index.html","b469821488ded46729ce6d68f6cb2d70"],["/tags/ssh-远程连接docker/index.html","586bbdbd2bc24b1e66ab72ed2667121a"],["/tags/wsl/index.html","c080374767cbda7c2d566931c9f1060b"],["/tags/zsh/index.html","8cdad0fc888e8f960bbaa0142e4b2758"],["/tags/代理/index.html","afb4b15cf0ba5eafc885dad01a3b79c9"],["/tags/决策树/index.html","54c9f74bcc8652f87317a90ea9d63cfd"],["/tags/函数/index.html","b18c1141cef04d1fd538220fa879e8d8"],["/tags/列表推导式/index.html","a994c2629acaf65fc754abe2c04c78df"],["/tags/助词/index.html","230811a95f0006e8ed397e13136862c3"],["/tags/包/index.html","dda7b281f95004ce5e5a8f0166aa126a"],["/tags/卷积神经网络/index.html","28d9fbe55c3c49922be915370cd52296"],["/tags/双系统安装/index.html","640f6d4175ce573929513e78f67c086e"],["/tags/反向传播/index.html","6b126bc29530513fc75b53461282b127"],["/tags/句型/index.html","dfd1e966048e6927ec9af16c53837333"],["/tags/可视化/index.html","2244ab9bf0ae9b62f56737eb9174fb31"],["/tags/哲学/index.html","0e9e9f253138a241ff24d155e3ffc58d"],["/tags/图像美化/index.html","263e48e83d6db2c329a23e995c11da42"],["/tags/图床/index.html","77d5ab7e1add6b237334c233b202624e"],["/tags/多继承/index.html","b1cf53ea02d964087339e81e15ad80e9"],["/tags/工具/index.html","6333896376e5657881733be6b11b2913"],["/tags/异常/index.html","677445004aa480663cdbe3e63dbc1752"],["/tags/强化学习/index.html","4e4d623739525bfc147efc0c171b2b13"],["/tags/心理学/index.html","975f5f3976aa964960d4db00834152fb"],["/tags/感知器/index.html","1676d64fa1679743fd4be16adc4acd57"],["/tags/换源/index.html","ff747d632a2830e9cf8bda3eb92cdc57"],["/tags/描述器/index.html","4882f58bae5abb43edb0457cfe43dc9f"],["/tags/敬语/index.html","00634764414776492887c36959b6317d"],["/tags/数据集/index.html","4aafe7e561780792c17308d1e66ad577"],["/tags/文件/index.html","3a28762193360677278f893db8076828"],["/tags/机器学习/index.html","93b8905025595a4aa83c1db210223a3c"],["/tags/梯度下降/index.html","277dc8c70d35c630ad756fc569d30741"],["/tags/模块/index.html","13e482007549289c840196ecade3e6eb"],["/tags/正则/index.html","3af6fe1ef77e5c5e46c2b803b500a8c1"],["/tags/激活函数/index.html","192c732ed0063236439c13f77797d55b"],["/tags/点击预估/index.html","8210cf29c0d181197e4ac21c4b752655"],["/tags/爬虫/index.html","6604bf257f55a640bbe48939945f2f33"],["/tags/生成器/index.html","e9536ee1f151452e14e31485b7c267b3"],["/tags/类/index.html","89b33e4149b62efa64fc79e0a35b746b"],["/tags/线性回归/index.html","b070b508eaeeccd632c8d70526cbb18b"],["/tags/经济学/index.html","6a1b20b8af7da98e728a182128472079"],["/tags/聚类/index.html","689ad389bf7b28ba7060e1453f8ba6aa"],["/tags/装饰器/index.html","233c5eeb592e4a75e302e78c20ae4a60"],["/tags/词型变换/index.html","417a454556286a1ef293e23aa6903269"],["/tags/语义分割/index.html","0551ac4e02c2d6380305fb472094b38f"],["/tags/语法/index.html","2141e5601fea46f3cd3d8fbcc504c425"],["/tags/语法/page/2/index.html","0264ecb7c0985ffd4dae7e1fa440f1f3"],["/tags/迭代器/index.html","91a74f2194e066b1ae334ada33e60742"],["/tags/逻辑回归/index.html","8dd97a8fda82d0657f4ad9c33e935823"],["/tags/随机森林/index.html","6c9cce87e76aad83e61572f967efaf81"],["/tags/魔方方法/index.html","f976b5894f157faa346140365073b139"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
