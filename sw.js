/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","542d38e4539bb7424ff51ba8f04b5ea7"],["/2019/01/02/Anconda常用命令总结/index.html","93285c90152fb9715d20f6043b37f8fc"],["/2019/01/02/句型/index.html","24ed53d2b312074fad3e3598dd9a572d"],["/2019/01/02/日语助词/index.html","6d2b6a83def05ea1c35a911f3780cf60"],["/2019/01/03/on-my-zsh/index.html","4a2e32b5b15f390eb06e2ba751a4cc69"],["/2019/01/04/《当我遇见一个人》摘录/index.html","d9f27dd9df0d5e0f8e5a2d5eab595084"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","b04038cef5b944249087f51fedf93066"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","8c214327ff167c8bb1002d4b27b9f872"],["/2019/01/04/经济学笔记/index.html","ae761eb1834bb1a6025797138387fd44"],["/2019/01/04/语法总结（5-15）/index.html","34c4923e8463a8cb2dc4110844b4f0fe"],["/2019/01/05/linux常用命令/index.html","48d9fc961357c1f0ce273207178fe016"],["/2019/01/05/onnx2tflite/index.html","6aed614e18ea9cd390ce3ca33f6179ec"],["/2019/01/05/torch安装/index.html","225ddf9fd13d5f59d6c31819bb33bca5"],["/2019/01/06/敬语/index.html","9c7ed7be1f56a494580389b39fc9a16e"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","8f5294c48e49f17c2d0ca6c1c8b274b0"],["/2019/01/07/cuda 手动配置/index.html","dba3347f5f17094283454f0cebc9c24c"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","b990a228e3e09126ff4db727eab185c9"],["/2019/01/07/docker-ldap-mysql/index.html","86b7ee09b70b7c61c96c98462c68009f"],["/2019/01/07/docker代理/index.html","eb16d5e454ff2b09f0036eb878eb6ce0"],["/2019/01/07/docker安装/index.html","e0d35d1ff7dda6c74ee21ec56372398a"],["/2019/01/07/docker容器挂载硬盘/index.html","97a2b7705be250fdb39f3ef5ad23e601"],["/2019/01/07/github上传代码/index.html","8a1f721980cdadd1900a76ceabdd7070"],["/2019/01/07/kaldi 安装/index.html","a97ca3f3371576a50f69de5fc2abd03d"],["/2019/01/07/linux常用工具/index.html","b95d110311b482600694c77a1b0a0ba4"],["/2019/01/07/opencv/index.html","d7cdb1ea80e25a0276504a8a967651f4"],["/2019/01/07/ssh 远程连接docker/index.html","25e860281bdd8752bd4221d5d910b7fd"],["/2019/01/07/导出/index.html","f9ea6d164422bbcfc76c91d203953691"],["/2019/01/07/换源/index.html","c4ad04374045b550e366a8e102d053b8"],["/2019/01/07/服务器配置LDAP/index.html","c7504b373e3e61215bda23d306b75ec6"],["/2019/01/09/markdown/index.html","5a99e970e2f1af0202caefaa63089739"],["/2019/01/09/opencv图像美化/index.html","8a17ebab770b000de5cc9f2193e01363"],["/2019/01/11/19单元语法/index.html","a7cff8bfb903bb537e40dafcd27760d3"],["/2019/01/11/20单元语法/index.html","10abfc67ebc47875ff52c63877be6104"],["/2019/01/11/opencv-图片几何变换/index.html","6ca3f75b10989c12a16228976efb588c"],["/2019/01/11/opencv-图片处理及绘图/index.html","ba055374e5c21139a722b7d5e6e2827a"],["/2019/01/11/wine安装qq/index.html","8524ec46fac9942d9f67185ea5094940"],["/2019/01/12/tensorflow-可视化/index.html","ac85b6cd540fc1f2659dc35a79e3891a"],["/2019/01/12/tensorflow-基础语法/index.html","0f4c03bedcdc0a80ad8eee751b7a7180"],["/2019/01/13/RNN/index.html","b5873f662c50440b941e28bce5e00764"],["/2019/01/13/keras实现CNN/index.html","37a8dc90826296fdeb568a41584fce35"],["/2019/01/13/卷积神经网络实现/index.html","89698449765b51897d8412bfc431b1bf"],["/2019/01/13/循环神经网络RNN-写诗/index.html","6ffdb435a52b55dc0124bc18a4146d33"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","0891ae336a243e43b820d72cfca764a7"],["/2019/01/14/反向传播/index.html","aba525a8b52328edd984e0611197617e"],["/2019/01/14/图床/index.html","9903b09bd53368f113e9693ec064966f"],["/2019/01/14/感知器与激活函数/index.html","8f0ee140fd8f6ad274860bde97325314"],["/2019/01/15/PIL简单应用/index.html","798d20db3b9c3c7a48f8145326322d78"],["/2019/01/15/卷积神经网络理论/index.html","494240615ee1580d92bd798ab85e6017"],["/2019/01/15/图片分类之pca-svc/index.html","254491be6332ce215b242b7635abbefb"],["/2019/01/15/强化学习基础/index.html","6c4090d965f080f2955c648126cc4c1c"],["/2019/01/15/经典神经网络/index.html","0d8c3f2be5ad8e4dd4a8fb9451869952"],["/2019/01/16/DQN/index.html","764fd5970269976bd8eede7e48a90c26"],["/2019/01/16/TCP传输图片/index.html","ed415c8be6f2b532ae1dccdaa7db3b8f"],["/2019/01/16/时序差分学习/index.html","057e796970032641d993850be8a11161"],["/2019/01/16/蒙特卡洛方法/index.html","17db132bb4a61f197b4deabf0b2a893b"],["/2019/01/17/Double-QDN/index.html","baa7cc0adcff23b2576c742879f9f2c9"],["/2019/01/17/RNN理论/index.html","22c1506ab9c9d90899bfbc61ef7ddbcf"],["/2019/01/17/梯度下降/index.html","95372fa8e6d4f76bb73708be1d490a79"],["/2019/01/18/PG和TD3/index.html","f5be5bbfc998fe489201858ce8875ff7"],["/2019/01/20/21单元语法/index.html","0bf503f456b99f34b5d9833a775dc575"],["/2019/01/20/GAN理论/index.html","36d70cb4634d98f7c7159ced9becd0ac"],["/2019/01/20/PG3和IRL/index.html","d92564576168ec431d0d69d05277a451"],["/2019/01/20/数据集/index.html","549fa9c6029ce2210c3e86549aa9c4a1"],["/2019/01/21/DCGAN/index.html","154733f16c2a1d52b10efbe617d623ba"],["/2019/01/21/LSTM/index.html","093869aacf6d88378b7547ad70215e73"],["/2019/01/21/点击预估/index.html","9fe6e40a835dd8003dd8f0e9e5b1d544"],["/2019/01/22/SVD分解/index.html","b06b66e3314f5ea755a5b6fcef0e1c4c"],["/2019/01/22/SVM/index.html","542aaef6e1fdd742a982ed1f014fbdaf"],["/2019/01/22/机器学习简介/index.html","64193ef3b738e960f6343034303be695"],["/2019/01/22/线性回归/index.html","311b3fc69ee7ad04f849d9416c40de6c"],["/2019/01/22/逻辑回归/index.html","dbc7ae0ec7f5af860090ffed34e9527a"],["/2019/01/23/numpy/index.html","2ce9dbd84d3f0ddec1f868da6df48395"],["/2019/01/23/决策树与随机森林/index.html","8ac11c69d9d9118f925f67bae9dd6e69"],["/2019/01/23/聚类/index.html","a245b5b732def8be584b8237a6369be8"],["/2019/01/24/matplotlib/index.html","b1b3585979c1f4309e9db5a73091ef9b"],["/2019/01/25/pandas/index.html","5e3fd09fb1581fbea1d0796266e7161d"],["/2019/01/25/语义分割/index.html","17a2792e2a4766a9c10476f1b691041f"],["/2019/01/27/22单元语法/index.html","ce097cd0affa6808f17f14e7ef62f8aa"],["/2019/01/27/SVM案例/index.html","fb7543fa66ce4c69a6ba796fe878a146"],["/2019/01/28/requests库及爬虫案例/index.html","d406f9da81c22c3b3267927a923d06e8"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","8a9d9f2bbcb90ef8b639a2989555c155"],["/2019/01/28/异常/index.html","433ed54c251f7b7b61f3b429a12504ad"],["/2019/01/28/描述器和装饰器/index.html","9e346804f9daaf7669c01d55713f1c73"],["/2019/01/28/文件/index.html","8cb2b245a4cbf60dee284bdb29ac6905"],["/2019/01/28/正则/index.html","a887089981886033e3473b52a3b9b5c6"],["/2019/01/29/函数基础和函数参数/index.html","583780291e3e7356949fa75ba1da3932"],["/2019/01/29/多继承和魔方方法/index.html","de7761c0dd6208c44c10f1a35b422aaf"],["/2019/01/29/类定义、属性和继承/index.html","e8badf6c695ed937d8626bbfa94b4cdf"],["/2019/02/27/23单元/index.html","1ce343913f3d26a42131498f9071e975"],["/2019/03/12/hexo加速/index.html","6c0f1982b776d4ba53de0092f884a34a"],["/2019/03/12/hexo系统重装恢复/index.html","e6de17071f47fdb15544632373a25a29"],["/2019/03/13/24单元/index.html","fa85a1444bd22af44c98605e347ab14d"],["/2019/03/19/25单元/index.html","aa90f5bedceee886d411ea78de65756b"],["/2019/03/26/26单元/index.html","23adbdf76933ddc2e8a78e9b99207fb7"],["/2019/04/14/27单元/index.html","39e20e7dab29375d4324d38063924952"],["/2019/05/01/28单元/index.html","598a9efbe8400847068117ecc1ca99d7"],["/2019/05/02/29单元/index.html","dd90cc04cb2a3c6f4e542afaec8d7841"],["/2019/05/12/30单元/index.html","d15634dc88557b71b1640eef0b0ebaeb"],["/2019/06/03/jni/index.html","c7bb1dc02c85792a142143733b040c2b"],["/2019/06/07/JNA/index.html","c85d8a2b69abd88f76ef0bce624f43ba"],["/2022/08/07/R配置jupyter/index.html","57494ff89624fce6126c2479496b0213"],["/2022/08/18/FFmpeg常用命令/index.html","4536a8d00bd712c69239296e18a7b4b3"],["/2022/08/18/linux系统代理/index.html","0cf68ebb69704e0464fd78eb72f6d605"],["/2022/08/18/matplotlib补充/index.html","015c048461ab33f4f2f6904025df3224"],["/2022/08/18/常用命令/index.html","7c87490d3e9f49ebc5211d4ad2221139"],["/2022/08/20/sacred/index.html","00370a83d7024750e7e0a1815236969e"],["/2022/08/20/wsl/index.html","d11aad8f55edf1b3ee57c5671b564e08"],["/2022/08/20/双系统安装/index.html","96943bc6962afc8c415f5b89657ba249"],["/2023/06/28/source/index.html","852302e054453e5e1d87d78eb7111a63"],["/archives/2018/12/index.html","8ebb1b5971c024e54a2a955aa2e95362"],["/archives/2018/index.html","69ff5bcf3c461fc2e81bfae2004349e2"],["/archives/2019/01/index.html","a9681088083c2104097d1085f1827d7c"],["/archives/2019/01/page/2/index.html","65dc722aad55be3c4a00cfde7369b31f"],["/archives/2019/01/page/3/index.html","b94acb1e7fb5fabaff9319a783e4c05f"],["/archives/2019/01/page/4/index.html","5a9d5f0677f7ac32edc0952cd88b6fcb"],["/archives/2019/01/page/5/index.html","3fec174c384f5c01cacc786b7243bbd2"],["/archives/2019/01/page/6/index.html","e7746d8e09b1812c6ee6980af9b97521"],["/archives/2019/01/page/7/index.html","121ae97ca0be023e8216995643b2abb2"],["/archives/2019/01/page/8/index.html","231c7886281782c6037840475562ed1d"],["/archives/2019/01/page/9/index.html","fc95c9850e15e03c1c4f625bc6d14de8"],["/archives/2019/02/index.html","507cabd2045eb08dda3f50d570b85afe"],["/archives/2019/03/index.html","c05c404d222c82e6e1473629b14a2b06"],["/archives/2019/04/index.html","52934aca768e2b376131368a49520f62"],["/archives/2019/05/index.html","81262402f79894ad2d7b93babaa1567d"],["/archives/2019/06/index.html","da93b9eff4de4337d9aee8d965860e8a"],["/archives/2019/index.html","7f0e92b9103ce37b2e4075e4ab4d7863"],["/archives/2019/page/10/index.html","88e1083e756a6a8a32ceadd7a0dbd50c"],["/archives/2019/page/2/index.html","19cc72ecb78ac93a1ca1852ad2bbbfbf"],["/archives/2019/page/3/index.html","9dded70559a34ab7a04319a9f6da13e5"],["/archives/2019/page/4/index.html","036561a886382533c3c0fde74076c043"],["/archives/2019/page/5/index.html","455d5986eeacccea8ae67d03cc4a865a"],["/archives/2019/page/6/index.html","4337e8a9368d150c054b6d84e24f9aa5"],["/archives/2019/page/7/index.html","3d98c2dc4f22c8449a67b7273cfccc54"],["/archives/2019/page/8/index.html","56d32ac3aad0dc80ffa42318f30e3969"],["/archives/2019/page/9/index.html","3771616cc008c36a6c6240fd88f94181"],["/archives/2022/08/index.html","47d517093a6cd23c390775147d86565e"],["/archives/2022/index.html","21c5b6eaeb18924aadcafd250d61b2c6"],["/archives/2023/06/index.html","2f2d7684fd3b75f1993ead4d4afb545f"],["/archives/2023/index.html","25c601527a30f93f4112b6c2838bc9c0"],["/archives/index.html","7b6ebff3b2c06c9805f153ff9c2f22a9"],["/archives/page/10/index.html","84e6e442da74e7d21b5e10cfba45e81a"],["/archives/page/11/index.html","b2f0fe21fc05d0d4c74bd84257a0b7e9"],["/archives/page/2/index.html","4b353f7734c8dba6afff66e0f8d76707"],["/archives/page/3/index.html","6bcc316d3f7ef765be092edc34a91b09"],["/archives/page/4/index.html","86653d298425def9c550789bdb646f03"],["/archives/page/5/index.html","381ec332792e08dc90aa1e919bf1977f"],["/archives/page/6/index.html","c3a3747fe1a1be5741bba6433857039e"],["/archives/page/7/index.html","a783af4282e3c0db8289a2bea4bb1b22"],["/archives/page/8/index.html","b499bbcdab8af59fce41e0e233abad5f"],["/archives/page/9/index.html","ab915b05cd80916a974705382067cb1d"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","cd89b32e24ccd1c7fd1aae2cd322cacb"],["/categories/dxz/index.html","63530e02265e940d94c73ea2846e5d18"],["/categories/index.html","9cc2e0de6576e68d5109478ef29ad78b"],["/categories/linux/index.html","132d2dafd3edbb0296fc4c7579ec7e7a"],["/categories/python/index.html","e609c3113eac3bd7c0bec96f43374ac2"],["/categories/tensorflow/index.html","88b052eafcb85a5111627070052c37e8"],["/categories/图片分类/index.html","7a98613ec764c3e9671d571b017fd78a"],["/categories/工具/index.html","e4122fead66f026910c538db288da781"],["/categories/工具/page/2/index.html","49fd6ea9fa522296bdfbdfc4107f53cb"],["/categories/强化学习/index.html","90aeb1d98a7e39a73482c4b36e2c0fa9"],["/categories/数据集/index.html","2a91568e9b343dbdd3550209dc99db42"],["/categories/日语/index.html","348ca79577f70c4be17a6a342f599785"],["/categories/日语/page/2/index.html","35b40a6472447712a0a639e50dd13515"],["/categories/机器学习/index.html","867c9704e75b4777f30bd5203d96b383"],["/categories/深度学习/index.html","13ac98d8be111324c0382304d401d61d"],["/categories/深度学习/page/2/index.html","ea8aa9ea81551f7e8764ee7764d03df9"],["/categories/深度学习环境配置/index.html","723088c5e72b97fed8619ad18f2ecf82"],["/categories/深度学习移植/index.html","3ff3d2d28d00daaadf9f44d6526f0d26"],["/categories/计算机视觉/index.html","fb28898931c6eda8d7ba2a6fd77e577a"],["/categories/读书笔记/index.html","7533697b65cff7a24d4ab8bc1c8a04e0"],["/css/main.css","3492f648d9fa131dac53dfb8ef919645"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","12a98719c4308f26d092272bc60774bf"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","31de1e1c45b6411102ca13aa97ee25d9"],["/page/11/index.html","21a223b9af74edff174c4c748a72be1b"],["/page/2/index.html","85b4d0c53fb9527cba3041899e07a35e"],["/page/3/index.html","605ade57b9afbe51266189030cfd6062"],["/page/4/index.html","49de39b73a6d29a1b786a4d1fbfe44d1"],["/page/5/index.html","f70d7c8ff51639c81d25a912f4c4398f"],["/page/6/index.html","dc6080a393754d25d6c870e01b833f2b"],["/page/7/index.html","f8d1130fcfd336546a77c099136dd800"],["/page/8/index.html","3a13424262782b74c1df391fe76e7989"],["/page/9/index.html","ead8c0035a57cf54b13f84180aea2bdf"],["/sw-register.js","143bda15431693de0a4c12a91283faaf"],["/tags/AlexNet/index.html","e84fb4dc40ad7342438f1c62885fcd3b"],["/tags/CNN/index.html","90fa3f0218227c890fd887b2a0f8d807"],["/tags/DCGAN/index.html","9e09a6a27256b41367b03d77ee4da28d"],["/tags/DDPG/index.html","d00a5524a6ea8de17598b14e55f41674"],["/tags/DDQN/index.html","dba530ca022295f2f5cff75af3d285de"],["/tags/DQN/index.html","96a57dd6841d06bbdc6132dc669af4a0"],["/tags/GAN/index.html","c48a5abb67758551f648d40ac8e9df80"],["/tags/IRL/index.html","4b50a6ca8a3cdff890557d1ce585e56c"],["/tags/LSTM/index.html","1a8a34281283564632191e0dd18f7a3b"],["/tags/LeNet/index.html","e6f1881be43c226b5ce97aaeff76f9a6"],["/tags/MC/index.html","f2972426aff514ed0978aa07c5492f7f"],["/tags/PCA/index.html","95dc683d4d9ea250c0417fe196438bc4"],["/tags/PG/index.html","2cb138bf8ccb23186efc1e7251a960f7"],["/tags/PG3/index.html","4ed563a96c09f8576753c818d184aad1"],["/tags/PIL/index.html","a0a7f864d642dfcb3e8e82559c3cc7bd"],["/tags/R/index.html","cc1cd62710a1dfccbff4c6b8b4d1b97c"],["/tags/RNN/index.html","39fbb9ce083dafec507ebd7b68503512"],["/tags/SVC/index.html","d076b5169e144386c86aa0c324705772"],["/tags/SVD/index.html","a83eae0034eededdd974cfbdfca5c268"],["/tags/SVM/index.html","020f1daf69e3df68693b87455f23676a"],["/tags/TCP/index.html","504d3fbb72e3078faaecef0d255898ea"],["/tags/TD/index.html","60b83ff193f760b66a07aa9c25884e35"],["/tags/TD3/index.html","9ad7a9d8bb494a83b70e56f809b6cec9"],["/tags/VGG/index.html","aa057fde55b24aaa93ce80ebaf1863e8"],["/tags/amd配置/index.html","b8001fbd7caa6080674ee30ba2f59b06"],["/tags/anconda/index.html","ebdd3152e07472ee062d723e3f4f2753"],["/tags/conda常用命令/index.html","c331238d839f2bc31ad6e58657df7f0c"],["/tags/cuda配置/index.html","1530c38bac844f44a037b0fbce547102"],["/tags/docker-ldap-mysql-arm64/index.html","198605f3e5b4d042b7341c6c131fb6bd"],["/tags/docker-ldap-mysql/index.html","82364196a1281cc6585ee0ce633a8e89"],["/tags/docker代理/index.html","29351acd22076ef3f187f4e519f83cec"],["/tags/docker安装/index.html","4c94bb3d6900146a244723fdc4f4ef09"],["/tags/docker容器挂载硬盘/index.html","3a61eb714034f3f856a24fc5f8ce1a26"],["/tags/ffmpeg/index.html","1dc499c7db4962703946be167f03878b"],["/tags/github上传代码/index.html","313a1255bc1bab1a75f477014653b747"],["/tags/hexo/index.html","f2824e4d253f26ffc5c7534a7b7c8062"],["/tags/index.html","1714dda17d4b319f19484da8cd58860a"],["/tags/java调用C/index.html","a9f25673b9897d4a179df9fb2d8e9917"],["/tags/kaldi/index.html","2ceb30362b33d98f19568e97d4f2d843"],["/tags/linux命令/index.html","9850c954a2b9f0450635e690219c9b9f"],["/tags/markdown/index.html","225c4fd1509ad87ddbc88bccc320edaf"],["/tags/matplotlib/index.html","e2d754fabcfacce0ed64611b1f12e251"],["/tags/numpy/index.html","6864cb8b0f3585fe20dde45748bbe286"],["/tags/onnx2tflite/index.html","608565bb6e21ce406757df344abeb1d7"],["/tags/opencv/index.html","f82b94599cd0946f36dfc8bf1ee2ab3d"],["/tags/pandas/index.html","07bffa20100436c9b37c9b8e0764f353"],["/tags/qq/index.html","3732cf83af395e25bb2e0d4584efd008"],["/tags/requests库/index.html","1e94df10ec4d44a6946f89af636ef11f"],["/tags/sacred/index.html","cab3c5092567a6c15bb25a2b9a087e83"],["/tags/ssh-远程连接docker/index.html","5ce2389aeaea7eff3c9c0b09fe3614ae"],["/tags/torch和apex安装/index.html","db545d2d89bfe12b0f24a1819899bd97"],["/tags/wsl/index.html","e00d2c32ca83a241e69377c479d3d2d1"],["/tags/zsh/index.html","976217c4bfb6b163394808e0de16ef5e"],["/tags/代理/index.html","9536bcbd7bf3303de20d3193f1a36e10"],["/tags/决策树/index.html","6676bcfde70cbeb00a57c7e6d02bfedb"],["/tags/函数/index.html","7f6554f0cbab574a49d01a8ab22212aa"],["/tags/列表推导式/index.html","44003055ade41ba77e9260383a4b6950"],["/tags/助词/index.html","8fea6c4d74fa4951014738638926d673"],["/tags/包/index.html","30554c5657e534583068eeea2a5996aa"],["/tags/卷积神经网络/index.html","1268864b8893f3b1a37a6d0ec2ff71a1"],["/tags/双系统安装/index.html","586fc995dd9b95481741f369b81f7f8c"],["/tags/反向传播/index.html","d673475b233a8f1fbccf1cfb5bd78840"],["/tags/句型/index.html","6097837addbc92ffd0f715ce09367a13"],["/tags/可视化/index.html","3da198c1cac494061664e1559c430679"],["/tags/哲学/index.html","9edfbd541d433067db85b0447b79e8f6"],["/tags/图像美化/index.html","41b35e36284146d28046f554c513062b"],["/tags/图床/index.html","d58554fd4b09101bb5a637d9992f380c"],["/tags/多继承/index.html","162282cb22b71572e4a3d0ecfd16b9d6"],["/tags/工具/index.html","bb0409bf74e738f945cb41eec885327d"],["/tags/异常/index.html","89cd3f79d14d82ef302c0d154991a251"],["/tags/强化学习/index.html","7018165314ea43fff49f3bcd51b4d93c"],["/tags/心理学/index.html","138dbcf88eb61289ed37c33f8ace7861"],["/tags/感知器/index.html","ad410ccd6827e0099cd30d933faf56b3"],["/tags/换源/index.html","bc15ae968c974230c8b2ee7e223a58cc"],["/tags/描述器/index.html","111fed5efd0757f235c325e0b87ba63f"],["/tags/敬语/index.html","9e61b46e4e18f26ea4553a89aae7c0f7"],["/tags/数据集/index.html","81469ae4fde6e7c8351b99e014a07c9e"],["/tags/文件/index.html","69ba4721bb99b6746d123bed27b3da36"],["/tags/服务器配置LDAP/index.html","c5d8853e5fb6bd9cf93e99dd839387a2"],["/tags/机器学习/index.html","de59dbfb48796a71969bff535df2e249"],["/tags/梯度下降/index.html","c54f451f2f9c2184a42a0fb0ce24a0b8"],["/tags/模块/index.html","aad9e494b7f9478539c7843d51873757"],["/tags/正则/index.html","88a9737b3d8d2f20e07cc1097dc94e43"],["/tags/激活函数/index.html","e30a265daff54db2fb1c4d3c62408d51"],["/tags/点击预估/index.html","cffac42390ec2fda27ecbca03fd0939e"],["/tags/爬虫/index.html","1ea3e6c0c7e5f4595dc001114b4578b5"],["/tags/生成器/index.html","6fdc38cb236ab077de3765fcb6e7decf"],["/tags/类/index.html","e4e4671edcb5c387b9ecce480d6e5ac8"],["/tags/线性回归/index.html","78528bade26745887c4e49ea37cf7c33"],["/tags/经济学/index.html","58c343e024b8b084827858f283c7a26d"],["/tags/聚类/index.html","d09061fd1493ce05ff0621dfbbc9062a"],["/tags/装饰器/index.html","09f6beca50b7af5977d36d44e44b2d9e"],["/tags/词型变换/index.html","58858a3b3fff8a1089fb365afbf1a5f0"],["/tags/语义分割/index.html","2bf8f407f22a66092542efdf85fc0756"],["/tags/语法/index.html","f7cf8a3bcc43baf636f7d1928ed822cc"],["/tags/语法/page/2/index.html","fedf95f957b21fb7ee891237b7080a22"],["/tags/迭代器/index.html","67fdc964745ee5d52baa2059de9e8ee6"],["/tags/逻辑回归/index.html","46055f39b5e44b5e1eaed4ae772fab56"],["/tags/随机森林/index.html","3149d8970053cb2e4d9ff22dc973a597"],["/tags/魔方方法/index.html","844dd7f9a290ecf8041ca228784955c5"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
