/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","3cd0260135bd39694e651bdd0ee9253b"],["/2019/01/02/Anconda常用命令总结/index.html","d96abbe6020a27271aaef87610083741"],["/2019/01/02/句型/index.html","d95884f0138a0115b5015cba061729bd"],["/2019/01/02/日语助词/index.html","2a264f34ce93460a4af4d75d22a1e76a"],["/2019/01/03/on-my-zsh/index.html","385656811fae1c751012a32b5556e5f8"],["/2019/01/04/《当我遇见一个人》摘录/index.html","cae2ec77d9fd1b50df63c27cc952b43f"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","bce0ad7bea92792bd9e0a569a668c53d"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","87ac303cd3007c9cf78b043f8d8a87a7"],["/2019/01/04/经济学笔记/index.html","d07c2560b442eabef54d6ef397039d9f"],["/2019/01/04/语法总结（5-15）/index.html","0e56439146527fab240faa83bbecc674"],["/2019/01/05/linux常用命令/index.html","06a36b8d70c537b2872707d68861d02e"],["/2019/01/05/mamba/index.html","8128e992dcb6ab061fa81f344375c8e4"],["/2019/01/05/rust 多平台demo/index.html","3d8e31e325ab244e2b024240955a7246"],["/2019/01/05/tflite编译/index.html","dec4a3b127ec6c215d7444f0d5292e4b"],["/2019/01/05/tflite转换/index.html","8addac5a09cf11e01fd194f22eb9ff5f"],["/2019/01/05/torch安装/index.html","1c0e5f8dbb80f9234dc9dc142be45c76"],["/2019/01/05/vscode/index.html","78f6b0ac5a31d58bf614326a68b36c37"],["/2019/01/06/敬语/index.html","bdd7684ef8f4481fb34a57fd0b76f842"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","f8bf3bbb8f4daf6006eec1d7222f00da"],["/2019/01/07/RNASeq数据下载处理全流程/index.html","cccd4cd2707ac33720db55156e88e3a1"],["/2019/01/07/cuda 手动配置/index.html","eccacbd71129063fe82ac55c9cd73b15"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","6499bb6a5394e20a53957d2426cc99e8"],["/2019/01/07/docker-ldap-mysql/index.html","25dac5ff8abf4a6fbeb432a617299be1"],["/2019/01/07/docker代理/index.html","c7dacb1eb589ab9487bae02fa3246396"],["/2019/01/07/docker安装/index.html","308a55ba8bd93514d52471219c2cc9ab"],["/2019/01/07/docker容器挂载硬盘/index.html","2bf30f8a9ed4374fe921d27f03ffefd4"],["/2019/01/07/github上传代码/index.html","8cccb56e6ae9f6bc1e8efd2fc98d00b2"],["/2019/01/07/kaldi 安装/index.html","5fae77fec78dc1a56b63b346db45ef7d"],["/2019/01/07/linux常用工具/index.html","cc4ef7ba9fafe08123b5916e2639524f"],["/2019/01/07/opencv/index.html","218ad32a76804803a399fc150dddcc04"],["/2019/01/07/ssh 远程连接docker/index.html","019c827c3b5618b67a1960cf50ee08e1"],["/2019/01/07/导出/index.html","b56440b6ba19840eadbf2da266088d42"],["/2019/01/07/换源/index.html","0a6b82259960fa14efdd7cc143ae1397"],["/2019/01/07/服务器配置LDAP/index.html","584d5cf7d9ea597e6feb5bf41f81dd99"],["/2019/01/09/markdown/index.html","30fda4746695f2ac3d103d990420d0e6"],["/2019/01/09/opencv图像美化/index.html","5adf55355de82ad63346534856bfc5ab"],["/2019/01/11/19单元语法/index.html","8dfce8f40322d0eca954e3869501520b"],["/2019/01/11/20单元语法/index.html","6b9503bbc685b6cf3e8e67adb9ddc066"],["/2019/01/11/opencv-图片几何变换/index.html","00a3c4b97df2f5b32c03157aacc14726"],["/2019/01/11/opencv-图片处理及绘图/index.html","668672d41f0f62874041f672dfbf1f71"],["/2019/01/11/wine安装qq/index.html","c7644b295cc7ce58d9344d560389b2a8"],["/2019/01/12/tensorflow-可视化/index.html","b2c4f32ace8546c790d05b17b1b2bcb6"],["/2019/01/12/tensorflow-基础语法/index.html","a157874f016f57872350c39c11e77f3b"],["/2019/01/13/RNN/index.html","129da432a6f6d152769005cfa49bb891"],["/2019/01/13/keras实现CNN/index.html","2c8092a12a241cba991e3da6141b1c62"],["/2019/01/13/卷积神经网络实现/index.html","e869392ce16b8b3c1f3fd9c08843c433"],["/2019/01/13/循环神经网络RNN-写诗/index.html","18fed907fc068aecb6b1be28150c3e0a"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","161e90baecda2336bbe919fa50219d8d"],["/2019/01/14/反向传播/index.html","4f29a3990b2d8a78068354c5e02971a0"],["/2019/01/14/图床/index.html","f5f5abd20ee650b9b3a8d9888f1266c3"],["/2019/01/14/感知器与激活函数/index.html","4999b4265dea4b96e90b94c0f3e9a1f2"],["/2019/01/15/PIL简单应用/index.html","42444c6a8d1c6a611dafd35f5d824664"],["/2019/01/15/卷积神经网络理论/index.html","6deef92d84d2980947eb3ac2f671c9f1"],["/2019/01/15/图片分类之pca-svc/index.html","7ad25cd3e703abbd935d72ccce3d44d4"],["/2019/01/15/强化学习基础/index.html","c770db6f272e6df4e143ae122edf7e72"],["/2019/01/15/经典神经网络/index.html","5ce7052936e3b547c46d58788a0c76f0"],["/2019/01/16/DQN/index.html","90a39caea0702e749a4ad10793d26a8a"],["/2019/01/16/TCP传输图片/index.html","ebfe7646424c656365867a8469bf67a0"],["/2019/01/16/时序差分学习/index.html","3f3bfc4be868f72f84c5c13d02a7da5f"],["/2019/01/16/蒙特卡洛方法/index.html","50d3a2de316f584bb6a662a6f6b4d9cc"],["/2019/01/17/Double-QDN/index.html","4bddd940f8b018be1bac899ca98acf15"],["/2019/01/17/RNN理论/index.html","2ea27e867000fde1d559300c095777aa"],["/2019/01/17/梯度下降/index.html","5c38703052dc9c3969e06fe16798fca1"],["/2019/01/18/PG和TD3/index.html","a156fe1b03a77dabf14b351852e807ca"],["/2019/01/20/21单元语法/index.html","b26b0f13ea82afbcd9abb1909388a8c5"],["/2019/01/20/GAN理论/index.html","d6a539d373f76022532f7a80a26eaf54"],["/2019/01/20/PG3和IRL/index.html","f6cd95230b698c5373aa3cdf45390301"],["/2019/01/20/数据集/index.html","dabe3b7f809492d6ba3d406edd840dfa"],["/2019/01/21/DCGAN/index.html","8b67c2b540fb810f8631e45aed9fb859"],["/2019/01/21/LSTM/index.html","8918f6e96775db3d4ef79e164e61218b"],["/2019/01/21/点击预估/index.html","c57d9dd1ef8c4eab58ce238c28985082"],["/2019/01/22/SVD分解/index.html","84f390a93c2717ba84bdc7ee088bf55b"],["/2019/01/22/SVM/index.html","f4a8647ced608c24964f8034787fc592"],["/2019/01/22/机器学习简介/index.html","39d43c52fdf76145776c045cc7f11e7f"],["/2019/01/22/线性回归/index.html","47a57ba0de0cb839a8043f1631a0f0d1"],["/2019/01/22/逻辑回归/index.html","276fda2cd04ccb0630f4d0e399b40f95"],["/2019/01/23/numpy/index.html","c6a671297109dfd91bf886245e4d7d70"],["/2019/01/23/决策树与随机森林/index.html","82af87fb727198602cd20fdb93bb7359"],["/2019/01/23/聚类/index.html","c2f0a7270322ab917b3c0db123099e95"],["/2019/01/24/matplotlib/index.html","8aad6d8d34a3545ae81bc486bf3a8ab8"],["/2019/01/25/pandas/index.html","7cd7d85cd26a578109aeb52e8d685f4c"],["/2019/01/25/语义分割/index.html","47262a780828c1e25ebe4b46ec8c294f"],["/2019/01/27/22单元语法/index.html","ab1fd01d24c8b53663d1e4a946a94709"],["/2019/01/27/SVM案例/index.html","024dae8a0c4786c7fe3b55d67433d00e"],["/2019/01/28/requests库及爬虫案例/index.html","7de47c49f0cd7b24bdfbd0dfcf26cde3"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","78419fc791f77b4116dc8b492bcff83a"],["/2019/01/28/异常/index.html","86794dbaa5f45e3bd07f76409c253a88"],["/2019/01/28/描述器和装饰器/index.html","2e82c0f710c60243fa2aa22966bc6f32"],["/2019/01/28/文件/index.html","fd016d36a365dae9313ce3678ebb350b"],["/2019/01/28/正则/index.html","e439b593a4d56a647c7d6f93195e0a67"],["/2019/01/29/函数基础和函数参数/index.html","8f0abc7996fc2f73c1e761ac75c5bcef"],["/2019/01/29/多继承和魔方方法/index.html","e30245eb65487d1faff8af9f4d0c1fdb"],["/2019/01/29/类定义、属性和继承/index.html","5cb757691cfd7693e9d0c0fd401d8db2"],["/2019/02/27/23单元/index.html","be9b1cf0760f9b9f3db6c03994204569"],["/2019/03/12/hexo加速/index.html","c49dcfd5ff7a69b65ffcd6d48439eeb2"],["/2019/03/12/hexo系统重装恢复/index.html","a4803177b3ca36016241432911322901"],["/2019/03/13/24单元/index.html","7d94af6a29eddbdd1adb906eb3af58e5"],["/2019/03/19/25单元/index.html","3357a1fa8e3cda96efabbfb18bd375ed"],["/2019/03/26/26单元/index.html","730f31ae1842f4ce70965d0a80f2c14d"],["/2019/04/14/27单元/index.html","69b1f3a33f6e88a4024977355687df0f"],["/2019/05/01/28单元/index.html","0f975174c17ca6ca5895f7ce6bf95946"],["/2019/05/02/29单元/index.html","a894011dc9c8758737912676dd794fa2"],["/2019/05/12/30单元/index.html","1b9a84ae07edf6e358f83cbe111c1c71"],["/2019/06/03/jni/index.html","c5f4adf9fd871205ea3c13b4516af8df"],["/2019/06/07/JNA/index.html","d7c2aec9ddea79f50686a70b4b1b1e8d"],["/2022/08/07/R配置jupyter/index.html","75f76ed7b25af2017a4c032b640b929a"],["/2022/08/18/FFmpeg常用命令/index.html","46edf8e6ced4479a073aaaebaaff3a45"],["/2022/08/18/linux系统代理/index.html","60e8d80ba42c598e49060ec61851f93f"],["/2022/08/18/matplotlib补充/index.html","2191d1098f1667827b159566c89af581"],["/2022/08/18/常用命令/index.html","d9d9ccbd31b761d2e2cb852031f65ade"],["/2022/08/20/sacred/index.html","66c43f8040cceee1c4e047d7098088d2"],["/2022/08/20/wsl/index.html","ef4883a34ddec033a9b16a61cb2ec960"],["/2022/08/20/双系统安装/index.html","2cd0b5cb68b4866cf5d2ab5fa17b91c9"],["/2023/06/28/source/index.html","cf1d54d27b26d9bd4df1fa8c4b6135a6"],["/archives/2018/12/index.html","c96522176dd728899479201e7e438f9e"],["/archives/2018/index.html","7d59474eb73b9debd52f6d1c4f97347a"],["/archives/2019/01/index.html","2f0eec26696fb31e80770b62bdbd59e7"],["/archives/2019/01/page/10/index.html","a25e6e6138a07a80142db81cfa2247d4"],["/archives/2019/01/page/2/index.html","8e25efdb60f62686a99ff56ea11e92cb"],["/archives/2019/01/page/3/index.html","2b7954c9f38f54f630663f6569ca8fa5"],["/archives/2019/01/page/4/index.html","dc35503e7fd495a7eb0f7ccf20e24e79"],["/archives/2019/01/page/5/index.html","86088b9efa2f56c5e0c586c3911932ae"],["/archives/2019/01/page/6/index.html","3bd3dc17c247f672aaf83ab7705e13ac"],["/archives/2019/01/page/7/index.html","816cdc418f163b1778cd9e0e8be9d848"],["/archives/2019/01/page/8/index.html","4efe80c08a082810c3d99e9c7978c693"],["/archives/2019/01/page/9/index.html","bc6995d12104c461b44a0acf4d20fa78"],["/archives/2019/02/index.html","5a3def05445c1380768aaaadc1c3780b"],["/archives/2019/03/index.html","85b53e08a476492268f59a6d6ba03a1c"],["/archives/2019/04/index.html","38345083c7b22bcfabe48af9105b4bd5"],["/archives/2019/05/index.html","95a152162d48a22bbfd17bd42a11f36e"],["/archives/2019/06/index.html","be732e732eb6680ef16b59ff65fd1823"],["/archives/2019/index.html","05d04351392af6da425bf8fa9c5d8ac0"],["/archives/2019/page/10/index.html","4ad0d4d6d6e26e67bc96c5f6d6b5054e"],["/archives/2019/page/11/index.html","b9ab229955d4fc9c71501b5af38c0dfa"],["/archives/2019/page/2/index.html","0a3648f8580a2252b77abdd14bf24701"],["/archives/2019/page/3/index.html","27b3347a2a491e5e812dc6d815156225"],["/archives/2019/page/4/index.html","39fb3e143ce903323294010311c53234"],["/archives/2019/page/5/index.html","1bb113a69ced5d91e9a47649abf05221"],["/archives/2019/page/6/index.html","6e8ca4c9bdc80f14e43b8a167f42a397"],["/archives/2019/page/7/index.html","ca2ce1ffb03486f1eda6618b7d571994"],["/archives/2019/page/8/index.html","354475365d5dee393bfd591a5fbe72a1"],["/archives/2019/page/9/index.html","ed92f8b3f7335b2a55a2699812abf58e"],["/archives/2022/08/index.html","4a9205ec64c46432447f26c3ca45d199"],["/archives/2022/index.html","32b899c63d8042dced3bcac1e462f2b1"],["/archives/2023/06/index.html","4495bcc47a8786fc083b9f5e5c7149d9"],["/archives/2023/index.html","0fec19612b3d764e4f89583ce8664172"],["/archives/index.html","9552853f39eb3d0866777bef7d56e96e"],["/archives/page/10/index.html","2663f8a40482c3954a513423950dfb98"],["/archives/page/11/index.html","f66660889b813b71d75ca787f44a4a4a"],["/archives/page/12/index.html","6abd97632f9602f6eb82eb718077b3c1"],["/archives/page/2/index.html","9c757fbbe478f6b8563cadd17a8e1c47"],["/archives/page/3/index.html","ce9a994c260aa3c92a70a25fe632d22b"],["/archives/page/4/index.html","bcf7fb4df74bd1ca793fa75328d1bcaf"],["/archives/page/5/index.html","a00142df0424a4a2929e386cb6b74877"],["/archives/page/6/index.html","9e39a9707a9336543ce405336e566ac4"],["/archives/page/7/index.html","08b228a9669bf81671a3c8c0be1ac41a"],["/archives/page/8/index.html","72bb3e9405bbb74017fc482088126a5c"],["/archives/page/9/index.html","554bfffb39741c17eb4355316208f3e1"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","ecc33a0d02e0571a0de8334ccb60060d"],["/categories/dxz/index.html","bccda585165914ded0eecb020dcc3310"],["/categories/index.html","e28c5b4929b1cbfb0f6759e38d81ce1e"],["/categories/linux/index.html","f954de6d44a5c017e929d965931defae"],["/categories/python/index.html","2a3ff6f2f32f3bfbbbeec2c2932cc4c7"],["/categories/tensorflow/index.html","196cf34716ebe6705bed338c200d55b1"],["/categories/图片分类/index.html","66cf88cbc7264b2ed8e7e6d0c1a4f2e0"],["/categories/工具/index.html","e8ad7b855bf8d5c2706e51b8c59b5351"],["/categories/工具/page/2/index.html","b944360e755982b03221246e5dd9ea05"],["/categories/强化学习/index.html","25746dd19586231b514944c253ab02dd"],["/categories/数据集/index.html","da039226a3f510c096719f7ed7970554"],["/categories/日语/index.html","e6ee10649a52ca92902ae711a5a9e5b0"],["/categories/日语/page/2/index.html","53cab3e4dbe781a01c4e2faaa4614ab8"],["/categories/机器学习/index.html","1d3257cc44cabe0c5a516bd765dee350"],["/categories/深度学习/index.html","2ffd030c02b9e63775e0daecbe2d41a8"],["/categories/深度学习/page/2/index.html","10310d4aa44bbb5df78548aa46accb81"],["/categories/深度学习环境配置/index.html","6cce057ff805f46de1085c9975ba2072"],["/categories/深度学习移植/index.html","e9406209fe6951eb256415f0f6b4cb60"],["/categories/计算机视觉/index.html","59b32ebb7d53c6a1d5fdc5f37b0c404d"],["/categories/读书笔记/index.html","8d1ca916aa7792b80d9fc61081f6601f"],["/css/main.css","86d82a4947bdbe4f58a614653fbfb3b6"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","e7712435f7f4c1d2b2fa4bf92da43acc"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","04eb284262552ba17912ca5cca38ced0"],["/page/11/index.html","6bcbd54b17fdad743fe3e533f643ca3e"],["/page/12/index.html","dcdaf3b000474c622812768bede4b6fe"],["/page/2/index.html","fbc5de62d4adcc3fff0fc1bfd4d59a1c"],["/page/3/index.html","b5a5978ce15d0d0fd88ee7d98abfdfe3"],["/page/4/index.html","fc0bab4cd970ad16c0bac28876792ef3"],["/page/5/index.html","9db08314d784e0c66d04dde691a4f42d"],["/page/6/index.html","649113fcb5f6b9b2d2f58cce2b901718"],["/page/7/index.html","f78f00a5518bf7a8c2f3beb997b60524"],["/page/8/index.html","dd128146f6040f9b145c875ed7287c93"],["/page/9/index.html","3cc85e0e8035708acfce4286acd88686"],["/sw-register.js","f4efe62a88688938f58fa718cccb4a8a"],["/tags/AlexNet/index.html","e0b2b11919722145002b6565cf80ff22"],["/tags/CNN/index.html","cb19099b127cc3e1cd3dbcff7d69b883"],["/tags/DCGAN/index.html","fdea301dd6a7a34cc29d129fea5a8414"],["/tags/DDPG/index.html","33a8faf14723268e4a48d1ea0befe292"],["/tags/DDQN/index.html","84778694cceae17c77b0589bb86fbfb4"],["/tags/DQN/index.html","1533559a1ffb72d2a82f1123cad7e367"],["/tags/GAN/index.html","070e1b2ba4a832bcdc14d77750fb288e"],["/tags/IRL/index.html","8ebf6334a7764d0df43c7a2c95d34cc6"],["/tags/LSTM/index.html","8911e01c074ea05abac48cfc79a5628f"],["/tags/LeNet/index.html","afe662d5470724a44b37a1cd9578c100"],["/tags/MC/index.html","5213b8ddb0e58b2eda66aee67470964e"],["/tags/PCA/index.html","9a3fc04b0ba3f5e48639444d65c8b6a7"],["/tags/PG/index.html","6957f4c8fd5ddcf63e395c55850dd337"],["/tags/PG3/index.html","6b51942f7561431f4387747968181e4b"],["/tags/PIL/index.html","c4cea9831ab9582b48d5016b5d9775d9"],["/tags/R/index.html","2ecacd3f2932bc7468b83235b792c4c9"],["/tags/RNASeq数据下载处理全流程/index.html","a55767b5e974075ded3e35b18ce7b317"],["/tags/RNN/index.html","1d12f29a5f20a841f112849d958f93b9"],["/tags/SVC/index.html","3f2553f5ef9788be768a6ef4cb6daef5"],["/tags/SVD/index.html","72c9f503a8be982b65037ac130ab79c4"],["/tags/SVM/index.html","a54c79ea1bdbd65cc00aabb9838b4920"],["/tags/TCP/index.html","c2390d99d69565f8784963d890b042ff"],["/tags/TD/index.html","9b516d9d1f43858bda8ff7fc2047103e"],["/tags/TD3/index.html","cfa36185ef651a9697c73b85825fcb5c"],["/tags/VGG/index.html","fff557e1c874bded9ea6b856e7205636"],["/tags/amd配置/index.html","b71c0e6196ac05985a94e72c5867b506"],["/tags/anconda/index.html","dd1a93d29dcb377c7163957d4d457d81"],["/tags/conda常用命令/index.html","ba7a5012dcaadd5d350ae51d28ccdf99"],["/tags/cuda配置/index.html","fa590d33ea9ff2802f23a7666efbb94f"],["/tags/docker-ldap-mysql-arm64/index.html","60b13b2717717110149f307a854a78e7"],["/tags/docker-ldap-mysql/index.html","a1cdda7229197dba16e7cfb47f4680b6"],["/tags/docker代理/index.html","e5f257909543c8b9231d906151e6e06d"],["/tags/docker安装/index.html","cb07342103c63a14efc01877a0639b43"],["/tags/docker容器挂载硬盘/index.html","ebaba50416e4ad710778df301a1b982a"],["/tags/ffmpeg/index.html","829fd3aa1b0d55b0c6c12ae6bd7e1d6a"],["/tags/github上传代码/index.html","c4d012a695c92843be05f26348450ba8"],["/tags/hexo/index.html","1fc61cf2f61efa7b8a6ef8f87dcfffca"],["/tags/index.html","e85238485571ea6e9715a4a291afb474"],["/tags/java调用C/index.html","60650475c6fe84e0e5224f5023da1a21"],["/tags/kaldi/index.html","e495e946182d6c732bbc83017cbfb7fe"],["/tags/linux命令/index.html","479c994212f309bf920b3f208f6e7b07"],["/tags/mamba/index.html","a3fb84dbd1a303ed3725a20d0fe9da8d"],["/tags/markdown/index.html","2aa9cf5cf9addffc427e6b0d6300746b"],["/tags/matplotlib/index.html","bff277eb49ac50e5bc5708b0fb187800"],["/tags/numpy/index.html","2df1bc49cb3d1af6cf5dc845e43ffa74"],["/tags/opencv/index.html","b7d35953f79e10c3ef92fb2bf86d14bb"],["/tags/pandas/index.html","156d6d54395bf09e72e1dff128d854e7"],["/tags/qq/index.html","ea469c39c30966e2f24d067e9c30d1d5"],["/tags/requests库/index.html","a43cf6e3453df524031ae4eb439dc808"],["/tags/rust-多平台demo/index.html","97d8475d3b60df844fa34048ff2c8f8a"],["/tags/sacred/index.html","2e4bbe5f49641da02a61c211eaa10edd"],["/tags/ssh-远程连接docker/index.html","b4f79f53afcb3c805c82bf661947bc0c"],["/tags/tflite编译/index.html","ceff772ce52fd84cac65c5f3088db87d"],["/tags/tflite转换/index.html","b7f0da28ecb8fc9d533ae0f88702e056"],["/tags/torch和apex安装/index.html","210b04332509d9c19b9046bb9a3ede0d"],["/tags/vscode/index.html","e995feddd50f65100184351e1d46691e"],["/tags/wsl/index.html","d0e0676e7f8814e537f650fb6ff12da0"],["/tags/zsh/index.html","72901565649dedb7b1b1a0542725a2e1"],["/tags/代理/index.html","b5786705ed18643d5f7ceb495020829c"],["/tags/决策树/index.html","40387c325c5be75861c92273be11fcb0"],["/tags/函数/index.html","0e54927044f5b57a66847443e6a2faaa"],["/tags/列表推导式/index.html","d8c74cf5eaeadba44b63295e52c7be0f"],["/tags/助词/index.html","d4c7bc4799f15dada02f71d9b3735f3b"],["/tags/包/index.html","d038a72d6c29c383e89ff0906c322ad6"],["/tags/卷积神经网络/index.html","fd712b9da3f68b2999faee119d5d7978"],["/tags/双系统安装/index.html","9e51cbcacb70bab7e8bd0b1cfbe263d9"],["/tags/反向传播/index.html","758fcd06a821baa4507d0cfe13c4af78"],["/tags/句型/index.html","70417294f66a674ed13dd1d7476fb207"],["/tags/可视化/index.html","a4b25a8561f1623638583993fa96fb3d"],["/tags/哲学/index.html","a662694cdd9220ccf8adb68a690c7fc8"],["/tags/图像美化/index.html","124b2e9d903a3967b9e973a1721deb5d"],["/tags/图床/index.html","a4abf9a658691a2d7cce9f40422a910e"],["/tags/多继承/index.html","2f1326a8ee18d89d14e4f458a2f968b1"],["/tags/工具/index.html","a599781109284b87b0ac6ae7ddd735e9"],["/tags/异常/index.html","f92a2cd8944fe458d49d014cd7fda979"],["/tags/强化学习/index.html","d59c0f4596fb02011e27494770f2261b"],["/tags/心理学/index.html","33a2ffe6bccd8141f93bb73493e1481f"],["/tags/感知器/index.html","84641bb5fa348c9e2dc2c16e77fd0693"],["/tags/换源/index.html","4e571fe8c70b2cda0d831b9f070e85d4"],["/tags/描述器/index.html","3f08d983aa404e10289ed9541c32bba3"],["/tags/敬语/index.html","281af8242774c6a1460b3154a5a68b8c"],["/tags/数据集/index.html","8a6c5797505c38573be9e9b4b1b26fd1"],["/tags/文件/index.html","c9d148e9e613604ea87fc2bbfffa42d4"],["/tags/服务器配置LDAP/index.html","c000e56bffeee6a23ff6dcdda379d914"],["/tags/机器学习/index.html","348ebd68cef7dc65d40cd966c7f8c5ff"],["/tags/梯度下降/index.html","4aa52d82b02dc2c83a4fe562fb66ba51"],["/tags/模块/index.html","7b961ebf0b7477816179f2abc230c73e"],["/tags/正则/index.html","76719f37b8a0b227c5f0096be9cd737a"],["/tags/激活函数/index.html","7e33d2caed91c55cd90c09ae21811031"],["/tags/点击预估/index.html","01ff930038b8154946782cf2f6a7282b"],["/tags/爬虫/index.html","8ec6893bc1756855257f481f6a82666b"],["/tags/生成器/index.html","69f63bada1deb383e09a392274512a4d"],["/tags/类/index.html","0c4cd24adeb7d043fb99e6eec7de2af8"],["/tags/线性回归/index.html","d2bd4ab72f1baf18d506a174dcb464f9"],["/tags/经济学/index.html","f31647ee08d45b2657a3e28983547f4c"],["/tags/聚类/index.html","e668fb9a9bfcc57c1fa59b68fab88fe5"],["/tags/装饰器/index.html","6924fd4b2d933690a6f804b3cccef249"],["/tags/词型变换/index.html","aca9d0a4687f9c07474185ef27726b2a"],["/tags/语义分割/index.html","28e782080670b9bb29fb858ceb292a5f"],["/tags/语法/index.html","9cb8cc385adc50e317882b1498caa5a8"],["/tags/语法/page/2/index.html","d7c9b7b31b7976da63c42af2afa68aa5"],["/tags/迭代器/index.html","89c80c68f0dd9709cb3b60a360329e6e"],["/tags/逻辑回归/index.html","825aafadfe94e42ab21e2745791fc9b1"],["/tags/随机森林/index.html","3b7b78f9fe5efb707c95108de5768dd6"],["/tags/魔方方法/index.html","70837ad653a907635f3c8abfe1e00cff"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
