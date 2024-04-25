/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","cc6cb5ae55dcc0917e992d712d877ce7"],["/2019/01/02/Anconda常用命令总结/index.html","6488341be22d46418fbbee8e8dbee9de"],["/2019/01/02/句型/index.html","627ce820604e646989cb1539b0582b99"],["/2019/01/02/日语助词/index.html","dea419be1c9a5438f55e0871933ab07f"],["/2019/01/03/on-my-zsh/index.html","2fd9eedd7000762475dbb9dd717fee59"],["/2019/01/04/《当我遇见一个人》摘录/index.html","3caab22ab5cca40587717853f1bee542"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","c7a9cbaee4ca114c2fc9fe4379246903"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","c6c94284160f1a195196586c7e285ab6"],["/2019/01/04/经济学笔记/index.html","f9a907625edf6c6c1008d2085892ae78"],["/2019/01/04/语法总结（5-15）/index.html","1005ee5b3ad8cbca53678732865b40b4"],["/2019/01/05/linux常用命令/index.html","855ecc62bb739c43028343bb22d07e67"],["/2019/01/05/torch安装/index.html","be1ce162f526ed933b882cd8fb56d7cb"],["/2019/01/06/敬语/index.html","28845c10f39f949236fd19e5713710c8"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","a644f5e4a461039918686bf0929e4579"],["/2019/01/07/cuda 手动配置/index.html","1a77d509029e4bc10a089a46d7b302a0"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","20fcaa0ea40d36094b35deb484d0f71e"],["/2019/01/07/docker-ldap-mysql/index.html","bd1515e9fa26c387bacf2a837d6663c3"],["/2019/01/07/docker代理/index.html","0092aff7b8d1414d1f00346d62b855fc"],["/2019/01/07/docker安装/index.html","8946640a02a1a5ccb4d7f9f5bf331de8"],["/2019/01/07/docker容器挂载硬盘/index.html","e9c514128e2172ecb3c1a75393d4c843"],["/2019/01/07/github上传代码/index.html","44f7e7c9c8a5f24f1260e9bfeb8e95da"],["/2019/01/07/kaldi 安装/index.html","7d63231d7af2bc40c10647bc74d5d89f"],["/2019/01/07/linux常用工具/index.html","3175e50f949ba9f25d39c62e98452f8f"],["/2019/01/07/opencv/index.html","4cf96fe2b2bd84bba15a6af58f9fa15c"],["/2019/01/07/ssh 远程连接docker/index.html","83bd4979efd1d1cae0a5359711dacec6"],["/2019/01/07/导出/index.html","a90ab67be1cd1845a8e7aa60a61f919d"],["/2019/01/07/换源/index.html","aa9f3346dbdcce078c7ce1eee9749955"],["/2019/01/07/服务器配置LDAP/index.html","0715b6d61ba300d305a29b5ec1f8871e"],["/2019/01/09/markdown/index.html","7e09912151eb22ac8f8767d13ceab59c"],["/2019/01/09/opencv图像美化/index.html","5b7683189f00df7e9ebf3f61c380cb49"],["/2019/01/11/19单元语法/index.html","0718fc70e519d11197fe6feabc561760"],["/2019/01/11/20单元语法/index.html","71aa750560404ebba4ccfa104b4b1e5e"],["/2019/01/11/opencv-图片几何变换/index.html","68c0b21a784172240564ac91ba273cc4"],["/2019/01/11/opencv-图片处理及绘图/index.html","d9e7c6d7c8124d04022e667326095b7a"],["/2019/01/11/wine安装qq/index.html","be1798a368088c86169489edd53150dc"],["/2019/01/12/tensorflow-可视化/index.html","4f4d822d4ae7945310ad1e4b20950dbe"],["/2019/01/12/tensorflow-基础语法/index.html","7a97912e0f3fc0e28f819453662dab19"],["/2019/01/13/RNN/index.html","f71b8916098453bfb13184321927fff7"],["/2019/01/13/keras实现CNN/index.html","0ffcb14edd9ce707e71887198d99a520"],["/2019/01/13/卷积神经网络实现/index.html","77293c408d72d01a59ac7aa8000a5a10"],["/2019/01/13/循环神经网络RNN-写诗/index.html","4ff2071ac97559dfa4105905dfa5b6c9"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","6e70d0bc59ec7c8442335ceb31a0d7e3"],["/2019/01/14/反向传播/index.html","b11fcd1cc6630861d15cd65716d969a4"],["/2019/01/14/图床/index.html","249db1caf6a30cd3ddb31dd37744ff7e"],["/2019/01/14/感知器与激活函数/index.html","5bf19252b10007b787d353d02ea4b3a4"],["/2019/01/15/PIL简单应用/index.html","acfc3e94d6d60102d49307fd7ddca9ca"],["/2019/01/15/卷积神经网络理论/index.html","15b0c164c62c8ad0d46586f9a70fb46c"],["/2019/01/15/图片分类之pca-svc/index.html","9ae39b5b5ef1f36fd90fba2f16858eeb"],["/2019/01/15/强化学习基础/index.html","e0b2eaced0a67963007a64619b869865"],["/2019/01/15/经典神经网络/index.html","f5f46adb8a840e66f64e97fdc4fc1bcd"],["/2019/01/16/DQN/index.html","d93d5cdc7a25183119aaaaaff76f4d96"],["/2019/01/16/TCP传输图片/index.html","2ce211494a2075c8a59de605c8d545cf"],["/2019/01/16/时序差分学习/index.html","c0d1871d7bd577434506e8a703dd86e2"],["/2019/01/16/蒙特卡洛方法/index.html","135e3d7808412b62af9cc17e1bcc1cf8"],["/2019/01/17/Double-QDN/index.html","4a94b7431b4fde8fc1358ff6dc41b291"],["/2019/01/17/RNN理论/index.html","c65d47118d5f15aaaeb3e4d49fae24b5"],["/2019/01/17/梯度下降/index.html","852349fabf31fc4685d5b1cc9811a613"],["/2019/01/18/PG和TD3/index.html","a8c55c6d72d09f4e0034af9bc5f96fd4"],["/2019/01/20/21单元语法/index.html","5ccb6fce08d400cc7f6f3b7d4ec6013f"],["/2019/01/20/GAN理论/index.html","7b90817ff720e096ac4c10ebcb7b113b"],["/2019/01/20/PG3和IRL/index.html","b0fbb89bdfed6dfde8acfa221ac0dc18"],["/2019/01/20/数据集/index.html","e49da938060ff637f95d841abda6ea66"],["/2019/01/21/DCGAN/index.html","c6c6dd24b393f99329a904a6117b66ab"],["/2019/01/21/LSTM/index.html","e16f94ce81860ca224ea758f8f849702"],["/2019/01/21/点击预估/index.html","2bc9bef8309bfbaf8565137ab02da4bc"],["/2019/01/22/SVD分解/index.html","97e95d5b2c60d1128b86f00076db7534"],["/2019/01/22/SVM/index.html","350904aacc5a9210d0e8195fda56dc32"],["/2019/01/22/机器学习简介/index.html","a323cba258abc52b33b280cfc32c3964"],["/2019/01/22/线性回归/index.html","f1777a5655a596d85cc5c0d6274cea53"],["/2019/01/22/逻辑回归/index.html","8382ac906b16671b7c37b9e755b1f4b9"],["/2019/01/23/numpy/index.html","c2d850f212cdf8a7eb5518c6fb68eb67"],["/2019/01/23/决策树与随机森林/index.html","13060e07b1e5de86c3ce08b7f51112e6"],["/2019/01/23/聚类/index.html","04ddd55fb0d76ddf8d4af9d45825effd"],["/2019/01/24/matplotlib/index.html","b6d7b4a84ec3e55476691366371ca29a"],["/2019/01/25/pandas/index.html","08986b6073c2add73ec5a9c29be8c92f"],["/2019/01/25/语义分割/index.html","f8cc7479c0953c456d0789135835e1e3"],["/2019/01/27/22单元语法/index.html","95659862b336d284345aad560c8a27ad"],["/2019/01/27/SVM案例/index.html","75fba5169b3f787c41aa8a7460e5b15b"],["/2019/01/28/requests库及爬虫案例/index.html","27250608342f4317919a57b2ae1e35ef"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","670c5ecd244e9dc8abc03cb20839c835"],["/2019/01/28/异常/index.html","cdc783fcaa1cc37aafed4d34aa2bd54b"],["/2019/01/28/描述器和装饰器/index.html","59c68aa644f8514741d1a43dbcaa61ed"],["/2019/01/28/文件/index.html","6e558b22650bd2fe8698bb7aa303a8d4"],["/2019/01/28/正则/index.html","7bcfe85c665dbe3d782298fd12c10074"],["/2019/01/29/函数基础和函数参数/index.html","18ad6323d7961fe9a551ea79c9df225f"],["/2019/01/29/多继承和魔方方法/index.html","30e360fe33659e5d039fbce78d0d27d4"],["/2019/01/29/类定义、属性和继承/index.html","f334f1065346324fbea642b8061dc03a"],["/2019/02/27/23单元/index.html","fdde1f882f761dd319e56b6146542467"],["/2019/03/12/hexo加速/index.html","05f37583b01269396ce48841648ee4cd"],["/2019/03/12/hexo系统重装恢复/index.html","968648d8e26d545068702e80bac9bd89"],["/2019/03/13/24单元/index.html","d7fc7d2dce6e61715b39ccbc4a84ab0f"],["/2019/03/19/25单元/index.html","186ff9400bd583f3abb9979241125e27"],["/2019/03/26/26单元/index.html","91de83e5076a76ad8c92d7182bd7869b"],["/2019/04/14/27单元/index.html","b4a1f26dc970fb3264181e8b2eedff5d"],["/2019/05/01/28单元/index.html","af53b3d5a82605673fbeb370bb05e81b"],["/2019/05/02/29单元/index.html","481fbed1107cd0841e8c0640090dd7f5"],["/2019/05/12/30单元/index.html","dc3dcc91def6d8060d8c961c5e2e5d74"],["/2019/06/03/jni/index.html","bcc0d6529309ac4de723abdc4e6c7c72"],["/2019/06/07/JNA/index.html","96207152c9808aa208da79c88e6a7197"],["/2022/08/07/R配置jupyter/index.html","b0fe089ba654db97eeddc20913e9251f"],["/2022/08/18/FFmpeg常用命令/index.html","adfe92b567924d5d3da105c6cd135c59"],["/2022/08/18/linux系统代理/index.html","ff5b8a7ba01bf80ea060c787931aad53"],["/2022/08/18/matplotlib补充/index.html","947ce4021595aabefd66a45d503c34d7"],["/2022/08/18/常用命令/index.html","d2e1cf4a00c1f1aeea146b60333aa9d1"],["/2022/08/20/sacred/index.html","d6575cbe3c3545d6cf76a253297590e7"],["/2022/08/20/wsl/index.html","203c9014185d99824a96d79afa83b4c8"],["/2022/08/20/双系统安装/index.html","98985524f65d57477d68420564fbcaca"],["/2023/06/28/source/index.html","ee4ad543f25473d9a9e47633da377a56"],["/archives/2018/12/index.html","e3c2c43a5f997aa06dda1b465a8f40a0"],["/archives/2018/index.html","48685f3a2cc701216a406a0a1776dfcd"],["/archives/2019/01/index.html","1feb9c24729298251e2041500b1cb2ca"],["/archives/2019/01/page/2/index.html","5c1169cd300982c97eff9462e2fe36de"],["/archives/2019/01/page/3/index.html","f80a7022b0fc7715e27bef14b44ab901"],["/archives/2019/01/page/4/index.html","c27df92a93c936e3ccec89233e44f14e"],["/archives/2019/01/page/5/index.html","2220e270647f5e31821f9c7558a66367"],["/archives/2019/01/page/6/index.html","4b5717a178e216289260cd71c1e1c035"],["/archives/2019/01/page/7/index.html","0d5ec7e540831243a26a7aa2f936b26a"],["/archives/2019/01/page/8/index.html","05a0a3719443c6509d6b314171fd06c3"],["/archives/2019/01/page/9/index.html","07be962391cc0af75bd48fc84bd38b3b"],["/archives/2019/02/index.html","d1d4f7ffe5f8c9fb1077fff8e13442cc"],["/archives/2019/03/index.html","2292ac7e80b109fc1073a131972131a4"],["/archives/2019/04/index.html","6394db7e868920225e487eb1b16647e9"],["/archives/2019/05/index.html","6fc6b4f17337b0d4ff02fbcf1f793d3b"],["/archives/2019/06/index.html","eb47864feee0e99949c713c2cb2e1d2b"],["/archives/2019/index.html","8bfb23ff70a66b0fb9f79a7794f225fe"],["/archives/2019/page/10/index.html","dcfd40b5db10fe54c28b302b43c29f70"],["/archives/2019/page/2/index.html","8685d5d1283e1655fa7ddde2ad6454f5"],["/archives/2019/page/3/index.html","d689b5de09b77f13962516b129999125"],["/archives/2019/page/4/index.html","fdbefd99d01416f4628c2b60b4d0ad26"],["/archives/2019/page/5/index.html","e065a124fbd9e3b25214480a71acca36"],["/archives/2019/page/6/index.html","f3c48cd941e639cb11ee57b31ebe6124"],["/archives/2019/page/7/index.html","c3f29762b0cadd2fccc325cfe14cca72"],["/archives/2019/page/8/index.html","adaca2a9795d115c3e9bb620b6b83392"],["/archives/2019/page/9/index.html","e6f86b452673ef0c3d9edda0ec8e1655"],["/archives/2022/08/index.html","3f2e8beb0320b0b6aed341a7febaf1fe"],["/archives/2022/index.html","32b1c45ac0e2e6d135958ed4d3bd49f0"],["/archives/2023/06/index.html","9760aa5fbf13a98cbaa7775502797ead"],["/archives/2023/index.html","17b8c7b6802580111a7e3273703feb8b"],["/archives/index.html","6ba1a8b1724c266d8ce1e427fd89a67d"],["/archives/page/10/index.html","1d439272948c79a38ffcdb75c225113e"],["/archives/page/11/index.html","4023a0563e359e6caa4fbafb93f6b51d"],["/archives/page/2/index.html","a7596315ccb782efb369fec1e1d851c0"],["/archives/page/3/index.html","62dbc0dfca0773299ff5efbec263160b"],["/archives/page/4/index.html","3fb5aea02dcfbfb3762a6a5e38921385"],["/archives/page/5/index.html","d99c77fcfb49d022e8f7049e3250517c"],["/archives/page/6/index.html","900fc5de3a023cf4988c69962caa07b0"],["/archives/page/7/index.html","a64575d9e472e2e41c516ea0f016ba53"],["/archives/page/8/index.html","dd2174bfcc52b67a46c2f891e64fb446"],["/archives/page/9/index.html","6e87536206450a2a757125a5575d9b3c"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","d7edb1e6fe8444c41fc22bbf1e228d68"],["/categories/dxz/index.html","c137eda0135f5bc3ab918ea8b5434b89"],["/categories/index.html","fb48f62818bdb654d22da43eb889af44"],["/categories/java调用C/index.html","21f28343e321f7b3ff97313021e8154b"],["/categories/linux/index.html","dc22fbebd605ec92bf9ee7fc09fb8c3a"],["/categories/python/index.html","00bc137be96aa973f82986d94f1ce8e6"],["/categories/tensorflow/index.html","6d254212a28b92aac9bf251da2d8223a"],["/categories/优化算法/index.html","1d58b75aadb4619081c697d76b012c10"],["/categories/图片分类/index.html","8451dcbd1301ead4d922e23d2ebd277c"],["/categories/工具/index.html","df81a6fbd504ee98397ac2ccefd02a03"],["/categories/工具/page/2/index.html","919e63ddc0467186671fbb380e0eb8a3"],["/categories/强化学习/index.html","5b3f1a9515c8cffe196a50e471e3a5d8"],["/categories/数据集/index.html","d1f8eb1a93cbdb70622d853aec0a2d8f"],["/categories/日语/index.html","fc0276906f921ce6b543000d813c899d"],["/categories/日语/page/2/index.html","cd5f18663edd4418de21ffac2647a4b7"],["/categories/机器学习/index.html","647f63290a14ef123fb5525e5f329a60"],["/categories/深度学习/index.html","8d89c6c5198630006ab5ebf153dc5cf4"],["/categories/深度学习/page/2/index.html","3c9e1b8888f180b067fa8fad2551230b"],["/categories/深度学习环境配置/index.html","938f3e5d4d01aba0019eed004e0384cd"],["/categories/计算机视觉/index.html","db4929fecd1916b6b2cf4a065be6b291"],["/categories/读书笔记/index.html","4b9162a41c6f4b186a5509b62bddb0e2"],["/css/main.css","76c7901de55bcecc3e0c18364ef8e9bd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","87ef49e0222bdf51733800ddb9ee7d29"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","103c28b81d27100b9d14778b94f7c0f2"],["/page/11/index.html","7234132c60c3ec222095ad1fc0b21a8c"],["/page/2/index.html","d9a08890b055e405b6353dd1bbbe67ac"],["/page/3/index.html","ace10c14aa794805a3de292ca81dbb26"],["/page/4/index.html","b132921a13a939e7ab986a8ade55caf3"],["/page/5/index.html","00be6ebbf29967fe8d8947158b19a5a5"],["/page/6/index.html","016e695c5baf3486dd9ba700a78bac1a"],["/page/7/index.html","3718f7697bdbb150e03cee6e45c75d80"],["/page/8/index.html","5846e7c588383fd70091c7087ed19ef0"],["/page/9/index.html","4013c2ad9c02130c5e073ff313d3980a"],["/sw-register.js","eceb51174204176a8ad3777cf38eac33"],["/tags/AlexNet/index.html","669159b152bd9fc275dda9e17d6f722d"],["/tags/CNN/index.html","04e34a71e294d590e4ff6cc6547fdf31"],["/tags/DCGAN/index.html","0d83a6f82d40c07b23b96f5e1a6575c6"],["/tags/DDPG/index.html","a5093452a92243b8978b24854d492e87"],["/tags/DDQN/index.html","8709c14bbf7efaafb2ccd8df5508e7e5"],["/tags/DQN/index.html","0271108929dc72422548741043c33072"],["/tags/GAN/index.html","76bdce95b526831b528e96072268eb15"],["/tags/IRL/index.html","ede3011377bb08dec3f927a91ba2fe21"],["/tags/LSTM/index.html","cdafc302033135d16c64fcc79af3dba9"],["/tags/LeNet/index.html","3319ca003d28d7806a60969c1405b5b4"],["/tags/MC/index.html","ae7ff45456ca9b73a8d1ac2bd3cf8b63"],["/tags/PCA/index.html","86f8aba2078eb81435b123aee13beb13"],["/tags/PG/index.html","711c2d5ff0f34ce89fb0816261635a22"],["/tags/PG3/index.html","40dcf8186f66e1647424a2fb3dd10499"],["/tags/PIL/index.html","325738903bb0560c6642d30888f84f6e"],["/tags/R/index.html","2aabc7d13fe110c61185abbd18e7adf0"],["/tags/RNN/index.html","1d8885fe0e40b56c47c3efcf6a0f29f4"],["/tags/SVC/index.html","c6efbbd636d8fe1817dc7eb64ec36b3e"],["/tags/SVD/index.html","e99f3aeaaf30ea29c7ae78e37c857725"],["/tags/SVM/index.html","5a086ece5442f859e6cd65ad731b687b"],["/tags/TCP/index.html","9d5975ff526b04edea0681bae24dbd32"],["/tags/TD/index.html","41cd708c419877698f626143a550b4b3"],["/tags/TD3/index.html","621d7d42a7f2c44a0521dd651f24f267"],["/tags/VGG/index.html","e52bd19fe503f252ab28800794b443d9"],["/tags/amd配置/index.html","7500e698421bd30bd2d2e62b87c16177"],["/tags/anconda/index.html","5c8a359a92ea2f85bebc2ad272baab21"],["/tags/conda常用命令/index.html","f52271d2f8063f69b2534a879b702c88"],["/tags/cuda配置/index.html","20974c2b31fe045c841e4016090e1fe4"],["/tags/docker-ldap-mysql-arm64/index.html","53fd3db6fffcd2fd1b80ee8e4d13e100"],["/tags/docker-ldap-mysql/index.html","09e9b5008df0b958f4a6fa18330db2c3"],["/tags/docker代理/index.html","eaaae1332db98435806d115feb5754cc"],["/tags/docker安装/index.html","8cb43689a8a2c2a6db4cce19d56f9d7e"],["/tags/docker容器挂载硬盘/index.html","e6cf57f59281778b5439e13e757779af"],["/tags/ffmpeg/index.html","2cd05b3000defe540e0633b65fa7dfcb"],["/tags/github上传代码/index.html","11e660e75d63dbe2cd9585b1e960cfe2"],["/tags/hexo/index.html","1ae0ab277db4103ddf20b47ba94dedd0"],["/tags/index.html","045516294910d1ac6761006f3450ab1b"],["/tags/java调用C/index.html","e1e9f391b92cc7b511439c6336d596e6"],["/tags/kaldi/index.html","f230a6554002d956707d9f8f1b404cfa"],["/tags/linux命令/index.html","e002988ea3caff463d9031cfc7de566c"],["/tags/markdown/index.html","8c9d395868c7f7038b95b4fe914e4108"],["/tags/matplotlib/index.html","a2b0ed7fafdd8a8775084c835a6174a0"],["/tags/numpy/index.html","a9504a6420b48c96278829bd6aaf9adc"],["/tags/opencv/index.html","c33526b8713f97cb5a0c59c3a5ee2329"],["/tags/pandas/index.html","860bc6032b5cd00f25b149a40f12a77f"],["/tags/qq/index.html","403720ed791458111c32ca92d1b5f014"],["/tags/requests库/index.html","5cca6b96b316b2f424419fce1007ff0a"],["/tags/sacred/index.html","78af9f22b88ba8891fcdce7b32a7bf41"],["/tags/ssh-远程连接docker/index.html","e1ec77531b381b4e4d143f92b9511883"],["/tags/torch和apex安装/index.html","e3afccd473d2de3df0f4f6cf25d3f1b0"],["/tags/wsl/index.html","87cbc037dbdb0bc183bf6250db4607ec"],["/tags/zsh/index.html","da3c36cfa665288517c256c5a89d0b83"],["/tags/代理/index.html","b694b2b202eeb0ba92711b82ccac48bb"],["/tags/决策树/index.html","fdc6337cb96836fd4d10fd107e14cb63"],["/tags/函数/index.html","5c622c080fc004599a5704c3349dc1e0"],["/tags/列表推导式/index.html","8ef682aeddbd51d5fce12f95a7bd8846"],["/tags/助词/index.html","71ab640a0d9d334682c24cf9949537d5"],["/tags/包/index.html","ab47693baa1828280589cc610f182d78"],["/tags/卷积神经网络/index.html","f5fa789feeb304c0b916c92107347848"],["/tags/双系统安装/index.html","0edce1c4b92d12e0ba22f6f67db56bab"],["/tags/反向传播/index.html","d86fd23fe31a7ada7f04cc4d78ffab6f"],["/tags/句型/index.html","36d14cefec3cf82ee6077b06b65db1c6"],["/tags/可视化/index.html","d2004db96ab2d27597f1355802586e8d"],["/tags/哲学/index.html","ee117e246b67ce35d39bf2b7f632fe8a"],["/tags/图像美化/index.html","13f6a4d745e0e0790c9e044d6e6d64bf"],["/tags/图床/index.html","3804dfe38b7383c23ae7911473099890"],["/tags/多继承/index.html","3f9968d674ed25f1add7dc3a97b82fd4"],["/tags/工具/index.html","38702c08657368d3c271104a1d9a7706"],["/tags/异常/index.html","dabf9a281a4c5e301fa93a83768a3b44"],["/tags/强化学习/index.html","47833238d46028189da75f678c74c1e9"],["/tags/心理学/index.html","d46a2fd3f40c89b7c80a151e89a1b150"],["/tags/感知器/index.html","5f05e64091fe74060f16341aba2cced0"],["/tags/换源/index.html","0ce3a60f66efacfe7401f12942b2e5c6"],["/tags/描述器/index.html","8bd761716cf6115ff6b1164ae19b19b2"],["/tags/敬语/index.html","dff76a95f22b2449842df5470933f40e"],["/tags/数据集/index.html","cc42e2ae9dfd404c60b488a93349ce28"],["/tags/文件/index.html","05c1af8ea760f94290f078000eacc78b"],["/tags/服务器配置LDAP/index.html","c445f1b72df7749ca92c8446043ebb07"],["/tags/机器学习/index.html","3b772643a0e2fb1cc3a8063abb676770"],["/tags/梯度下降/index.html","5fc7597cd9ae49546a5770c2a45dab93"],["/tags/模块/index.html","89115507e05b03459d2cec68f72a1c7a"],["/tags/正则/index.html","82a29aac30409e097b193d78340a6295"],["/tags/激活函数/index.html","3d272f70d681953d4cbceebe78299601"],["/tags/点击预估/index.html","97acd8b4e62228b2224297f9bf0d62c6"],["/tags/爬虫/index.html","5bf8b7a458fdb524471c54075721d151"],["/tags/生成器/index.html","2edd78b7aa549ee6f85bc1ed33b5474c"],["/tags/类/index.html","59d2453de7b493b918300cf9d597f51f"],["/tags/线性回归/index.html","a5224bd689836669d8d044bac0a63f56"],["/tags/经济学/index.html","0d982d7bf3b204d2606671d5281aa3e0"],["/tags/聚类/index.html","af075dc7f8a11442db009b461296c1b0"],["/tags/装饰器/index.html","e097a3e438805e8bba281fa368902cc2"],["/tags/词型变换/index.html","1b7c70f5c7dae12e11a8c87cb1810c10"],["/tags/语义分割/index.html","4d360d687a88d858d6f6b62dde468e5a"],["/tags/语法/index.html","31b400d77e3263125af448620fde4e31"],["/tags/语法/page/2/index.html","d9ecf2a6a37bf997cf662c61142bad0f"],["/tags/迭代器/index.html","f4c75bd6a99650e4b6dd3a583cfd0dbf"],["/tags/逻辑回归/index.html","23f1f972a0e79d737eef0580b7ca2c31"],["/tags/随机森林/index.html","45c8361df4e8bd0e5b4561442ee68855"],["/tags/魔方方法/index.html","9760c194bdad5c71bab8b0bd8fc36fe7"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
