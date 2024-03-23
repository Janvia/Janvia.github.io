/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","a2d24b5114a8ffa96984c76c245e15ef"],["/2019/01/02/Anconda常用命令总结/index.html","f46b2076a03fdaff3398130b2f9def69"],["/2019/01/02/句型/index.html","c7ffad77efbb9511a51546accead97a5"],["/2019/01/02/日语助词/index.html","90a35a886b3a3f9c762554ac607cbcd1"],["/2019/01/03/on-my-zsh/index.html","19dfd17ee3b06e2ebeba0919d871b698"],["/2019/01/04/《当我遇见一个人》摘录/index.html","563036be8bb2e83551bfc4910b0b6497"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","a052a24336a870411f9d89d68c68ffc2"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","303e4326a0db793f3ae95a559676f2a5"],["/2019/01/04/经济学笔记/index.html","9d1d11a9fb711da329a0331f80a088a4"],["/2019/01/04/语法总结（5-15）/index.html","2c66e707fe9542a7ecd1441c87d602b0"],["/2019/01/05/linux常用命令/index.html","fb5ef93f50a166b2da1a4546d6b52a0a"],["/2019/01/06/敬语/index.html","1878508c9b2eac57ee3b99809e0e3e5d"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","fa3349b853c72ca2888b406549ce35b4"],["/2019/01/07/cuda 手动配置/index.html","327fdf752010c813d3e049e5b59f1a6f"],["/2019/01/07/docker-ldap-mysql/index.html","cbc52e33b406a34f50af3be9e9366cd7"],["/2019/01/07/docker代理/index.html","b4cac7d8c7ed52dbe8ecaae29c1fa491"],["/2019/01/07/docker安装/index.html","ec4e0da1e9d7dc7f8475eefc02a18d2b"],["/2019/01/07/docker容器挂载硬盘/index.html","44bbb10385460f9492660e5ddff75960"],["/2019/01/07/github上传代码/index.html","b8c04d8d3ae1aa035ae770accb56c9c1"],["/2019/01/07/kaldi 安装/index.html","cbfea75c5b523ee9ea1efe7ed4110932"],["/2019/01/07/linux常用工具/index.html","6331d521fe5bfc9bbb864bf69f9bc836"],["/2019/01/07/opencv/index.html","b4a9309cbea65cc4236e9f15a2116dd2"],["/2019/01/07/ssh 远程连接docker/index.html","957d54b3a069174085e8cba601d3a865"],["/2019/01/07/导出/index.html","a3fcec4e3c416048f61c692c7d2b89a2"],["/2019/01/07/换源/index.html","cff6c9bc167e77641bfbea01594841f1"],["/2019/01/09/markdown/index.html","b1a6aac54c0df0661cee7eb639221537"],["/2019/01/09/opencv图像美化/index.html","4b68306b8818391291cef148cb2dd514"],["/2019/01/11/19单元语法/index.html","2199fc568592185381df2363d5118270"],["/2019/01/11/20单元语法/index.html","3085181630b821d041df4a571c1c2654"],["/2019/01/11/opencv-图片几何变换/index.html","f3709d58f0fda7a1835d9ff8cdb75307"],["/2019/01/11/opencv-图片处理及绘图/index.html","8af75d2cd4e1dac7a8416e8166024c1c"],["/2019/01/11/wine安装qq/index.html","0737e8616ca1fc5434e39d4fdd38ec6c"],["/2019/01/12/tensorflow-可视化/index.html","08b2f9d613d0ae8bc93219a17a67a2dd"],["/2019/01/12/tensorflow-基础语法/index.html","75b0e0ac026eab435fcb481ce102de69"],["/2019/01/13/RNN/index.html","7300d94a60c978978d09fde9703d92f2"],["/2019/01/13/keras实现CNN/index.html","ea7284709c8f75d2ef4c362e45dff94b"],["/2019/01/13/卷积神经网络实现/index.html","e555d997e2f08b0b0d1dbdda6dc475ec"],["/2019/01/13/循环神经网络RNN-写诗/index.html","f1caa6bd04dacf628bac705fe20cdebc"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","891b3d3955c052cfa40b0e79ca0aa838"],["/2019/01/14/反向传播/index.html","f440714b65f494dc52b0ada88b7f1e98"],["/2019/01/14/图床/index.html","5b5e96a00949252485c80a466222dfe4"],["/2019/01/14/感知器与激活函数/index.html","96bf51e138bb357b56b9b34e0c53dbec"],["/2019/01/15/PIL简单应用/index.html","417fdd539a161c2d735d1f5417f3e394"],["/2019/01/15/卷积神经网络理论/index.html","09d357ca7468129417559427993f1d4b"],["/2019/01/15/图片分类之pca-svc/index.html","a297a45b821cdbcfcbd380ccab9ed0b9"],["/2019/01/15/强化学习基础/index.html","69bf36bcb4868619bec0cc9ef08141be"],["/2019/01/15/经典神经网络/index.html","e282eb5ea01f7558f0a95e9fbcc11eba"],["/2019/01/16/DQN/index.html","bc3173831dc28d9b6d07956931d634bb"],["/2019/01/16/TCP传输图片/index.html","59ade1cbf8e878379fb02afe186526fb"],["/2019/01/16/时序差分学习/index.html","feaae22febe8f0ca4bf4475331d9b8d7"],["/2019/01/16/蒙特卡洛方法/index.html","0c3b5929f8b4dbb530402374a72fba09"],["/2019/01/17/Double-QDN/index.html","6a31f997c59b6ca851939121699d5633"],["/2019/01/17/RNN理论/index.html","b25e57d9f822ec36bd292cce4057648c"],["/2019/01/17/梯度下降/index.html","ea819df75dff6a7a70f6fda6dacd4784"],["/2019/01/18/PG和TD3/index.html","d7f44de9872a8ee49dce6009c3d8db42"],["/2019/01/20/21单元语法/index.html","eb7997f92cea66e683a44d4f0d1750b9"],["/2019/01/20/GAN理论/index.html","97a3a3c6eba56dd766843c55b2ef225e"],["/2019/01/20/PG3和IRL/index.html","1b856193755fd14a538dc8790ecff5d4"],["/2019/01/20/数据集/index.html","897d7dcbb7442684123487186e5d8087"],["/2019/01/21/DCGAN/index.html","bffcd9c8a2cac3571b28c5a0e899620c"],["/2019/01/21/LSTM/index.html","cf24f40ea8ec2f88359b334293a8fcaf"],["/2019/01/21/点击预估/index.html","8887d1dbd705280829e56a5477c1834a"],["/2019/01/22/SVD分解/index.html","fd75b5c78e24309b28e9b47ba52f305f"],["/2019/01/22/SVM/index.html","2dc11cc35c0ea0a44b159c63bc88cefe"],["/2019/01/22/机器学习简介/index.html","d77c22d32a9850b6bfef32e525ae20d7"],["/2019/01/22/线性回归/index.html","0fb1910fe022a036c1b903a60023d137"],["/2019/01/22/逻辑回归/index.html","be7a1e74b236638c687b1af8e8979c1e"],["/2019/01/23/numpy/index.html","cd3534180bf8c2f868b3b2c556383d4d"],["/2019/01/23/决策树与随机森林/index.html","13ca7fcbefb04834a46db9a4ac0b96fd"],["/2019/01/23/聚类/index.html","855b26e71d15273b1bcada63cd3020f1"],["/2019/01/24/matplotlib/index.html","6ead23fa15c76e5c00d4bc847fde6ebb"],["/2019/01/25/pandas/index.html","4781512fb35f2f69b92f708d8c68c37e"],["/2019/01/25/语义分割/index.html","ac9c374467be123bbecb3a380fb5ca96"],["/2019/01/27/22单元语法/index.html","501ae7e217fc65b98e960106f737a325"],["/2019/01/27/SVM案例/index.html","31e8aaea4d0b0f558211fd1620a69ee8"],["/2019/01/28/requests库及爬虫案例/index.html","2d5fa4be62431dad762175347d0d61c1"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","de432e7dfb1e2ba45324e9133ae5fa3d"],["/2019/01/28/异常/index.html","df019a9fb84c96384fdd35e2d6544b47"],["/2019/01/28/描述器和装饰器/index.html","99a079cfc54db11bfb095528ff15f673"],["/2019/01/28/文件/index.html","bfd08c1c123315bc59421901972352c1"],["/2019/01/28/正则/index.html","6d9d42a98a47ec9952f80d0b279e303b"],["/2019/01/29/函数基础和函数参数/index.html","6d9d3a2ae8251e37285ee0b4df600273"],["/2019/01/29/多继承和魔方方法/index.html","2816a0c9e1b759dd91d0174d70e06e54"],["/2019/01/29/类定义、属性和继承/index.html","e8e3f5407fea65acf9e5e132101b8e8a"],["/2019/02/27/23单元/index.html","489b85392c58417c1d8a03e3cf1ddb88"],["/2019/03/12/hexo加速/index.html","5b0870ee05827f5cbcdb217d9cd81049"],["/2019/03/12/hexo系统重装恢复/index.html","4c93183b55887ab4444f476d02e0b42f"],["/2019/03/13/24单元/index.html","023246a32f05c660f90448c0db20e106"],["/2019/03/19/25单元/index.html","571f884ed22240d4d5ef140a93f70bb7"],["/2019/03/26/26单元/index.html","b526e7e79003369158d645660e25b7f2"],["/2019/04/14/27单元/index.html","aa34ad24d7eb2f9d96ba143ef154644c"],["/2019/05/01/28单元/index.html","e8ab4b729731985fff34d09de28ce161"],["/2019/05/02/29单元/index.html","3d0543a0e5ff6a654c429b9b8a6b19fe"],["/2019/05/12/30单元/index.html","bdd781a57907aa4ae6b7a8d3da2ce604"],["/2019/06/03/jni/index.html","98ee66c13497f2a249021a031e83e0d6"],["/2019/06/07/JNA/index.html","4b9daa89107fd1c20bef073e6f921e98"],["/2022/08/07/R配置jupyter/index.html","fc5cd4ffbbabd780965a04aa401e0cb3"],["/2022/08/18/FFmpeg常用命令/index.html","6d6778a452dea3aeba983d78478d56da"],["/2022/08/18/linux系统代理/index.html","cde78f3572e3f18ad7bb640eed30bada"],["/2022/08/18/matplotlib补充/index.html","b847eafa843b41ce2a5b1205bf25e797"],["/2022/08/18/常用命令/index.html","74c297c907c9d0ced9095f61d26ed8e2"],["/2022/08/20/sacred/index.html","882a9cf09caa54bc5771f775e8b6d2f9"],["/2022/08/20/wsl/index.html","889fe5337d4c6eb8336d559e40b7bcac"],["/2022/08/20/双系统安装/index.html","1254cc70c91f85917f0e73db87d10f81"],["/2023/06/28/source/index.html","17512003eec70ce36970acf16fd8b005"],["/archives/2018/12/index.html","4e30906836d9a2104782b2574bf06db1"],["/archives/2018/index.html","df09656c86c9c4b13d3f7f5c7b0e9c27"],["/archives/2019/01/index.html","a449d8b82e103573e7968ac72b5b0c0f"],["/archives/2019/01/page/2/index.html","b78ad9c54a71ad7709324b90de4be6b0"],["/archives/2019/01/page/3/index.html","5047a768a295cc331583037f3fa62eca"],["/archives/2019/01/page/4/index.html","bc5bcea8cc860fed0befd6866ed91917"],["/archives/2019/01/page/5/index.html","b326fa2edb69551892ced314209af3ec"],["/archives/2019/01/page/6/index.html","7aa7271a40f096cd76c2af42d38fb2c8"],["/archives/2019/01/page/7/index.html","5169db6273311fe0b3dd277151b33cf6"],["/archives/2019/01/page/8/index.html","c369541db3e3330c73baf19265b03e0f"],["/archives/2019/01/page/9/index.html","d0b98880bd68dc108e9d9aad2c9caf24"],["/archives/2019/02/index.html","78e655be114918ee7a41454b963fecfd"],["/archives/2019/03/index.html","a30f305634d085ddf0b0e212fedea1c2"],["/archives/2019/04/index.html","28a6bfa2e509fff39f5e74cece5798b5"],["/archives/2019/05/index.html","713d7993b2d35d6271c825d1e2e3e33c"],["/archives/2019/06/index.html","65ae0875e7c26420a3f51c6ccddddb3e"],["/archives/2019/index.html","fd30c61cedee696fa2e9a6eda9bda285"],["/archives/2019/page/10/index.html","17995db7278b1c16130dec171f179d72"],["/archives/2019/page/2/index.html","aef594f9d53c9942d4053a80250a796f"],["/archives/2019/page/3/index.html","61110c4abcf95f214fa047845b312175"],["/archives/2019/page/4/index.html","493ce0610c1e0dcdbe507ab2f7bf6058"],["/archives/2019/page/5/index.html","4e6a22612d1886a50e8f51020a0701a7"],["/archives/2019/page/6/index.html","98649e458b1801edb9236a2652bf99c9"],["/archives/2019/page/7/index.html","f38ca1aefbdc2a73a57cc5e41faaedac"],["/archives/2019/page/8/index.html","338f5313b49c8b735d18a3690412de78"],["/archives/2019/page/9/index.html","7dd0843c2ae69c81d538312c5b1e36e3"],["/archives/2022/08/index.html","461b4ea750583998e411e09e3453fe8d"],["/archives/2022/index.html","1095ef3849afe799a4219b5981daee6c"],["/archives/2023/06/index.html","cbf337b5b356ac369fb9db2487d36b59"],["/archives/2023/index.html","c87b0ffd6e2e55a176da47f3dff615f2"],["/archives/index.html","139e0eda06ee6bdb5be37233d4d09a21"],["/archives/page/10/index.html","90c8539c375da0c90c619ddfd533744d"],["/archives/page/11/index.html","2118575ba4bbe7372b7a24e47556c900"],["/archives/page/2/index.html","1870693d59843282d697624305545c00"],["/archives/page/3/index.html","2d7eee6ee179be42c8670c79f63539f6"],["/archives/page/4/index.html","b0d867c1e9557bb725528cc7a0d137e2"],["/archives/page/5/index.html","c5b09e1622828096ae6f3f564dfff62f"],["/archives/page/6/index.html","cc0c7223ab7f542fd0ff796dc0dc0df1"],["/archives/page/7/index.html","45dcb90779b7fd3c4d83c0bdb0152687"],["/archives/page/8/index.html","cd9f664b60fb0784717d3c4cb87f735f"],["/archives/page/9/index.html","2087e5ac59a241724f766ecb991f0749"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","97b484fad9c29e21aafed377c5b10fe1"],["/categories/dxz/index.html","78637ba9bc65937447b61b44b864f28d"],["/categories/index.html","87c38b1457fdb8bba30bc82747faf85e"],["/categories/java调用C/index.html","d59eea3d3a9f8b753dafa457934f32a3"],["/categories/linux/index.html","d3d8c0f39e73c39472338ab5311d1cb6"],["/categories/linux/page/2/index.html","b192a41107e31f86ae720454966e8c5b"],["/categories/python/index.html","8aa816764ad9c40888cf33508805253a"],["/categories/tensorflow/index.html","ce6f19fcb058bc33cd87e1841696c3e1"],["/categories/优化算法/index.html","894dc97be12968324b50e7bac9a57243"],["/categories/图片分类/index.html","02012e70b5e0e872e373bab303c57936"],["/categories/工具/index.html","8a07c97fbb96536f183a089211f1e9bc"],["/categories/工具/page/2/index.html","c700d61fe8873d850cee458be161e500"],["/categories/强化学习/index.html","93140e22e94a008f4ee10d53c9cbfcfe"],["/categories/数据集/index.html","8254154baa5f144ca8d30d1cd8ba7739"],["/categories/日语/index.html","d99fa857668baed0beb8d559ac5ac8aa"],["/categories/日语/page/2/index.html","41a5a0f6273b3914c480cc4b1c093ebb"],["/categories/机器学习/index.html","91de45a8e6e0620082b249d71a36087d"],["/categories/深度学习/index.html","42a4aa446228de52294324b3e440a0ed"],["/categories/深度学习/page/2/index.html","057dafa1387bd408bed502b2f7ccffc6"],["/categories/计算机视觉/index.html","70469d328fb77ef6c0cb20b4e94ffbbe"],["/categories/读书笔记/index.html","a5defd75cd863cddf64988dc036b0824"],["/css/main.css","4090c7cf4f99976811fb1df7c1187412"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","d95fb88bdeeba360c29026c5c5a4f2d0"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","41c978a2cb480a481c30b7561122ec49"],["/page/11/index.html","a1a1be312c7fc28e61a7c3b78736487b"],["/page/2/index.html","e72b0a2763776a4bc7805ed785d90684"],["/page/3/index.html","0e94711ce2b22ac5891f25b00df4d7a0"],["/page/4/index.html","a689b7b9d5f8f78904d4d33ee8a33a90"],["/page/5/index.html","bd3d75d53a3b13ee7bb3e17d56e26d76"],["/page/6/index.html","80e218643c722e8ec7f4f388575ab697"],["/page/7/index.html","7552766354eb16b8ecaa0bfdff7328a3"],["/page/8/index.html","edba6f8c3c835a7133fe4d08f1a5ef14"],["/page/9/index.html","7d1232ca6bfbe6f582a9fdfa384c165c"],["/sw-register.js","dea6439f2467013cc47f018d7cb9843b"],["/tags/AlexNet/index.html","7c78572bd31a77c703358fc643f9e7fa"],["/tags/CNN/index.html","66242d540dc419aff0aae7cbb57daf00"],["/tags/DCGAN/index.html","46e3b0e45034b683f136e29a40324fa3"],["/tags/DDPG/index.html","fd9e193d5332345c577dd79c861be7a0"],["/tags/DDQN/index.html","1d190ecbb8005ee311adeef93a7d5316"],["/tags/DQN/index.html","d04f8f1bbbe0734e2ed985e3f507c2e4"],["/tags/GAN/index.html","97604b6ae62af7cafe8a4157f10714bf"],["/tags/IRL/index.html","55cf945bc722608d764ed273bb542e5e"],["/tags/LSTM/index.html","59343a9f601d046f141e9b2f4a521275"],["/tags/LeNet/index.html","3d60808b6588ac7c4e229086724b272e"],["/tags/MC/index.html","f29f27b953d7c85c9bed13057a970647"],["/tags/PCA/index.html","e630f33f79b755c6d3e893c8d3195676"],["/tags/PG/index.html","479419a5f23f64c525f14470c3d5e0a5"],["/tags/PG3/index.html","b8bc025f45097d17a1234ed10d4c56e6"],["/tags/PIL/index.html","1c59e513de7ff856a360a97c2cc00263"],["/tags/R/index.html","6f1d4a634734747af50153306747e4ee"],["/tags/RNN/index.html","229af5b93d195ed71dc464540a4b779c"],["/tags/SVC/index.html","18090482478e47c1e8b5092c8dd69ccc"],["/tags/SVD/index.html","c86211d7f58fd12e2c5517045dcce0ee"],["/tags/SVM/index.html","3341afa1cea6277762eb70fa9b410bad"],["/tags/TCP/index.html","bec45492ca8272dee6ce7db27b955512"],["/tags/TD/index.html","eb78df1124137bbb55d639bf23e6f4c2"],["/tags/TD3/index.html","f28738a493ceff98c226541153c704e7"],["/tags/VGG/index.html","d7a5e3e5bc5ed0cb7c636dc723feb6e5"],["/tags/amd配置/index.html","39cfaa9e6f5560b4a2627bd8d2aa355b"],["/tags/anconda/index.html","59ee748320707d8e71b2799a19d4c439"],["/tags/conda常用命令/index.html","928d6d0ac6e4676f3febc9984f4b4c9d"],["/tags/cuda配置/index.html","203df1299a28c254e161d8c0756d348e"],["/tags/ffmpeg/index.html","839a3288b581c67e4208c2b3053ee07b"],["/tags/github上传代码/index.html","d2de3a9688fde2da68fe2621da6b397e"],["/tags/hexo/index.html","83259392ebed6dce1c41de7f4e095ee2"],["/tags/index.html","b6f0cf675afa965741a7f1c28887ea9b"],["/tags/java调用C/index.html","9ab6c7c3c04e23ebf35d1d8e65a56843"],["/tags/kaldi/index.html","270e0da6cbbb002ff929d0849707e361"],["/tags/linux命令/index.html","680742ec8dbc1f6ecea0e6f77ee6bc66"],["/tags/markdown/index.html","f7bec76f8bc36c3d0d57730371e80e2b"],["/tags/matplotlib/index.html","f8d3686e7182d26381ac905f937ed088"],["/tags/numpy/index.html","d106968ba3d2b31d722ff4e6ead6430a"],["/tags/opencv/index.html","052c308f6123c580acca0c7cc1b1d826"],["/tags/pandas/index.html","ffe74a4d2b427128dcf525c7191c2680"],["/tags/qq/index.html","912a07112595e088907a459295df4730"],["/tags/requests库/index.html","e26b1a3745ab4391093bcd6724d775dc"],["/tags/sacred/index.html","f86364e46c65bb81e00c20d4abeb25b3"],["/tags/ssh-远程连接docker/index.html","bb63070336f5155566c79945093bd218"],["/tags/wsl/index.html","34ea39cec6c521109eff0aa21c4603ed"],["/tags/zsh/index.html","7fe01973a913a47fd8cd32387d9b20ca"],["/tags/代理/index.html","0c4e14d0ddaaea9af21a2a986a3aaf8a"],["/tags/决策树/index.html","59df52cf61c73f098c1887d11e6f7031"],["/tags/函数/index.html","63c13e46cb66538bf4687619526f9452"],["/tags/列表推导式/index.html","11e6455b683787010161ed3d824923e0"],["/tags/助词/index.html","0a6c59fdd8d6e2f2c0cefeacbdab732a"],["/tags/包/index.html","2c776f5ceed3b2071f053b1c423b2d09"],["/tags/卷积神经网络/index.html","250551dec518122f36646b0ef60d0bf6"],["/tags/双系统安装/index.html","cee0c7ae8de7b284097321737b6702ab"],["/tags/反向传播/index.html","7b87ceb8b7cbff0e548991d6dc76506a"],["/tags/句型/index.html","e1c33d1ed6461cd67292d413a03a7478"],["/tags/可视化/index.html","a71073906908c972cc3fed4733305736"],["/tags/哲学/index.html","c15813274f35b32971e3941754a7a8d5"],["/tags/图像美化/index.html","16a00623bfb78046eb792fc83e55ef37"],["/tags/图床/index.html","30629478460be827a5c3e56b6efc9c1c"],["/tags/多继承/index.html","2a34aa210bc8baca220d5ca6b559f6fd"],["/tags/工具/index.html","a322a08a53a0cd319bd960345eac399b"],["/tags/异常/index.html","896a572b556b98f7e46d7cae48c4996a"],["/tags/强化学习/index.html","a35a6951cb9a49897052f5a7c2ebfa05"],["/tags/心理学/index.html","2fc6fa8b0f8c7cff4a3928a3b1b00432"],["/tags/感知器/index.html","e736164b35c16b34df887271129f2134"],["/tags/换源/index.html","9738dd6f9c943057a6afcee62abcab01"],["/tags/描述器/index.html","8c071c872a9641398329d28bab6a9c2d"],["/tags/敬语/index.html","5729b214df8db0e0d2921f63d9912857"],["/tags/数据集/index.html","2cdc51bfab853585fbe38538784b3575"],["/tags/文件/index.html","f16f3eb0226dacf33aefaecbbef56adf"],["/tags/机器学习/index.html","e0daf4b3c219345038b7cc2d441170a4"],["/tags/梯度下降/index.html","a1076472331b1e5ed1239898fc9b18f3"],["/tags/模块/index.html","fc922c5611f1b0e3546ef2ec88838161"],["/tags/正则/index.html","552719b78cb402eff38dc6c3cef9d90b"],["/tags/激活函数/index.html","af23f3e574300d45c09cb208615d122c"],["/tags/点击预估/index.html","b34e1a34ab481f7ee9caeda6c23ae66d"],["/tags/爬虫/index.html","39e37ab19b22a9daf01115696780d267"],["/tags/生成器/index.html","266d6f8a029561361566b6dc702bd580"],["/tags/类/index.html","bfd77ab68458784078d65b6c3eb17081"],["/tags/线性回归/index.html","c01afbf8092e0e97e7afe8ff544ab865"],["/tags/经济学/index.html","c2af7e08c2b9c09ebd45b49968b92915"],["/tags/聚类/index.html","c21af382e626def8a055d402f442b8f7"],["/tags/装饰器/index.html","39018708d58f4833b9b0bcf858fc980d"],["/tags/词型变换/index.html","0f7b8167d94c5f47e3f2d8b1b1174b7e"],["/tags/语义分割/index.html","97967b91ffc5c64092b9fefa3c409730"],["/tags/语法/index.html","2c0edea0863449964b1baa788543a5d6"],["/tags/语法/page/2/index.html","2d8d5b900d458b3c01df3d6a36be2874"],["/tags/迭代器/index.html","3484532824a0e708214e76e167643649"],["/tags/逻辑回归/index.html","4e1f3f85d50391a6a00864e58b348cf6"],["/tags/随机森林/index.html","b0abb3be8eafa569db6d38c534f552bd"],["/tags/魔方方法/index.html","f2218133ddc9a9e5846add41eef4076c"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
