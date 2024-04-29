/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","cb73fcd54059c11c4d22ef8f9be6d98a"],["/2019/01/02/Anconda常用命令总结/index.html","e8ba618de41acbbe2a75d0508e0a39c6"],["/2019/01/02/句型/index.html","2a848b75fdb1d120b66b2152ca947429"],["/2019/01/02/日语助词/index.html","f61f72edac7aa52126784a6544df65bf"],["/2019/01/03/on-my-zsh/index.html","642a87733dd6a46d7832156d98a2a84d"],["/2019/01/04/《当我遇见一个人》摘录/index.html","75a8ccf853a6e8eb18f81d4052572ffe"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","b9a4ef93d6a6d5848fc0eebb1b599f3e"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","1cd032c348af2acac6c152d60d562666"],["/2019/01/04/经济学笔记/index.html","5c00a93c0485d09ef0199517ff2234d6"],["/2019/01/04/语法总结（5-15）/index.html","5524c79c0c90707ca9f3c3fa2d39bab0"],["/2019/01/05/linux常用命令/index.html","100dccd201be04e7713d1b454d439733"],["/2019/01/05/mamba/index.html","080a433200f8fd78c28ac212957d325e"],["/2019/01/05/onnx2tflite/index.html","fd2f350f0d5116798cfaf2823fdf3437"],["/2019/01/05/torch安装/index.html","ef3e090108426067b6cd8ee595a62271"],["/2019/01/05/vscode/index.html","249601cee3c3685a56c1a48c5838db1f"],["/2019/01/06/敬语/index.html","48a1b4238ad79ee18157802a7dd5daa2"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","2ad8ef147c7853cf3966d18450d0e9bc"],["/2019/01/07/cuda 手动配置/index.html","486150f745bd9c4d6032890f7730752f"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","73d6ab286fd3a44c987e799953837ae9"],["/2019/01/07/docker-ldap-mysql/index.html","e38f29334c6683c9e8cee37b44759574"],["/2019/01/07/docker代理/index.html","67648379d08c3d8cf2b1ea469e8bef68"],["/2019/01/07/docker安装/index.html","85d22bbc0487cbcba686bc991973515d"],["/2019/01/07/docker容器挂载硬盘/index.html","9cfda7288c171c62a8cd76d473b33c15"],["/2019/01/07/github上传代码/index.html","9c9532b463df8eb2e142285ddba68c59"],["/2019/01/07/kaldi 安装/index.html","a873019e298fdbefab82e5ce6e2ddb67"],["/2019/01/07/linux常用工具/index.html","45014c463d01c53a9ff12bc310eb510d"],["/2019/01/07/opencv/index.html","55525d46ee8669c264fd2d0da386e926"],["/2019/01/07/ssh 远程连接docker/index.html","fb59b29db68b986828d40ef1da7b2de8"],["/2019/01/07/导出/index.html","07e383da9ff95082a09920587893204b"],["/2019/01/07/换源/index.html","800ef2d2159fd9370e9c5c8054a92256"],["/2019/01/07/服务器配置LDAP/index.html","f47961c483354af4af47a9fe0a39a715"],["/2019/01/09/markdown/index.html","b38f4ff73e10c53cc871b2b7933d7c0e"],["/2019/01/09/opencv图像美化/index.html","2c5d30bf114b08d595979b2ac33416d4"],["/2019/01/11/19单元语法/index.html","41da94fe23553b1733c78cbdf4fa4100"],["/2019/01/11/20单元语法/index.html","29fa1bdb60b0e75e54844e681012d70b"],["/2019/01/11/opencv-图片几何变换/index.html","fa80f06d3045d5c821712b3c62637799"],["/2019/01/11/opencv-图片处理及绘图/index.html","50d6b031989f8c864ce6fd9c3aa47eb2"],["/2019/01/11/wine安装qq/index.html","5a8950615f8aa902801a59ad29d9f955"],["/2019/01/12/tensorflow-可视化/index.html","2c569f518a8fc6bde074c85d125d6483"],["/2019/01/12/tensorflow-基础语法/index.html","66a5d579beb0d7380019a07996643e1a"],["/2019/01/13/RNN/index.html","09cdb0f804f0ef6a20bfd2f68400e67f"],["/2019/01/13/keras实现CNN/index.html","db5db071847b918f81e8d96c5f31d498"],["/2019/01/13/卷积神经网络实现/index.html","71b118912d709111e7a615c61815e30f"],["/2019/01/13/循环神经网络RNN-写诗/index.html","1e44e82a838856936b228ec20936b65d"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","c6068e15f4f08484926517e19d0c2a95"],["/2019/01/14/反向传播/index.html","4a8229a60bb5debb40141ebe63aad34e"],["/2019/01/14/图床/index.html","37dc520bca5ee7ad8156f23e1a0b4d5d"],["/2019/01/14/感知器与激活函数/index.html","1f56f30fb9ff2fc08297100bfba1d074"],["/2019/01/15/PIL简单应用/index.html","bfe4ee9b373ea9db9e2327a155aae1cc"],["/2019/01/15/卷积神经网络理论/index.html","73c02ed620f1bd6b07bb0cc2d393ee89"],["/2019/01/15/图片分类之pca-svc/index.html","4e7e4ff8610efbfa9c908e12f710627e"],["/2019/01/15/强化学习基础/index.html","54be85474a3e4a5e4eee2ca8c74a5259"],["/2019/01/15/经典神经网络/index.html","09cc40f41fad5182e929f20c22474c16"],["/2019/01/16/DQN/index.html","2e781f3d9515a0199781e4a8b1c37d81"],["/2019/01/16/TCP传输图片/index.html","13076c370051d66eac43b09d46a2df3c"],["/2019/01/16/时序差分学习/index.html","13d6c0343924a8b68dcc17e49078f933"],["/2019/01/16/蒙特卡洛方法/index.html","b2ef5838582445a5c7b50d40b2b840ad"],["/2019/01/17/Double-QDN/index.html","0592eb0cacc813a502776de741d7dc5e"],["/2019/01/17/RNN理论/index.html","7924c2b083d4982a0bccf4eee8579cf8"],["/2019/01/17/梯度下降/index.html","24a59153ea842be2fe4c0fac83b84c81"],["/2019/01/18/PG和TD3/index.html","8d272ddc966f27fe2cfb80ca0e4e2b40"],["/2019/01/20/21单元语法/index.html","c03127cfa4dab0ce083b20e5e0ace337"],["/2019/01/20/GAN理论/index.html","72c80d897dc89b11f26eab35b1d05229"],["/2019/01/20/PG3和IRL/index.html","951a0236a6088439c5785bc3e7ac99af"],["/2019/01/20/数据集/index.html","c2f995455ca5e5c04733efb32e7d30b4"],["/2019/01/21/DCGAN/index.html","9071f33eedbb0270baa1a11394c12ea4"],["/2019/01/21/LSTM/index.html","8569942a811cdf607b48bde834526356"],["/2019/01/21/点击预估/index.html","da9406f34d9365b3fba0c141dc8fb01c"],["/2019/01/22/SVD分解/index.html","77b4177dd1edb2663fb7f0762a44cb1e"],["/2019/01/22/SVM/index.html","08172d9cff2758595a7f4693f46ee5ea"],["/2019/01/22/机器学习简介/index.html","f9c4026b11ff167b0fcce26b209fe850"],["/2019/01/22/线性回归/index.html","d3d3b5e0e61c0dc4f94de19497b0fce4"],["/2019/01/22/逻辑回归/index.html","edd210b8a530052c4cc562e1a2982996"],["/2019/01/23/numpy/index.html","8c21e7ab8f37541a05b700a688c67fab"],["/2019/01/23/决策树与随机森林/index.html","37b6372d9f1d1c04c59722411dae4525"],["/2019/01/23/聚类/index.html","36d045ebe0cebccacdfbb0448969b69c"],["/2019/01/24/matplotlib/index.html","ed91b1444c19ba084182e09b4b4c5177"],["/2019/01/25/pandas/index.html","03421688873030ef19536805731894f7"],["/2019/01/25/语义分割/index.html","1aae3c5afc5bfbe2f9bf231c2fcd3c64"],["/2019/01/27/22单元语法/index.html","07cbfdc3d155db13f7fd8fb917e53c11"],["/2019/01/27/SVM案例/index.html","ddfc5718a7976ba6df74076cbe31db23"],["/2019/01/28/requests库及爬虫案例/index.html","cc2bd76d50adeadefae019df3fcd4811"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","fb3391a3f41820608a448ff1ee4df7a7"],["/2019/01/28/异常/index.html","922f612c653ce6210895ed0b3afe413a"],["/2019/01/28/描述器和装饰器/index.html","5e197fc1999a6f997549fe127f305eb2"],["/2019/01/28/文件/index.html","7d10c8b8f0f8e66495716141666c3ed7"],["/2019/01/28/正则/index.html","40c644d1792fa6a04ec18edb36084348"],["/2019/01/29/函数基础和函数参数/index.html","72f90a4932a203abc247d238119c39fd"],["/2019/01/29/多继承和魔方方法/index.html","ee664275b30e44b55d1600a9000b30e9"],["/2019/01/29/类定义、属性和继承/index.html","85274e6564123eb35f17e0de0d8842fd"],["/2019/02/27/23单元/index.html","bad1a4ca2e683b44cc3e2a6b26e171e1"],["/2019/03/12/hexo加速/index.html","e1b17a373d1145e02b89b5730f95cc20"],["/2019/03/12/hexo系统重装恢复/index.html","6badf2dc5c3d7e27a6a4552c95f2e416"],["/2019/03/13/24单元/index.html","e48f7b2f75a2d06cb57baa13e8c02a5a"],["/2019/03/19/25单元/index.html","04d5ed6295648a36bf57c4aedbd7c199"],["/2019/03/26/26单元/index.html","42f3e7bbf2f14813cb7db0168da54e06"],["/2019/04/14/27单元/index.html","8d976ae2992a19e2fd02b4933438a7f5"],["/2019/05/01/28单元/index.html","9761a268b45e238bc54fc19ee8077020"],["/2019/05/02/29单元/index.html","337ca6a8e2426392002b0367617fce95"],["/2019/05/12/30单元/index.html","1466cb69dc7450028d2633f88c661795"],["/2019/06/03/jni/index.html","e54dd856f287a056e6a1d1aa21a56b6e"],["/2019/06/07/JNA/index.html","2327c91d69b77d6a01847c2cfcb5efe6"],["/2022/08/07/R配置jupyter/index.html","6d44309eef943859dc2e4f71896f6e1b"],["/2022/08/18/FFmpeg常用命令/index.html","0cb98de3721378536007de6c91ee640d"],["/2022/08/18/linux系统代理/index.html","283db80dae9c2c1705a3ec49587470d1"],["/2022/08/18/matplotlib补充/index.html","e83255c6fe27af336043b9b378fe004d"],["/2022/08/18/常用命令/index.html","358da93a0e1c6062546b026863a2365d"],["/2022/08/20/sacred/index.html","cbb635ea3c9f4c365b04e35cc420ad94"],["/2022/08/20/wsl/index.html","20d459e535b070392d753faa2f8523ac"],["/2022/08/20/双系统安装/index.html","4e3caec3d332ed29af1c4cc1e35fad7d"],["/2023/06/28/source/index.html","384d1b631564dfac8ae440cc429acc35"],["/archives/2018/12/index.html","6e809ad8601a206fa0440403de3cd134"],["/archives/2018/index.html","ab2a2c1c6ac3d8f3700855f40e51e419"],["/archives/2019/01/index.html","cd0c933c7096075e115d6e7ee4d1887c"],["/archives/2019/01/page/2/index.html","462c512e2b66d944cd3f1f2ea6dd2487"],["/archives/2019/01/page/3/index.html","5f05ca90702cee7d3e46581035eb9228"],["/archives/2019/01/page/4/index.html","25b75145a06be5f50caf12fcc851bcea"],["/archives/2019/01/page/5/index.html","88c97bceaf213bc2d0bf0e9ed245bcda"],["/archives/2019/01/page/6/index.html","afec8f3aa6afd64ca4f5a832caa816db"],["/archives/2019/01/page/7/index.html","4de58daccb19841357a65f2439c1fd17"],["/archives/2019/01/page/8/index.html","361896d5222d606a457387586389e23d"],["/archives/2019/01/page/9/index.html","228c54ebad719a8cd743ec4b89704544"],["/archives/2019/02/index.html","ad0ba7da969d101532a5d5349ea4b8c5"],["/archives/2019/03/index.html","8962c25e6596b5151e4e88363f649757"],["/archives/2019/04/index.html","b0abb76261b221d0593cc9b9bad4fd61"],["/archives/2019/05/index.html","b4abc8cbc80fd1b29e54a49acb127f9d"],["/archives/2019/06/index.html","1719bbcf49c4876e540402c39d3e10c7"],["/archives/2019/index.html","b0bf73013af9d392b8b6e6374e0a4365"],["/archives/2019/page/10/index.html","d604c05b834db7272a4f12a52e0ffc3d"],["/archives/2019/page/11/index.html","404dbab4b0dad9519956e2e80194cffe"],["/archives/2019/page/2/index.html","a5b1d3263d3979e37c0cb3a8362ac2f1"],["/archives/2019/page/3/index.html","c44ec224e1620eac1afedbcb9c0bb228"],["/archives/2019/page/4/index.html","9e7565f344221b4a1085114f9d9dd6c2"],["/archives/2019/page/5/index.html","e51ecf6b8fa55e57b241c95699b048b5"],["/archives/2019/page/6/index.html","e2d528dc4de751919ec339cd5b8050b1"],["/archives/2019/page/7/index.html","ce9b8fdae2fbcc9fdcee98fc29c4a7ca"],["/archives/2019/page/8/index.html","5c0bce4e15e4618e74bf6dda74629a93"],["/archives/2019/page/9/index.html","c1ae58776eab478c2d763f26ac761ae5"],["/archives/2022/08/index.html","1f739c7fe46430c31ab127b1273aa284"],["/archives/2022/index.html","e42dd46e74c4b4b2e5bac8a19a7be1c0"],["/archives/2023/06/index.html","2ab48734a67f6f1847e184e9a548af37"],["/archives/2023/index.html","acc73679483db579ba76fab13c9395e5"],["/archives/index.html","8ed17da0daa73342676bd1bdb140f02c"],["/archives/page/10/index.html","77d4d061ca7fbed152331ffd6bd24d5c"],["/archives/page/11/index.html","8ac88bf056d9827e128092c5dfed0056"],["/archives/page/12/index.html","ee3e6b2e3f1c6c6d14d09097780ac384"],["/archives/page/2/index.html","b2e8b63a9b65f983072a20d3f1c5b250"],["/archives/page/3/index.html","eb34e432b6686ff4258b04804bf3a61d"],["/archives/page/4/index.html","33e260287202a64bffe0330eddb00b09"],["/archives/page/5/index.html","8d84b4d929c7ffd459c43733cda02c0f"],["/archives/page/6/index.html","9f1d233319400bf56ac8ba3c82e5aa6a"],["/archives/page/7/index.html","c5261d36230684226bd22bea950ff127"],["/archives/page/8/index.html","5781a16414e994f074282428384fb716"],["/archives/page/9/index.html","a43a5242bdf15f17008cb40f4c45efbf"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","7b85803722225f2da0be4655970e2c01"],["/categories/dxz/index.html","c33f10b55bba47696db6fc217c7a4f80"],["/categories/index.html","4dd1d9e91723ca53fda54611e06d45cd"],["/categories/linux/index.html","4c1aa1097c741f2dac122477e12312e4"],["/categories/python/index.html","5f2f3ad7922f9b7539c87d2dbafc1d2f"],["/categories/tensorflow/index.html","43b9cdc5fb4a847530722130b9247dc1"],["/categories/图片分类/index.html","7244ac88319bd0e13b55604defa2553c"],["/categories/工具/index.html","61dcf75d07669b7aa897a91d59af9098"],["/categories/工具/page/2/index.html","ebbc921b16cf2f1c2e1bf09d16cd13ac"],["/categories/强化学习/index.html","69e726cb68c5917a69373c2ec4127e89"],["/categories/数据集/index.html","7277f45577dfe5316b600e92d09eb050"],["/categories/日语/index.html","1a3b2c96d04f7bac4874ee4346ec07a3"],["/categories/日语/page/2/index.html","b4eba7f40a84dc857739497ab5da8a4f"],["/categories/机器学习/index.html","4773081aef97e3e148682d13a18c2916"],["/categories/深度学习/index.html","72c84068f12730c110e5c2f3530d927c"],["/categories/深度学习/page/2/index.html","769c4d7b4d9b284f6825be884fc447d5"],["/categories/深度学习环境配置/index.html","7b5a6e075c593989c0e97ff857fc8e82"],["/categories/深度学习移植/index.html","7eab58295140ee249604f5a126f97d3f"],["/categories/计算机视觉/index.html","9826babae09e8c947fb4ff38f280d33a"],["/categories/读书笔记/index.html","d29abcc807a76385ea1b358164326818"],["/css/main.css","864a0ec2602f572463e43fe307955fb9"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","ca77f344231a007a37e1b5061ab6259c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","4439f65ce9217cd5be1de770b2053706"],["/page/11/index.html","812075d0c0dfb217103b3880327a0b12"],["/page/12/index.html","ab7c530fc636e5638b8f246daea3e1fa"],["/page/2/index.html","1708350b4b38466147983d000a0fb450"],["/page/3/index.html","62d1ea3d3aad1a2e7325ac92c1b73930"],["/page/4/index.html","a5fc9fc9b7aa348710d429e019a6125b"],["/page/5/index.html","002c83e5bdd7a7d3ca2b6fef33619d9a"],["/page/6/index.html","5816add5fb203b9c6bdb33b65c15702f"],["/page/7/index.html","b687617d36c8009470fa780bf961ae47"],["/page/8/index.html","c766010a46b67064010ddfd54b948bbb"],["/page/9/index.html","c7c075a808d4cbc0fb294da1a6eea343"],["/sw-register.js","f3fc4c53bb83bb3146e9734a6578dcca"],["/tags/AlexNet/index.html","c9e31835d4203759efaed030a728adae"],["/tags/CNN/index.html","3d213b0702a33a5bb8909b1cb3ee9b29"],["/tags/DCGAN/index.html","77447ff44097ddc937c242f66fe99539"],["/tags/DDPG/index.html","642ce683de4f5c5e942e3b6462860376"],["/tags/DDQN/index.html","58e546f9ffcf4c932818e1094f8d8cf9"],["/tags/DQN/index.html","83d0a0a9b82c3e0400be2c2958b9981c"],["/tags/GAN/index.html","f07dc05c8b0cf9a20abef027aefaa9da"],["/tags/IRL/index.html","6df2bce1753b31efb790aceddb22a28f"],["/tags/LSTM/index.html","98df657d6f051ee70e54958818893928"],["/tags/LeNet/index.html","03155b4fe1c92a85287f389f2ebc9eb6"],["/tags/MC/index.html","8a8247568d75f5bf97e38f92fa01e32e"],["/tags/PCA/index.html","ce35171024c0712780d7851190e8864d"],["/tags/PG/index.html","1f0283b345cd629425f152bf74d7030c"],["/tags/PG3/index.html","dadfd33dddbdee7e1129486b8987a97a"],["/tags/PIL/index.html","1f071195efc59cf5a72f5e38b7d8ddee"],["/tags/R/index.html","798bd4f4eb6683e2e522fae4bf46378d"],["/tags/RNN/index.html","5b52545099719392d1991e92da68a6de"],["/tags/SVC/index.html","c0387778420ed33bf94cef7a2ae8db77"],["/tags/SVD/index.html","c2639e37470e67f59ab40ede3ae5d4e8"],["/tags/SVM/index.html","3e46698678f42a72f9b293dda7d19ec9"],["/tags/TCP/index.html","226da2d3d204d23c6b00d6e441e3469f"],["/tags/TD/index.html","8760782cb4953e98b5041984e4a9d6df"],["/tags/TD3/index.html","48df0be0b8921b0be657400de33cc30a"],["/tags/VGG/index.html","ad1dae3a29d92347feea8930235b53b1"],["/tags/amd配置/index.html","dc41ce7381e142f38ff62cea5299b5bf"],["/tags/anconda/index.html","5966b9d035d29e71f998560007843f99"],["/tags/conda常用命令/index.html","be35f250cff373d2c1d4d9fccc71138e"],["/tags/cuda配置/index.html","60e7ec035c2b99b2ea6bbb5d01563145"],["/tags/docker-ldap-mysql-arm64/index.html","9130176885db7e27e498e729282db599"],["/tags/docker-ldap-mysql/index.html","7a8f7713fbf56a3aaa16ec2748de94e7"],["/tags/docker代理/index.html","d0554080ddb2b45aa5f5b3fc3cfe3172"],["/tags/docker安装/index.html","80b809706b414787ecb9b2593dd4cd4d"],["/tags/docker容器挂载硬盘/index.html","64bade26176949ca31bb4f7612f712b5"],["/tags/ffmpeg/index.html","380fd2b9926f27dd79673e0c26c6cdd9"],["/tags/github上传代码/index.html","5f9c854b83a97bc580451e8692132b7c"],["/tags/hexo/index.html","a89d93d6749b5090fa532d710f01adde"],["/tags/index.html","61415cc28bd79314908728ce74d125cf"],["/tags/java调用C/index.html","6fe848b33c97d264c8e47341176c4273"],["/tags/kaldi/index.html","44a833fc00af604b975d95618abe0fde"],["/tags/linux命令/index.html","9ca174e33a081f51590ab80eebfc877f"],["/tags/mamba/index.html","5902b2c2ac3c57bb3d88df4c9949bf9a"],["/tags/markdown/index.html","11b65272cca8cb4f1f04e522f9d37fc9"],["/tags/matplotlib/index.html","7fe7d136b354cffe99a98e9c56262a0f"],["/tags/numpy/index.html","92d10a36a1c607717ef10815d0e668a7"],["/tags/onnx2tflite/index.html","caf032c7ff81c14c29dc00645cb13bcb"],["/tags/opencv/index.html","1288c783117882bbe3f3af1defbe43d0"],["/tags/pandas/index.html","44b3d3905e12e305ff37a4735a465f8f"],["/tags/qq/index.html","03fec07dde6a6931f39fa56d21798134"],["/tags/requests库/index.html","dbb74d1994d71b06602ab008b588a09e"],["/tags/sacred/index.html","638f4dafa02472cbae586afdd118c7a6"],["/tags/ssh-远程连接docker/index.html","7cbc1005a9c72f8b39bb1569b881aa46"],["/tags/torch和apex安装/index.html","682c05ae722070298074b03276d53a37"],["/tags/vscode/index.html","e5480c41d757e267fed7ca226d78a376"],["/tags/wsl/index.html","e687d5c9802bff09798c667bb944bfa1"],["/tags/zsh/index.html","dfa7ccd6e97b1ccf090adc24240e6d95"],["/tags/代理/index.html","21ca44be40f009f13c1b969de79ad0af"],["/tags/决策树/index.html","413dfb8a621bb06f3d96d10f52a849c7"],["/tags/函数/index.html","e3d13417d4316a63d066993a631637ca"],["/tags/列表推导式/index.html","59886733dd820f8b8dbeb0b0d3b2dfa6"],["/tags/助词/index.html","1f5f232162a05dc1b3b1d88ceb0da617"],["/tags/包/index.html","97be6b1450d61448f2151f5e1dc52581"],["/tags/卷积神经网络/index.html","165affd94efe4d5809d993028b536fd4"],["/tags/双系统安装/index.html","12ff3fb78ca6474b8dbc8884832fa692"],["/tags/反向传播/index.html","db9162a17f51447cf5344caf4b178ac7"],["/tags/句型/index.html","11a50cee3bd4a6ce6de04d62fae9b692"],["/tags/可视化/index.html","bb4f4ef6a9032fbf35a6390ebd450742"],["/tags/哲学/index.html","95c51cb0c13624d837f0cef035cfeb98"],["/tags/图像美化/index.html","959ccab9529c9fc196765964598d4cf5"],["/tags/图床/index.html","5f063c312f80bdd2a0e6de7447ae1698"],["/tags/多继承/index.html","468920af39dd729330bcc218aae8b9dd"],["/tags/工具/index.html","e0eb2ebc42600158ec1f57b9c7ec0174"],["/tags/异常/index.html","05ea9d2b4ae2b51e50bc3247b9a3e46b"],["/tags/强化学习/index.html","edfb01badd51f729b44a1a7902d1a3d4"],["/tags/心理学/index.html","9a7906ea73a47ab71327450039a92182"],["/tags/感知器/index.html","133d6046036ba71d4be108ec5e23f1fe"],["/tags/换源/index.html","eb61c0562090018a5850857d429d0272"],["/tags/描述器/index.html","702f2b4e1855b8f7a136f5d9679ef172"],["/tags/敬语/index.html","7cb303928520150fbcc3035321770eea"],["/tags/数据集/index.html","7eca6b1841238cd8effb3f6a1cae6d49"],["/tags/文件/index.html","ff454403c5d832e8b5b48d813b56c78e"],["/tags/服务器配置LDAP/index.html","fe692776f352dba9005accfa80a0f073"],["/tags/机器学习/index.html","52a16322aee38a1c409783d79699272b"],["/tags/梯度下降/index.html","ef6f9dfecc9e5e9f055d0dab0939c066"],["/tags/模块/index.html","f2fc9238369746607e1de869407af77a"],["/tags/正则/index.html","60aee3189f68b04fe874435d6159bed9"],["/tags/激活函数/index.html","56d771309652f82e2d9979aff8834542"],["/tags/点击预估/index.html","92ec0ad433e9930abe57f56777db81f0"],["/tags/爬虫/index.html","f4f63b67ac44a596c27bb399060468e3"],["/tags/生成器/index.html","9006c8acd34b578a9e6e38a5a6ec170a"],["/tags/类/index.html","06839062709fc1a9a865ea33c1b24520"],["/tags/线性回归/index.html","c4a6e6db326580c6ac4dfe1c5fcdab13"],["/tags/经济学/index.html","4074a11e877ea643d20cdb5bbdd82920"],["/tags/聚类/index.html","33162f66a45459787b7396b3b8635799"],["/tags/装饰器/index.html","b566fcd39e7d697c9bb24b73010eaf2b"],["/tags/词型变换/index.html","f4b9f0e27772d5c762f435997c624176"],["/tags/语义分割/index.html","ea4e894f50d94594382a45df8d8dc246"],["/tags/语法/index.html","33348245b78389d564233620a3eb3b81"],["/tags/语法/page/2/index.html","9ddc6655941916f4f9a853a45e6e830b"],["/tags/迭代器/index.html","6db7bc3387562c0fff891e8e8dbb6f2b"],["/tags/逻辑回归/index.html","29d2c0384ed99df2d75929d408b880e0"],["/tags/随机森林/index.html","eede725c4d597d0dbd6e1adc57415b0e"],["/tags/魔方方法/index.html","06ec237515bc5e58f8ebf04f44b01bac"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
