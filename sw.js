/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","141770076078b5425591c4f0bbfc8693"],["/2019/01/02/Anconda常用命令总结/index.html","0a5b87db5e05f8af9a410992fbada05b"],["/2019/01/02/句型/index.html","d4798e3b9b3f39c5143c69aa1f87241a"],["/2019/01/02/日语助词/index.html","59284e5353d07105f050de37c448052e"],["/2019/01/03/on-my-zsh/index.html","9a095221a4319fd45159fcc4935bf03b"],["/2019/01/04/《当我遇见一个人》摘录/index.html","b2fbf1cf2af2f0d83d88dbfadb5d108b"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","a5fef5ddfcace596c4f395210873798a"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","4fa9ab0d56ed590947aa7a07a4254345"],["/2019/01/04/经济学笔记/index.html","f32745daa7eadc3843a9741a054f81fa"],["/2019/01/04/语法总结（5-15）/index.html","0521d1811a251b520e7f8e44101673e4"],["/2019/01/05/linux常用命令/index.html","e93d69dd38995715514f53ca6284eeb4"],["/2019/01/06/敬语/index.html","39215f2f889b74eaee46459bd8aa4e94"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","49671eb115428b7905938228814e11f6"],["/2019/01/07/cuda 手动配置/index.html","cafff229a589122287ecfca3cdd7e885"],["/2019/01/07/docker-ldap-mysql/index.html","fd531f7afa51dbb81a1b7dcd61cc1baf"],["/2019/01/07/docker代理/index.html","211430b9dfa3e0d34078b17873ff5ee0"],["/2019/01/07/docker安装/index.html","0e15f461cefc02af5983e5f2c961a836"],["/2019/01/07/docker容器挂载硬盘/index.html","8f049e1033630d41d5abeddccbcbc5cd"],["/2019/01/07/github上传代码/index.html","12097c6936742a718e4042391baeb5ea"],["/2019/01/07/kaldi 安装/index.html","9d958eb171391acd6f5de0d247a10805"],["/2019/01/07/linux常用工具/index.html","4deca679a30fccbdbee289206b315137"],["/2019/01/07/opencv/index.html","6ca8c36d87a771098f6310946d9e6bcf"],["/2019/01/07/ssh 远程连接docker/index.html","6dbf25463f8c8077cdd9f4dec983d605"],["/2019/01/07/导出/index.html","93d7157f290559613698ef8346fe88f9"],["/2019/01/07/换源/index.html","fc97ddbdf83ea85d82fe256059c3ac80"],["/2019/01/07/服务器配置LDAP/index.html","59630581e9caa919b94ba926436d2409"],["/2019/01/09/markdown/index.html","3c8495939d3c51b5d8900db3a1839d52"],["/2019/01/09/opencv图像美化/index.html","5d991b2579a9bee127114686fcfdcc50"],["/2019/01/11/19单元语法/index.html","b2a37ab1e4987b4b576ad913439c9dfb"],["/2019/01/11/20单元语法/index.html","387400a6802a85799fd162718143992a"],["/2019/01/11/opencv-图片几何变换/index.html","2b558147a246839e574595d01403b787"],["/2019/01/11/opencv-图片处理及绘图/index.html","6f865ce7255403fc438e23c419719eb5"],["/2019/01/11/wine安装qq/index.html","1e0c8f52da5794e904d77ef656408c7a"],["/2019/01/12/tensorflow-可视化/index.html","7256e34396d023c44d4416f8f73b217a"],["/2019/01/12/tensorflow-基础语法/index.html","e8120ac5e150e8e022cab7f7a552d069"],["/2019/01/13/RNN/index.html","d2b188afbd0c7ee7978c36538c55256a"],["/2019/01/13/keras实现CNN/index.html","4b7ec8a1c866379d7807aa34176f3458"],["/2019/01/13/卷积神经网络实现/index.html","9bb94b2bbf9ef231b0eba3efd307fda9"],["/2019/01/13/循环神经网络RNN-写诗/index.html","0e21054668822f42cfe3b17d298d5e4b"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","145d83d6a6dd0ecd108511b92730db7e"],["/2019/01/14/反向传播/index.html","3dd6a893eff4be75a313655aed790072"],["/2019/01/14/图床/index.html","20cab3b6d3c85746100fab89c8f8d841"],["/2019/01/14/感知器与激活函数/index.html","f7b21667bf85dbb88482c1fda85da7ab"],["/2019/01/15/PIL简单应用/index.html","2a680dcfc54bb59c9ec31280911fc404"],["/2019/01/15/卷积神经网络理论/index.html","c04cbb297a482add300fefc05cf66175"],["/2019/01/15/图片分类之pca-svc/index.html","36dc73731aa6cba8b57e5f2f77b1c974"],["/2019/01/15/强化学习基础/index.html","908b52adaccf98b4841754c68c57e108"],["/2019/01/15/经典神经网络/index.html","de749faa32dd0b015d1b9fd881e40954"],["/2019/01/16/DQN/index.html","15aed4c077b8886ec7d877cc51f4ce62"],["/2019/01/16/TCP传输图片/index.html","7d94a2dfa5e847b7511925bb5348c3e9"],["/2019/01/16/时序差分学习/index.html","a7139b5e30e07f4737605b3eb404fad6"],["/2019/01/16/蒙特卡洛方法/index.html","a170bbe133c869cfd28d08280a2e8811"],["/2019/01/17/Double-QDN/index.html","6716835682129a2b31768ddee5c9401b"],["/2019/01/17/RNN理论/index.html","2653c23ba8f6b344c0dfd528455af9ca"],["/2019/01/17/梯度下降/index.html","4e35686ed5ee7f6bddd7414fe411b3f7"],["/2019/01/18/PG和TD3/index.html","6836dff58c6d82a0425cb34967d771bf"],["/2019/01/20/21单元语法/index.html","67289bd70b116986f50d24e7923de659"],["/2019/01/20/GAN理论/index.html","68c610a8118ffbf9bbec62f945f16ac5"],["/2019/01/20/PG3和IRL/index.html","11b5b8c584c7d7970bb9a6368f19697f"],["/2019/01/20/数据集/index.html","2dc60b0fd5e70f09c780b74ab81d8e48"],["/2019/01/21/DCGAN/index.html","312946fad93274474b12a8e0385ba2cc"],["/2019/01/21/LSTM/index.html","a491cead2fc8e210c3b93659d1ee39d7"],["/2019/01/21/点击预估/index.html","7d443c5a1bad9c1ffd62b46633ae872d"],["/2019/01/22/SVD分解/index.html","33b441e7d0beb6a6a5a034adaa5f4a3a"],["/2019/01/22/SVM/index.html","0b2a61d304652ecb76830c933cdcbfd2"],["/2019/01/22/机器学习简介/index.html","e2a20ff849669642b4795487bc641e49"],["/2019/01/22/线性回归/index.html","f8463a4be8363d14dda23689bdf68521"],["/2019/01/22/逻辑回归/index.html","73556f7ea0191f58d81201d0340721e6"],["/2019/01/23/numpy/index.html","c9109e0eb04f418a7fe96098de2a7b7b"],["/2019/01/23/决策树与随机森林/index.html","a8417e55bf76dae2a5e02f75e234d3a5"],["/2019/01/23/聚类/index.html","68929ecaef18b270003c509558fc93a3"],["/2019/01/24/matplotlib/index.html","5d6608baf68cb9cfda19fd62cb798de3"],["/2019/01/25/pandas/index.html","a7ee408489f6c3bf199b6208988089ee"],["/2019/01/25/语义分割/index.html","02ca479e1f9db1f8dd160646e6cf5d34"],["/2019/01/27/22单元语法/index.html","ea09b217f81c93fe8af935aa65284c8c"],["/2019/01/27/SVM案例/index.html","64618d20f6fab673875075071b19e490"],["/2019/01/28/requests库及爬虫案例/index.html","5e4abe75a0551868d5c6bdb21f1f08d0"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","878e4a1332a9d8c0e8fe4eb441a8e8ec"],["/2019/01/28/异常/index.html","cf757830f80aa937cb4a486ca8b724ad"],["/2019/01/28/描述器和装饰器/index.html","500bb833316cf8548a8fac9516b51d59"],["/2019/01/28/文件/index.html","5ea7f3cc158037a06d391ec414bc4a24"],["/2019/01/28/正则/index.html","b9339c9bc62a25bf5770f9f75fcf6e62"],["/2019/01/29/函数基础和函数参数/index.html","f7a03dc8f9d6d21e18522dd533c2dd1a"],["/2019/01/29/多继承和魔方方法/index.html","5236bea21e3bbda7e8ba045967131832"],["/2019/01/29/类定义、属性和继承/index.html","c1732be4006ee760a800419d972f66c2"],["/2019/02/27/23单元/index.html","ce9c1b6a2e3f173b219a520835c7a94d"],["/2019/03/12/hexo加速/index.html","a6990c028503155dc789c4c2f1fb4422"],["/2019/03/12/hexo系统重装恢复/index.html","d7880482a0bba01c43eb2f0d4a995846"],["/2019/03/13/24单元/index.html","8186d79cde4b9490b07220b3bb9bf0eb"],["/2019/03/19/25单元/index.html","82809557f4c3aa425d3a21abcbe52990"],["/2019/03/26/26单元/index.html","7b2a4036c8ad63d71d2b751e3922458e"],["/2019/04/14/27单元/index.html","0a5aec4fc8d509ac5d7e59876b434ba4"],["/2019/05/01/28单元/index.html","1a98b176f96495cd59821df0a70468bf"],["/2019/05/02/29单元/index.html","a5de6caed909e42a6496f6471a5b747c"],["/2019/05/12/30单元/index.html","2e0b5504d3b7d05f3a1d5c182aab5e10"],["/2019/06/03/jni/index.html","ef44f761d2a8372a3fc6cf453a8924c9"],["/2019/06/07/JNA/index.html","334995400291fe0e6afc84e1df670f31"],["/2022/08/07/R配置jupyter/index.html","4168f1b67dbc15534fda3bd7f56a5e8a"],["/2022/08/18/FFmpeg常用命令/index.html","debc45e3d2dcee19cf858cb1418dceae"],["/2022/08/18/linux系统代理/index.html","34b2f28e9674bf937621665393f4b22a"],["/2022/08/18/matplotlib补充/index.html","a524d75e6db1d6fffe4760a41d16f994"],["/2022/08/18/常用命令/index.html","57ce08fea925de79d8d96ed46d7de8de"],["/2022/08/20/sacred/index.html","83db7f86527f825b2b705f3536912404"],["/2022/08/20/wsl/index.html","85f5d29b88dbdc74bc7bbc737e50c164"],["/2022/08/20/双系统安装/index.html","5e6a7018775027b27ad175f3caad6146"],["/2023/06/28/source/index.html","e2a4cc9517c976c314683df2447130cf"],["/archives/2018/12/index.html","2a85a7259c98549e30fd140b9f79f45d"],["/archives/2018/index.html","ca5462de2250a7ab2416f7e7f6b6b87b"],["/archives/2019/01/index.html","4bb99e429313d0a3d49141b8d79b400c"],["/archives/2019/01/page/2/index.html","1f0dcbfbd517c11f35acfe34fa9017d1"],["/archives/2019/01/page/3/index.html","00dbf1328e1e7a9aa8d74fbb9a0e3011"],["/archives/2019/01/page/4/index.html","1be517a50638ef9fc21b0b5c89c5fbb5"],["/archives/2019/01/page/5/index.html","616d49c821ef6ac0d500ef1865bab74d"],["/archives/2019/01/page/6/index.html","2267833c5c74c2b7ac60ea3941e466de"],["/archives/2019/01/page/7/index.html","91f1ae4267fbb2c4ac769023d05ef3a1"],["/archives/2019/01/page/8/index.html","6b05eda0123b35362f8d670b135029ac"],["/archives/2019/01/page/9/index.html","388ec2602ed71e8b0319ba8b104e49a9"],["/archives/2019/02/index.html","2df4f058f7aad459b3788240bab7d33e"],["/archives/2019/03/index.html","447bcc8a7e933c213decf21c91317aca"],["/archives/2019/04/index.html","25abdeecdb15432ba91262ede06a97bb"],["/archives/2019/05/index.html","fdc1e8cd6ff89bcbc8c157dd96a769da"],["/archives/2019/06/index.html","5927b14354e0671c1ed9e90c58f49ee2"],["/archives/2019/index.html","cbb7ac7bfa00d20736e058d9615803c0"],["/archives/2019/page/10/index.html","757b4d6ce62bf24fc6ca509e6270725e"],["/archives/2019/page/2/index.html","de03d69703aacacb5ea8719590dc4831"],["/archives/2019/page/3/index.html","3661a605a1e66794bbb610cbef9929b2"],["/archives/2019/page/4/index.html","007e9827797cda400729785beba97218"],["/archives/2019/page/5/index.html","17ed02d92605f3f66fd063f26c1130ac"],["/archives/2019/page/6/index.html","53b81eb671a67846f3502eb05396bb44"],["/archives/2019/page/7/index.html","f5683115147a6d775f43adfdad0a3760"],["/archives/2019/page/8/index.html","2c7e831c228eb26bb9ecc430efb182d9"],["/archives/2019/page/9/index.html","3e342d530a82378432db7be09129f75d"],["/archives/2022/08/index.html","5aeaae83c8b1a9fda0e30eb6ac9f63a8"],["/archives/2022/index.html","76856c809f19ee5d03b26e116335e334"],["/archives/2023/06/index.html","083672dd377e94ba4484a849ebbde6c5"],["/archives/2023/index.html","d567fc1b6436bc8cb3b0725bff335d1c"],["/archives/index.html","04d750ff67b459e8c76efc32332ed394"],["/archives/page/10/index.html","d64c98949ee34766f49bf1d2ae7cb2b3"],["/archives/page/11/index.html","3815c50e028a2d7c53b17e1adc098be8"],["/archives/page/2/index.html","b92cdff7c7075c74379d64f857e95b69"],["/archives/page/3/index.html","1e32a778c793a1aebf52b64a0bf72c6f"],["/archives/page/4/index.html","a8e9a996e396afdd2ba248ff12e5a017"],["/archives/page/5/index.html","e3059feebd405e2e94b1244e3dbbc13f"],["/archives/page/6/index.html","3b712a1abe49d2b34fc5725e06f12327"],["/archives/page/7/index.html","085a43084e6f4c62d0fd5c68da1220e8"],["/archives/page/8/index.html","660cf7744b6b7e8c50419b57f1f5359c"],["/archives/page/9/index.html","c7f4306d9503765e567e71b1f1e7cfaa"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","c9e915248dabaa4f54729da56a125856"],["/categories/dxz/index.html","9ae945d61beb492cdccbb550474c65ca"],["/categories/index.html","cff92a4b66f0fd03f1df0324af48c0e6"],["/categories/java调用C/index.html","c4357a8638e988e0c522b24a0f77f527"],["/categories/linux/index.html","bd4069c66479fdc857c03052b7493cab"],["/categories/linux/page/2/index.html","8f5a9e6db40fec5fc1fbc459d73991d4"],["/categories/python/index.html","bc7fda6f806d466907e2a5bfcbf75656"],["/categories/tensorflow/index.html","6b14a7a8c16d646ea2aba42ab3395bd9"],["/categories/优化算法/index.html","243f13b20f0e5776ee029746cce5c08b"],["/categories/图片分类/index.html","39f98ea6ded91824cc7e9aa66a09b313"],["/categories/工具/index.html","315f1020da08e7b8030dbbdbc94a3066"],["/categories/工具/page/2/index.html","3a888c293c15538935c76c470b155b2d"],["/categories/强化学习/index.html","2a5cc7ecd0b0db5f72b9906449496369"],["/categories/数据集/index.html","ea0beddc16c8bcaf8351816e6754b931"],["/categories/日语/index.html","38dbe2a9e0e1d0288183b3cc25b944ec"],["/categories/日语/page/2/index.html","97cb6225075ca57611171af570c43ae0"],["/categories/机器学习/index.html","42d09f223a86d604927ae5d8eef17ba4"],["/categories/深度学习/index.html","21fbda13263bcd943d54d1cba21a6a9d"],["/categories/深度学习/page/2/index.html","4ae9b8edc31ef6098097d0a35f23c94e"],["/categories/计算机视觉/index.html","ae989c8a23c7ed9df6f77a63af3a1227"],["/categories/读书笔记/index.html","5481c76db6b8145ff6cb69f0a6bb4035"],["/css/main.css","6d794225f3b74fe218894a47b2d54ab9"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","326ca585c82ba6aa28dd85022a8b8146"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","1140158e84f553030e3fb6f01905ee0d"],["/page/11/index.html","55f6085d661f92124750915304688fa3"],["/page/2/index.html","4ecfe1f0cba78d928f276744979bbf0b"],["/page/3/index.html","b3cedf2cf3966ea883466f46522fde1c"],["/page/4/index.html","b7bb113ccd3ad01c7e29ea3c3750e4bc"],["/page/5/index.html","01e1c7e3cb9f19e2d2e03e5d935a8d0f"],["/page/6/index.html","f04cc8f6a98cdb6ac07b0b061e57706f"],["/page/7/index.html","e6c4dbdaa46c7a51432f68d521b5edd3"],["/page/8/index.html","f975f2ab9546ce5e80be35863191c597"],["/page/9/index.html","ccd6901c2faa97307570ac46b694c09d"],["/sw-register.js","41e11c8b8dcc3cd59f496ba544b3184d"],["/tags/AlexNet/index.html","8883850388f547c64d0ba1a7b0c59757"],["/tags/CNN/index.html","1c0bf1a5806554ca3ccbbbcafdb97807"],["/tags/DCGAN/index.html","2f175138a241095959812d0a9446e5b5"],["/tags/DDPG/index.html","00c4a3cc1114496192fa03010f427027"],["/tags/DDQN/index.html","de84d4d4244d49a5d46606d6696d0c89"],["/tags/DQN/index.html","e9a24f6eefd7bcbefa5f858cbd1e635a"],["/tags/GAN/index.html","97f9f515398ee51edb4c31534258f688"],["/tags/IRL/index.html","5c68eeb3f895eb8fd62fa580bf689941"],["/tags/LSTM/index.html","754194c333cbdc23187bc6c6ba80bf83"],["/tags/LeNet/index.html","9885c2c8250051d176f6bff94fe1095e"],["/tags/MC/index.html","6b1e565de336941f05eda63d1696427c"],["/tags/PCA/index.html","faf93e53ad9658225d443ba90c17a0df"],["/tags/PG/index.html","6f6c24da1106bf36fea4660ac19a6fb0"],["/tags/PG3/index.html","065950e1269dad5101015b709e973a7f"],["/tags/PIL/index.html","ff985da4479ffda8fd564d38a8c7aa6e"],["/tags/R/index.html","ee14e55a1b1323d743e12f12eaacd62b"],["/tags/RNN/index.html","7a4e03110662e80c0677781138f244b7"],["/tags/SVC/index.html","0c9de757f4cdada7beff9a039eb3953b"],["/tags/SVD/index.html","01d143d58795fe57d5dba6b13748b201"],["/tags/SVM/index.html","12b8f8a06d4db35271f7f3f3d9d55811"],["/tags/TCP/index.html","21cbfc78d0b93092b7759c2a52dde999"],["/tags/TD/index.html","b5471933389442519042fa91ab687d4e"],["/tags/TD3/index.html","6a96125c4a897c2c32c3ab3e93b0c444"],["/tags/VGG/index.html","9760820f1776f89140b6b3856fad16d9"],["/tags/amd配置/index.html","3e77cd9233aff775f28ae1dbc2e03dab"],["/tags/anconda/index.html","16821611e690ce3f2ef2a900f3d66f8e"],["/tags/conda常用命令/index.html","6c48c56de14c60d9ca014fa8aef1a5a5"],["/tags/cuda配置/index.html","81091cf90e163579f6ca7a8c8e8bc31e"],["/tags/docker-ldap-mysql/index.html","8c0f3faf4ca08d58b42584a40b6d8bcc"],["/tags/docker代理/index.html","77aa737dccfe89bbbe126ab10da597c7"],["/tags/docker安装/index.html","45cf18c49fee342bc3a40b12dcb2c328"],["/tags/docker容器挂载硬盘/index.html","d0ade3df069a86536cec1dd1022558ca"],["/tags/ffmpeg/index.html","e8a9d5806b21b835f852e48b8fe9465c"],["/tags/github上传代码/index.html","75b388559e11c2dc44260e9d6767915e"],["/tags/hexo/index.html","6dd19a34f593e1a5d70dfba75907b529"],["/tags/index.html","d733e2de7807839d8cdf4388838ee513"],["/tags/java调用C/index.html","a1527bc9d254f325bc2b2c125ead73cd"],["/tags/kaldi/index.html","04116d5072e74edcf89d11a19e86a13e"],["/tags/linux命令/index.html","c6d8d4941615aa2eae5f51b818498d69"],["/tags/markdown/index.html","f6a5413fe8e5e4771114522db0875921"],["/tags/matplotlib/index.html","ffcb868f10363c22c0f6a0493e69548f"],["/tags/numpy/index.html","5fb3ba0f1b5a8efa9cb6e36eaa57bbcf"],["/tags/opencv/index.html","8f68d8ef5194527fc55fad4380d63fd2"],["/tags/pandas/index.html","958d4ad978dccecbf59f507e5147921a"],["/tags/qq/index.html","7ff716fb8bddcc4d2491216752836360"],["/tags/requests库/index.html","11e481da82957e114f44efbfc5fecfe9"],["/tags/sacred/index.html","bea6e8c81c6f789160fc69b5083f3983"],["/tags/ssh-远程连接docker/index.html","c7b1d81c08300770c62ed9a27da1670c"],["/tags/wsl/index.html","964f8552fd86149650a91c2175198a9d"],["/tags/zsh/index.html","6b4370499422ff9e48432a1555139d5d"],["/tags/代理/index.html","d7ef27a35ee84787173cf095bffd89d9"],["/tags/决策树/index.html","2c6362cfd0e4cd9c38dffb5f58c04d93"],["/tags/函数/index.html","f80634d4e7aa78b90cccae2deec2bada"],["/tags/列表推导式/index.html","55658ab21d941d577aefb508d3db220a"],["/tags/助词/index.html","5987d183f6bf0d547bae9a354558f2ba"],["/tags/包/index.html","c8741c5d3e4affb92ba0934b23c72b48"],["/tags/卷积神经网络/index.html","f62631c140f45e49460224995cef321c"],["/tags/双系统安装/index.html","c9dc40cfdac64480ccb1a788c95a8208"],["/tags/反向传播/index.html","87d276d50829bddbf47e7e6e2f585bf9"],["/tags/句型/index.html","cafc823a3357cfbd3dc4c26bb21b9938"],["/tags/可视化/index.html","c6fecbfd0c109051c537cc0b4a947e59"],["/tags/哲学/index.html","a31e0e79ed6613c38dc334a344bebc1b"],["/tags/图像美化/index.html","d956b2657359072fbf2f1934f2e5a797"],["/tags/图床/index.html","b8dfad09834feba81ffff10c44616aba"],["/tags/多继承/index.html","b19686b8cdef39996b7a66e0026db4bd"],["/tags/工具/index.html","c19524de78d8b4c44602d6bfdc16f645"],["/tags/异常/index.html","d4062c7a251d0b8b710ba4d008cf47b8"],["/tags/强化学习/index.html","555d033dd6e936bdbeda08d13c47cb5f"],["/tags/心理学/index.html","2b053e7aaaecf82c1e6c552ca00902d7"],["/tags/感知器/index.html","ecdff4aec2082ce8f848b5d4dff6dfc8"],["/tags/换源/index.html","c316df97d6b173e322ced8b187c20ea2"],["/tags/描述器/index.html","5d0e7d0590d454006101d3bfdd510fe6"],["/tags/敬语/index.html","acaac127e8451c847125764970df928e"],["/tags/数据集/index.html","c0389b35cf7cc4880d8ae5f481552919"],["/tags/文件/index.html","d8f6e9c1c0491c29a7942e91d0a10841"],["/tags/服务器配置LDAP/index.html","def038b01ea96518a7a27e84399e3b0a"],["/tags/机器学习/index.html","5377dc01e1a1092e667957d66b41e319"],["/tags/梯度下降/index.html","97b6fbb6f8912a2b751d35966cb0ea17"],["/tags/模块/index.html","2bd5a77bb98954f63426b187b61df9f0"],["/tags/正则/index.html","80557d38ae18726492d7a2709b4f1bb5"],["/tags/激活函数/index.html","4b7ff37ece361e0824bf9c37f6973816"],["/tags/点击预估/index.html","4c0dfcc2d58f58f70d757258fe555bdc"],["/tags/爬虫/index.html","46729049b78f2753105de2fa2dac51fa"],["/tags/生成器/index.html","b2216cc64e7450e687bbde4ea4b60806"],["/tags/类/index.html","730fa8dd036706d97c1955b5e08a95ba"],["/tags/线性回归/index.html","b565893664bc346e58930638bc81a9d4"],["/tags/经济学/index.html","4de4063c19b0d0841d69df6817a034a1"],["/tags/聚类/index.html","7112a26bbedcb9d7ae0b30d39bc8ff7b"],["/tags/装饰器/index.html","7f4319263a7d895aafb013c83d67644e"],["/tags/词型变换/index.html","ae011baa26bcb60b7e8fef26218ae031"],["/tags/语义分割/index.html","06f6c93490d5517293b43b1b51b47e70"],["/tags/语法/index.html","0707f5e078dd5b38d89d22f240243c98"],["/tags/语法/page/2/index.html","9e382865624b70f32e3fb55c3244a092"],["/tags/迭代器/index.html","9419f8fb239f8647277288f1f4ff1ae5"],["/tags/逻辑回归/index.html","3e3cc71a7ec3f393e21a7f4eb5f35271"],["/tags/随机森林/index.html","53acc6a2adca9d99db77f96f4c109b4e"],["/tags/魔方方法/index.html","f6db3bd4e07ecfe09e21a55f049975fa"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
