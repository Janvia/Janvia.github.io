/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","862943e3ab218ae8fd75818eb170db6a"],["/2019/01/02/Anconda常用命令总结/index.html","975e5f7691397694a76ee5b965b6f940"],["/2019/01/02/句型/index.html","c9bfd10dfe0a3eb9a795747f137e4c80"],["/2019/01/02/日语助词/index.html","bc8cd2e4b7a0123026d55064e73823a8"],["/2019/01/03/on-my-zsh/index.html","627b3d8235f151e3cbedcb419d3e8550"],["/2019/01/04/《当我遇见一个人》摘录/index.html","1c45fdabbd9950ab39c858a32f604713"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","281954a1addd7c6572b1a90ab2409f5c"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","aa1a94a5ebfa39d4dffa01c2a51122ed"],["/2019/01/04/经济学笔记/index.html","31d91a93b712f2a1dca13c2d1fd5a53f"],["/2019/01/04/语法总结（5-15）/index.html","3dcb5be0a2df3a85473362a0582a89db"],["/2019/01/05/linux常用命令/index.html","c762f18952437bc9a8f8c3c62a0d291f"],["/2019/01/05/mamba/index.html","c57bc2fa3e18911cc150d39e0136fe0e"],["/2019/01/05/tflite编译/index.html","2e558fa38d56d94a7954cc381e2baecf"],["/2019/01/05/tflite转换/index.html","b89d29a39d09914f381d2dd26a8a82a5"],["/2019/01/05/torch安装/index.html","3952ed7db86546b63f8384d33e338588"],["/2019/01/05/vscode/index.html","b812c6865328e81f9b945f258564295c"],["/2019/01/06/敬语/index.html","5c4d6a9c382d65010487a3c8c999fed9"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","676ad574a30b41d17397a88408677dd3"],["/2019/01/07/RNASeq数据下载处理全流程/index.html","e24635cf85092e4140d52ae1cdb226e4"],["/2019/01/07/cuda 手动配置/index.html","14483e1ca3bc2757fd610b0b2963e45f"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","a44039f74f667dedd3b26ff009031eea"],["/2019/01/07/docker-ldap-mysql/index.html","b8a2fb5cca03f762214b3944579fe510"],["/2019/01/07/docker代理/index.html","cfdc10ece5c722edb9b58a8fdd1c9a75"],["/2019/01/07/docker安装/index.html","c0f6f172b20c4ce4a3b545cf65d3df62"],["/2019/01/07/docker容器挂载硬盘/index.html","dd1bb7f35e9ff88a971857e34b04df7f"],["/2019/01/07/github上传代码/index.html","b3eaf3366f43500e2a1183fbe4b251cd"],["/2019/01/07/kaldi 安装/index.html","ba9b6761ef36d91b158869e7d1f15c63"],["/2019/01/07/linux常用工具/index.html","63d71cbb961a19804f552e687fbd30fa"],["/2019/01/07/opencv/index.html","727c04f21b461f31ef3d74bebec1f3b8"],["/2019/01/07/ssh 远程连接docker/index.html","f4d0fb8c4d16163b71f72220ebaf0741"],["/2019/01/07/导出/index.html","3fafa0b13f38cbc8e2387ed8206a2d36"],["/2019/01/07/换源/index.html","9ae4a934e6c246e3c70bc35532cdfe24"],["/2019/01/07/服务器配置LDAP/index.html","bc0e5bb58285b8b6bf538596f95b3ff9"],["/2019/01/09/markdown/index.html","2be336661790182cf44901eebcbca827"],["/2019/01/09/opencv图像美化/index.html","122fd86e6a379707f3c711a6b48492a0"],["/2019/01/11/19单元语法/index.html","36e16b742d47c652c21a9941143dbe5c"],["/2019/01/11/20单元语法/index.html","dcb7dcbba047995e9bd1c6659e77134a"],["/2019/01/11/opencv-图片几何变换/index.html","bd4bc9bf8877be47612b3a415f158d75"],["/2019/01/11/opencv-图片处理及绘图/index.html","2714d139d099c253b51ef287d1c3552b"],["/2019/01/11/wine安装qq/index.html","735112b301fc82062648188a6849532d"],["/2019/01/12/tensorflow-可视化/index.html","4b299fc90249c9625dab2b57ca72d595"],["/2019/01/12/tensorflow-基础语法/index.html","9d27b4faf487b829737d90a94cf84d18"],["/2019/01/13/RNN/index.html","3a52ce26c6695026683594142fbc887f"],["/2019/01/13/keras实现CNN/index.html","39ad6f86ec08cc3305d447641e65f390"],["/2019/01/13/卷积神经网络实现/index.html","9ef3fb5131aad81824f38c1701d282e7"],["/2019/01/13/循环神经网络RNN-写诗/index.html","da43ad32873f3b155c37ad200e88e63c"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","aad3d322d08bddf59a80affc05f781ee"],["/2019/01/14/反向传播/index.html","9d22eb1c7abe729a4a14f9595e5ca465"],["/2019/01/14/图床/index.html","a5c5baa4936e56a41e75d37c9ea9ae09"],["/2019/01/14/感知器与激活函数/index.html","b1a60b19fb253e1e33181c20f20a2832"],["/2019/01/15/PIL简单应用/index.html","30ead5cc6dec088e08beb4745d3805ff"],["/2019/01/15/卷积神经网络理论/index.html","559c1579c1b2aff84074c555b037a5ce"],["/2019/01/15/图片分类之pca-svc/index.html","0be1b807a779d372dea629b4b022a06b"],["/2019/01/15/强化学习基础/index.html","2c6518b4bb475a2e2b2b684518776f37"],["/2019/01/15/经典神经网络/index.html","c8a6061b182c33bb6c239d59ff85ebcd"],["/2019/01/16/DQN/index.html","65a8bf3e0c66b8fa37a158abefbad751"],["/2019/01/16/TCP传输图片/index.html","c222064b6791451dc021a02a71ac0add"],["/2019/01/16/时序差分学习/index.html","017c3aab29858ffea722ffae3e24a7c5"],["/2019/01/16/蒙特卡洛方法/index.html","873eddb90fe80200328cb42ecf1856ac"],["/2019/01/17/Double-QDN/index.html","682085804e1af0e0d9409284e66851bb"],["/2019/01/17/RNN理论/index.html","3aa36fe76f42d2816f551b93694152d0"],["/2019/01/17/梯度下降/index.html","7aae522823f7e6467884e4970570ba3f"],["/2019/01/18/PG和TD3/index.html","1e9f16a533551275f2f89609b66f0c37"],["/2019/01/20/21单元语法/index.html","a2542ac930ba5fd47de66753b4683f0e"],["/2019/01/20/GAN理论/index.html","aad5e20556758261a51edfeb6ede1248"],["/2019/01/20/PG3和IRL/index.html","416d6d9f25ad9fa1c94d69ce85d24de9"],["/2019/01/20/数据集/index.html","b8bce8e38fc974eab5b1105690a5826d"],["/2019/01/21/DCGAN/index.html","7825706feeddc038246f16f602cac2f6"],["/2019/01/21/LSTM/index.html","3737284bd1c696bc195404a52264bb04"],["/2019/01/21/点击预估/index.html","ef44d2640d030e11d385413372270ccb"],["/2019/01/22/SVD分解/index.html","19ff8f51bbcdcbc021ea75ddfd814a00"],["/2019/01/22/SVM/index.html","9db29f237f805f0f5fcd6dcdc541de1d"],["/2019/01/22/机器学习简介/index.html","cba6f637e0833967b4d364b26480b69f"],["/2019/01/22/线性回归/index.html","a70cdfd13b6194f375e73b17435ed281"],["/2019/01/22/逻辑回归/index.html","22aa2bb3090ad4085427264dd1273110"],["/2019/01/23/numpy/index.html","24eba4e8ee16de6889cf971b8060fde3"],["/2019/01/23/决策树与随机森林/index.html","4402ea6e558ec286a2dac4e1accb52e2"],["/2019/01/23/聚类/index.html","400bc6fd46489fbd17ed9bf7e1e16622"],["/2019/01/24/matplotlib/index.html","69c55e51aa446ae37efab193b1262cc5"],["/2019/01/25/pandas/index.html","2def89d0ce13148170bcc3bccc0aebfd"],["/2019/01/25/语义分割/index.html","a715d838c7a93def30c67208b3b8b257"],["/2019/01/27/22单元语法/index.html","68dd3bd13d74c4d77732e02cf9d61630"],["/2019/01/27/SVM案例/index.html","3f43d0edaea5256dd57444051637a88b"],["/2019/01/28/requests库及爬虫案例/index.html","4760f7439246bf8444a6c80dbb7f8d8d"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","a1fa8e8a0b96ea73ce3cedd0ba31d29f"],["/2019/01/28/异常/index.html","00b1af010369db73ddb8bb43282db29c"],["/2019/01/28/描述器和装饰器/index.html","defab023a070cb536e2af321abe3b175"],["/2019/01/28/文件/index.html","751d7e9e51819313d2003bbe62a016f5"],["/2019/01/28/正则/index.html","c9e88c42051cf6bae0fc4e42b2af1427"],["/2019/01/29/函数基础和函数参数/index.html","6c05319906a619a5a1a1615e51dff6e0"],["/2019/01/29/多继承和魔方方法/index.html","a3acdd87949d1cb1308db6ec5902cb18"],["/2019/01/29/类定义、属性和继承/index.html","f008e6a57f819eb08645b088fed2d931"],["/2019/02/27/23单元/index.html","e4701799a56e6ef8bd008a19b6ad58fe"],["/2019/03/12/hexo加速/index.html","6000f0ae2ea76852a5626c245353efb7"],["/2019/03/12/hexo系统重装恢复/index.html","9beb4e3509ae92353e3f88e72e0bdd1f"],["/2019/03/13/24单元/index.html","209ef4a36a6c036ff78e99270f857a10"],["/2019/03/19/25单元/index.html","5e86ce61a178e4fd35ffeb7d8ffb0c51"],["/2019/03/26/26单元/index.html","0e2b5f4adb2bf6b4685099cfd90b3c63"],["/2019/04/14/27单元/index.html","42067393ac734719c650f85e39ae8496"],["/2019/05/01/28单元/index.html","d6756f603008b6d7e06b317ef37a3618"],["/2019/05/02/29单元/index.html","837bc166f294bdf6add413595c720c5b"],["/2019/05/12/30单元/index.html","b794f93d63cc89bb21f88681794c0a9c"],["/2019/06/03/jni/index.html","1b8c6a7bef1c5ebee8dbe82bceac5b00"],["/2019/06/07/JNA/index.html","da6f0c8619b9de571eb484de59e67f3a"],["/2022/08/07/R配置jupyter/index.html","c014e0a01ffc3c50cbae63d8cf4b0dc8"],["/2022/08/18/FFmpeg常用命令/index.html","941389f40d4e8d3b308d301c748a666f"],["/2022/08/18/linux系统代理/index.html","6ff3cfecede1427aed9dc7b8bb41fe3e"],["/2022/08/18/matplotlib补充/index.html","463c23ab75373f834f6cc560aa54da6c"],["/2022/08/18/常用命令/index.html","afe13c770568d1e4be4a96a14c74a26a"],["/2022/08/20/sacred/index.html","f5bcabbd3ef3d6b7294968748e5db618"],["/2022/08/20/wsl/index.html","a6678e013049824ad063680aebe03e27"],["/2022/08/20/双系统安装/index.html","16c37de24f57a379e6e59ebc2a644869"],["/2023/06/28/source/index.html","f3769973a190c8e0f98a4e43cce94a08"],["/archives/2018/12/index.html","97ece4b8cb773727788535f7900385b1"],["/archives/2018/index.html","6257a159868b03e53c0b114b4ff2fe08"],["/archives/2019/01/index.html","fd2ec6a54fcf3aef7405551934acc150"],["/archives/2019/01/page/10/index.html","49c7c3cf0bdf62c0bb7563c75fdb3773"],["/archives/2019/01/page/2/index.html","c45b2f80b5702eaec19e4e477e38c46f"],["/archives/2019/01/page/3/index.html","7212d4ccbdf80ae3428b835941aa8cfd"],["/archives/2019/01/page/4/index.html","4824b451b763c5904af3cd82996acfb7"],["/archives/2019/01/page/5/index.html","b719ddb8dc3198907b914935109c8bbf"],["/archives/2019/01/page/6/index.html","f0754b188c3aa818b2940512c4558739"],["/archives/2019/01/page/7/index.html","1d3c86332bf6275ed9ec78b0c7e03d46"],["/archives/2019/01/page/8/index.html","322b3ea67c91217f36744112e3587487"],["/archives/2019/01/page/9/index.html","3503e58230774921e1785c11d637a3ab"],["/archives/2019/02/index.html","81c5a0b61e89965c80f335e2ab3f288e"],["/archives/2019/03/index.html","ab1f928ba9e945485f3812a804bca67c"],["/archives/2019/04/index.html","a2d20b7f6fc7c07865144291411ae6c6"],["/archives/2019/05/index.html","9545e187f933d8612c8c12165d8d2210"],["/archives/2019/06/index.html","c89f55a2c660cf9dbe876dc4e47f390f"],["/archives/2019/index.html","ff6e8b1540dee998decdb0da66a54ba4"],["/archives/2019/page/10/index.html","eeda4e91fa197db61d3b627b052f2709"],["/archives/2019/page/11/index.html","8202517f83799f5fc1f34702d3a01cf0"],["/archives/2019/page/2/index.html","9cc120603f868ea19066c362234d001c"],["/archives/2019/page/3/index.html","955eb7609dbafb196d800d81de214916"],["/archives/2019/page/4/index.html","aa5aadd85a9b9afe775112b6b8336166"],["/archives/2019/page/5/index.html","0deb91b3504d566ae114500ce3c26588"],["/archives/2019/page/6/index.html","718f878d6794726dd1b8a4cdc7a87239"],["/archives/2019/page/7/index.html","d3db8f1fcf265d2ec8168791725668c4"],["/archives/2019/page/8/index.html","b33dd456a780ff87a84a5a0d48d56070"],["/archives/2019/page/9/index.html","a7f2802bea4167714eee054915f41cbf"],["/archives/2022/08/index.html","50fdd550f47177662854fe189946f6c5"],["/archives/2022/index.html","fe710453361e17355fee9b770105f60e"],["/archives/2023/06/index.html","303c4b9f4c15cf089cd74221ab1d14b9"],["/archives/2023/index.html","65306adb88e0bc563789323f8fade06d"],["/archives/index.html","b3c31bb08ad2f3ca41eec5f8cd44f7c3"],["/archives/page/10/index.html","bdc7c97093b528a7036564bf412f5f62"],["/archives/page/11/index.html","4861a65b38c3a004df834ecdef46c90d"],["/archives/page/12/index.html","d06ab79144ac472533974040cc45f7a8"],["/archives/page/2/index.html","e1f8443f10161956592372d32a1ac058"],["/archives/page/3/index.html","b7f680b04767a9ca154a6b706dc6db13"],["/archives/page/4/index.html","ad5fa31dc24bba69f1e0e4e5c37b9488"],["/archives/page/5/index.html","61ac9a4d48b695fc7f6fd11c140801b1"],["/archives/page/6/index.html","e48cb900ed0d0a7b8828b920370e2de3"],["/archives/page/7/index.html","3efa4b362fa53a62718b787de9bed97a"],["/archives/page/8/index.html","30ba2509fde3f7766ab71883a1d81f12"],["/archives/page/9/index.html","a62f52c694f9b1c8f52de95ee603e4b4"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","cc41a127dfd28977e63079289f5b6c6d"],["/categories/dxz/index.html","1b55b00c9a4b7846376697f68d9e7456"],["/categories/index.html","af7a09aa40fcf3e567d9abae6234d51b"],["/categories/linux/index.html","2217bc8f58441b27b3855fe9e1eda082"],["/categories/python/index.html","38f397434caa377b864f786a826acdae"],["/categories/tensorflow/index.html","5c173ed136d16a5d2f50b7f7d716f861"],["/categories/图片分类/index.html","febf1b1c4c5454760d8adfee14c613b3"],["/categories/工具/index.html","9e3b5607443d8f9ac9221242fc200a2b"],["/categories/工具/page/2/index.html","94eb1efd785cac6c8f705da40e3bbac6"],["/categories/强化学习/index.html","e308e55c2eeb8bc16b69174c72b70f2b"],["/categories/数据集/index.html","b112ca2fabe2f790082c0df2bd1e38c6"],["/categories/日语/index.html","b89d48958b6f9c8d575b7d873fa06a59"],["/categories/日语/page/2/index.html","02f3828ee7534f304e5ceb99d89178ea"],["/categories/机器学习/index.html","36a174897ce639c3f0a7568b5d4f55c4"],["/categories/深度学习/index.html","15e9740896647770eb57544aa02861ca"],["/categories/深度学习/page/2/index.html","4b206e6f31f16038de8e85c9257e5dfb"],["/categories/深度学习环境配置/index.html","0b244358fd17ed015dcb8edb22a5b27b"],["/categories/深度学习移植/index.html","0b1f4c1ddbb7534ff9d7b86b2cd041a4"],["/categories/计算机视觉/index.html","c0e1d39a5c924fd3cd61fcf14ce7cee2"],["/categories/读书笔记/index.html","b252e341de2cb2359e1b5e1faa0d0685"],["/css/main.css","733fc11b1147d13b8139713ed190c13b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","8748e8ecd9e4e17e9771d8fc2eb9dcf7"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","cc21d6ee86acac4471e95416721e52d5"],["/page/11/index.html","24e9a85eafb3544053f29cd4ef6c61e2"],["/page/12/index.html","fda6908869dfc69173361eab04b11596"],["/page/2/index.html","b5daffa690de4db0a03668af088f990f"],["/page/3/index.html","2a8b2dbe6f2a1be906a66fdb2f902110"],["/page/4/index.html","8e619e18e2a36feae416696573ce75f9"],["/page/5/index.html","bccee32d569e069924ad5bdd54b5c10b"],["/page/6/index.html","f514f46fa7dd7af090a39f37d859c669"],["/page/7/index.html","5eeb9292e5cf40c9cee3f9fedb7caf94"],["/page/8/index.html","7c2994f2b2e9c614e5d39dd3df45530f"],["/page/9/index.html","c2f57589563bd224040fd987258483b5"],["/sw-register.js","ed56df9eed120f7a116b3123c4ec666f"],["/tags/AlexNet/index.html","1e1902c695a403c5c15a2f1562269f6c"],["/tags/CNN/index.html","e268325fb940db915c0ac5999b9c38b1"],["/tags/DCGAN/index.html","31a585c6966c037e9d11b730de6a629b"],["/tags/DDPG/index.html","e04ed950d3c6430f8ad0b06130ca12d2"],["/tags/DDQN/index.html","65b5ad751506885fb1d9bf2edeb44b30"],["/tags/DQN/index.html","beb252de209978bc2bec5c537b045cd5"],["/tags/GAN/index.html","db3b0b5f8e575dc0d3e21846e9bfdb4c"],["/tags/IRL/index.html","0761de34ed2c72236db86bab06b2fbf8"],["/tags/LSTM/index.html","0bc4ca727252e90bc26c13577fdfadb7"],["/tags/LeNet/index.html","9abc2016e72bc5be003e5cdc5290a924"],["/tags/MC/index.html","1fba8837ed8b9395da562538a6093586"],["/tags/PCA/index.html","4d9d834869e80a98da369ca7071659b3"],["/tags/PG/index.html","77c075434e432415cd5efd6b27328d45"],["/tags/PG3/index.html","64c871c44dd248058e0bf08693c7a91f"],["/tags/PIL/index.html","47d6648ebdbb44ebe17d535b33822840"],["/tags/R/index.html","288021526e240126407b5ab306040ec9"],["/tags/RNASeq数据下载处理全流程/index.html","82ee2bc82ba3fceba708b64bf271693c"],["/tags/RNN/index.html","acce3a32566233f4e0eac3584531abeb"],["/tags/SVC/index.html","bce817684279d7fdb24b6654a39a1fa0"],["/tags/SVD/index.html","91bfb369ff375b9c19be20088a85ce6f"],["/tags/SVM/index.html","c44f1a85aef963df65c8f3497da1a284"],["/tags/TCP/index.html","e5805e4edb94e5fc4e8252a105de5bf3"],["/tags/TD/index.html","6d717bea3dde6d439dd49c84e4a48752"],["/tags/TD3/index.html","dc12e61e4aaf461a3b48f8533d277556"],["/tags/VGG/index.html","5411a5f7e6f0a3dda917bc859abe59ac"],["/tags/amd配置/index.html","266b4b5c345b5f5a9b4276ce1e55e928"],["/tags/anconda/index.html","2db0903141b7539d02596291a221240b"],["/tags/conda常用命令/index.html","0b4de59947735796b6768ebb2cb4bb85"],["/tags/cuda配置/index.html","33cc9ddd48347068e25fba3e0dc37328"],["/tags/docker-ldap-mysql-arm64/index.html","59a20a77a9ae0329708bcda0fd95950a"],["/tags/docker-ldap-mysql/index.html","76f060170c76d9f08346cbe9273a819f"],["/tags/docker代理/index.html","40965cf071ec68fd1a095e564623d800"],["/tags/docker安装/index.html","5242ecf016a450162f87f689a77cec56"],["/tags/docker容器挂载硬盘/index.html","c76fb90e297eee2ec2fc09892727ae58"],["/tags/ffmpeg/index.html","8feeacadd6583cdfb77c981f43a22304"],["/tags/github上传代码/index.html","dee2554132874ebf8b33ac176a20ebc1"],["/tags/hexo/index.html","2e27b699c92eec6eb981bf902b98d895"],["/tags/index.html","276449e3d50d6194b53f975827d0d1d1"],["/tags/java调用C/index.html","72c97c4213d88d595b157021ca0ecad3"],["/tags/kaldi/index.html","026c8c9fedb9faa0ce91bc37247f1ab2"],["/tags/linux命令/index.html","408d083a86bc0888e0598e3bb16055be"],["/tags/mamba/index.html","c828b8f762a42df5a776b42bf0c1ef40"],["/tags/markdown/index.html","41db9ce56146b1da467ddf4ec0de308b"],["/tags/matplotlib/index.html","4abb80707049b358e20cdf1b4f24e721"],["/tags/numpy/index.html","0120827784ad4feb7ff6910398cacc4a"],["/tags/opencv/index.html","b63cdfeaeca500cc11550b5f4e51e05d"],["/tags/pandas/index.html","16f07983f10dabd7c757c190f756b3e8"],["/tags/qq/index.html","8805415bf3107656e46ce0a905180995"],["/tags/requests库/index.html","e050e45e816ea9de76a72185b9c77cd3"],["/tags/sacred/index.html","be60ad8e84f80308076d80a622e261a7"],["/tags/ssh-远程连接docker/index.html","c32d26150a5b87533bd50aefbbe5730b"],["/tags/tflite编译/index.html","18873b3f5f8f761e8ce05f41346dc3e3"],["/tags/tflite转换/index.html","7c3d480a1ebe6324e62ae4fbdbc6a8a4"],["/tags/torch和apex安装/index.html","a5e6e1ecc8c79b254f8861e393f17ebd"],["/tags/vscode/index.html","c9f2ab4bed88e03dbc7dc0259a67412e"],["/tags/wsl/index.html","7df969cabaf1bb4eed50c6818ecef4ba"],["/tags/zsh/index.html","b3772a6d96f71965b056f58c4cbc914c"],["/tags/代理/index.html","4a93a959980c476815d536c2c53cd687"],["/tags/决策树/index.html","c482108c6548d57fab4fe394a2699d53"],["/tags/函数/index.html","668835851a9dac0cf2d81cd4c98c6946"],["/tags/列表推导式/index.html","ae62e4a947b84b13d8af7dbc7379ae4a"],["/tags/助词/index.html","935479caa34e0d1db8f2de134e44339c"],["/tags/包/index.html","10aa6e5046c866ca8aec6342a4ee7495"],["/tags/卷积神经网络/index.html","bc0d92ba1e02a918a7431a334dca5e45"],["/tags/双系统安装/index.html","6f7d49f8fd391f004758ae32833aa518"],["/tags/反向传播/index.html","9d91949ccd3e2dc289f03357db1fb523"],["/tags/句型/index.html","e1028b446d54efd69d64eabaf6e9f8ba"],["/tags/可视化/index.html","cfa13f0fcd3f64b009daeced299253c8"],["/tags/哲学/index.html","785402a56bf1266afa829af6e32def7d"],["/tags/图像美化/index.html","721fee45c60c05e5e1102ae6c18c055e"],["/tags/图床/index.html","59d5eeebf955c3bd262fb68d7a5a7bd0"],["/tags/多继承/index.html","8249a9a5ce452cbd64bbf0c0cef6a056"],["/tags/工具/index.html","05b3fc69fadf1a7be77df889b3f4660f"],["/tags/异常/index.html","90a3ff8dcddd7faeb01523badba015c0"],["/tags/强化学习/index.html","b972ce9aa57a1e871f2f5fd0e7ce0f17"],["/tags/心理学/index.html","fd855c12a9395b3dd22bbd7f68d1009e"],["/tags/感知器/index.html","0b36478c1922dfaf9df8d98b1583e816"],["/tags/换源/index.html","d767317aa12fad39192043fb2cdbdac9"],["/tags/描述器/index.html","5e3f7fa05d15a2899712e526b9c0dad1"],["/tags/敬语/index.html","6adc2d2e1e93638a9ff43be8bf4b529b"],["/tags/数据集/index.html","77e349e835cf5dd6a0b59922b4b273b0"],["/tags/文件/index.html","1464bcc4da7a64560bceaf121a76ba07"],["/tags/服务器配置LDAP/index.html","a85703dfcfb4194a4c8bce9153f48196"],["/tags/机器学习/index.html","13c5c90e8ca1f402e3eb251200e6a314"],["/tags/梯度下降/index.html","20772768dcc415918fb14a79d88c2cff"],["/tags/模块/index.html","5ec61533ebfa2ba4fb9ecefafa4332c7"],["/tags/正则/index.html","5533c3ef029bc6f7bcf18d25cd0e2000"],["/tags/激活函数/index.html","0139bb9d5f758ad1c4d1b04ff719ca64"],["/tags/点击预估/index.html","a0e0efc184497d20f315042f98795521"],["/tags/爬虫/index.html","f6a24a90f3542410b8f4e1f0cf2dbee5"],["/tags/生成器/index.html","e6b0ff44a4a8d22d38a58c80a34ec8dd"],["/tags/类/index.html","68cbcdf8e250ed803f0fd39cb4e05936"],["/tags/线性回归/index.html","e1b4f0e6cf248afda5934aac8b1cfedd"],["/tags/经济学/index.html","810b21b93434da5f40da33104432a400"],["/tags/聚类/index.html","c4979f7f36f01d5848f4209a5e50e1d3"],["/tags/装饰器/index.html","f16c802688af078d00034ce877241e96"],["/tags/词型变换/index.html","9db073c149d94d5c2f9c2a4e7b97e8a7"],["/tags/语义分割/index.html","6672a5beef803e8376e3ad087b34ddba"],["/tags/语法/index.html","e5a5a3872868c9a1c541d2cd7ad2e898"],["/tags/语法/page/2/index.html","1efb9d5a827fbc1af78424cdfd263f8d"],["/tags/迭代器/index.html","e6e61dc256d09958b3bdc6cd8c955f8f"],["/tags/逻辑回归/index.html","b8eccbc63670e96d9ba7dacb4748e67e"],["/tags/随机森林/index.html","20dac28a0d5d76023704ec43a5d0ec1a"],["/tags/魔方方法/index.html","6b765d1231a4d70cc4a79dd0a5fb8a47"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
