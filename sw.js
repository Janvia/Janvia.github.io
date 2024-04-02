/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","59b60ffc751c6e842d1a3161c3978447"],["/2019/01/02/Anconda常用命令总结/index.html","f2671ba71d695ca902f9b6c87a443ccb"],["/2019/01/02/句型/index.html","0e24ade0179067abff4f52d0b43a0346"],["/2019/01/02/日语助词/index.html","61618666f2484b79b2ae8e2ec841ddfa"],["/2019/01/03/on-my-zsh/index.html","282897a4e473e89ed1fc8e36893b8a5b"],["/2019/01/04/《当我遇见一个人》摘录/index.html","e49d6c1e86b670b31c0a01b445a36c53"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","b8a00a82621b00ec53e7208450c31dfa"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","a395a9adf792b706ff99d6657ffeb967"],["/2019/01/04/经济学笔记/index.html","6b34ea487bd770ecc5034d0741f21160"],["/2019/01/04/语法总结（5-15）/index.html","eab0965289bba00ad9259014fcf45e6e"],["/2019/01/05/linux常用命令/index.html","5900cfe0d5bf148a3df38f4c743aa2ad"],["/2019/01/06/敬语/index.html","2807183b54b1ea5d2a90cce0f4be2271"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","d66afae8d01520c3a94fac4d919a5a40"],["/2019/01/07/cuda 手动配置/index.html","1e6202217cbc1ab4e6db79ac88922c0c"],["/2019/01/07/docker-ldap-mysql/index.html","092eaf96fbbc8ee4fe4155fb277a5c22"],["/2019/01/07/docker代理/index.html","b304bf52a4b051a769ac31b7edf8c38b"],["/2019/01/07/docker安装/index.html","2ba47d658e14cdea8458eb9de75ce220"],["/2019/01/07/docker容器挂载硬盘/index.html","52060290d56e84ff64e25d94f9e07c4a"],["/2019/01/07/github上传代码/index.html","cf058c55f0a1fec61f6e372c351e8501"],["/2019/01/07/kaldi 安装/index.html","57481b2ac056d260617dd5116ce9c4a0"],["/2019/01/07/linux常用工具/index.html","85f59da1f0b7577783f5906d4a15f383"],["/2019/01/07/opencv/index.html","31e6bb4adbb350698182677d7b28e26e"],["/2019/01/07/ssh 远程连接docker/index.html","5fa1168526a39498b39088c496c4ddfd"],["/2019/01/07/导出/index.html","9a99931847a619e82176414a0a605cce"],["/2019/01/07/换源/index.html","d43d9c80d96d15590e57ab67be418d7a"],["/2019/01/09/markdown/index.html","c7876c1d52ea536cebfe18f28934a07c"],["/2019/01/09/opencv图像美化/index.html","680674c00484b4a03b6b9fbd0f45dc6f"],["/2019/01/11/19单元语法/index.html","4314f0c8fa724174d40d556374759143"],["/2019/01/11/20单元语法/index.html","1546de9d48c919600689fa92f98c3dc4"],["/2019/01/11/opencv-图片几何变换/index.html","9dea67a95da63e06883c20f173ad5e17"],["/2019/01/11/opencv-图片处理及绘图/index.html","e0fa3e9d0e935427bbbbb10c50e5b8f6"],["/2019/01/11/wine安装qq/index.html","b0bf066d6641cf762ca52ffd207b5cf6"],["/2019/01/12/tensorflow-可视化/index.html","150b46996289e441079a05b05cabf33a"],["/2019/01/12/tensorflow-基础语法/index.html","8cbc9d496ee49c18a87fe43b43347a7c"],["/2019/01/13/RNN/index.html","809bd83d89601cbc0ec851a848f3547e"],["/2019/01/13/keras实现CNN/index.html","3770567d1348e3a8851b8ce0c36149ca"],["/2019/01/13/卷积神经网络实现/index.html","a220d4fd578e119441b7ab67b0299046"],["/2019/01/13/循环神经网络RNN-写诗/index.html","17e6bde67539cf2e2b8acc91d111c638"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","49f7fafc02d60eed2cb189005cfd343d"],["/2019/01/14/反向传播/index.html","596cc7c58e3175559d6e91f0cc2337f7"],["/2019/01/14/图床/index.html","bd706a6a96313aa4151e95221e55b1ea"],["/2019/01/14/感知器与激活函数/index.html","38fa8c665a79631c923c10e711b7b6f2"],["/2019/01/15/PIL简单应用/index.html","514790c2fe364f8e35fecfdae54fcbaa"],["/2019/01/15/卷积神经网络理论/index.html","7deaa8ea29b8009e47a11710d8ee0724"],["/2019/01/15/图片分类之pca-svc/index.html","fd46111ee2aea9078cde3dc659e3cf43"],["/2019/01/15/强化学习基础/index.html","df6bddaecd6a4807ea327f4d09fceacc"],["/2019/01/15/经典神经网络/index.html","7e0db7df705956c3ba9481b39956958f"],["/2019/01/16/DQN/index.html","4c7f252c1014f60ff0aa17f23bf52ff2"],["/2019/01/16/TCP传输图片/index.html","3b9f0aba758e2b35718e2f25c0666374"],["/2019/01/16/时序差分学习/index.html","f0d66f080c8b062eb93b30558bb9a062"],["/2019/01/16/蒙特卡洛方法/index.html","8835ab3174ee9e3f9e246dc267776884"],["/2019/01/17/Double-QDN/index.html","b777c76efef7191878aaf5dbde15fc1e"],["/2019/01/17/RNN理论/index.html","cb66b5d48d0e90cc8262ea13b769489f"],["/2019/01/17/梯度下降/index.html","ac43932fe1b48cd87583f2e758088133"],["/2019/01/18/PG和TD3/index.html","4d4a3e3e3c3d66dc6b9e6ff859609de7"],["/2019/01/20/21单元语法/index.html","ee247a0926ec7e2649b4e622ae500b3b"],["/2019/01/20/GAN理论/index.html","8df0f911621de03b049a41bac388ba64"],["/2019/01/20/PG3和IRL/index.html","cd846e29629824d79edc39db13619eba"],["/2019/01/20/数据集/index.html","f3d6b10de9df658f715885bf7c126e5f"],["/2019/01/21/DCGAN/index.html","78ef167d70d367f8fb7dc09036cef7d9"],["/2019/01/21/LSTM/index.html","ad5b27979719e518d307f4b524df480f"],["/2019/01/21/点击预估/index.html","f46084d7907fd3a13870f1192e50c179"],["/2019/01/22/SVD分解/index.html","dde84993e5ffd2eb2c63f27092d2443c"],["/2019/01/22/SVM/index.html","7f5809360a5303e644f50af2621b0c1c"],["/2019/01/22/机器学习简介/index.html","58a3fb357a278d9e66155f6aba248bdc"],["/2019/01/22/线性回归/index.html","ef14a154563ed41ec5ca3407855d1e07"],["/2019/01/22/逻辑回归/index.html","3869a4f40f6908ff0931212d536bdfc8"],["/2019/01/23/numpy/index.html","828f93360e5f68d9f44cbaa7777f4d79"],["/2019/01/23/决策树与随机森林/index.html","b2a0b891a9c1f04279d2901e43533572"],["/2019/01/23/聚类/index.html","9588711e61ed5834a21e50f8229a9b96"],["/2019/01/24/matplotlib/index.html","019bfea08dc0356e1e44e2cd4ea38ef9"],["/2019/01/25/pandas/index.html","9a983aece108a021989789800ec96673"],["/2019/01/25/语义分割/index.html","5a9e11c9f49efeadc595cb68fe0b5213"],["/2019/01/27/22单元语法/index.html","55c50e959d5812832e47a4700a5b05fc"],["/2019/01/27/SVM案例/index.html","aca1c395858b8155be8f1f312c873ac9"],["/2019/01/28/requests库及爬虫案例/index.html","1e9fe915d35f9fb80ebdfdee2c2d8c27"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","41fa11edb85cab1a1e5e020e844bc001"],["/2019/01/28/异常/index.html","f6dc4b9a7b1b6a066705f4c0712c4b78"],["/2019/01/28/描述器和装饰器/index.html","709d26056f7823811360549affffaaa2"],["/2019/01/28/文件/index.html","1ed2baca5ba7d58b394f6e1c1c871ea5"],["/2019/01/28/正则/index.html","464aaa695ae729300f3dea9abf2a874f"],["/2019/01/29/函数基础和函数参数/index.html","0205543f768b7cb808a039174a5690c1"],["/2019/01/29/多继承和魔方方法/index.html","74d2b1cbe5e04022f7a619687031c19d"],["/2019/01/29/类定义、属性和继承/index.html","05e79b9c456e06c09d9ccde0a0b983f7"],["/2019/02/27/23单元/index.html","e28293c6322d97490f9650497be3153c"],["/2019/03/12/hexo加速/index.html","b8704ea2f17fdef283ee36e057afab25"],["/2019/03/12/hexo系统重装恢复/index.html","876e3ebe342d06acde95feb579b583f6"],["/2019/03/13/24单元/index.html","a19b8742a1fa0d6a2221a3a5f1ef7dad"],["/2019/03/19/25单元/index.html","58585f60e4563f6d805136832990c07c"],["/2019/03/26/26单元/index.html","c2dcd1551ed146033741ecf3312b2b78"],["/2019/04/14/27单元/index.html","f8e185dbbf46fb34491d7e8ac376d273"],["/2019/05/01/28单元/index.html","6b72fa2d9602b636ad6cc4ab9ba6becc"],["/2019/05/02/29单元/index.html","c9da94a9dcf70612169b3d2ac7e8772c"],["/2019/05/12/30单元/index.html","35443eeec8fd581e8d7e0b9b67d5abc0"],["/2019/06/03/jni/index.html","88ddce522a6b457c0192b5128fe876e8"],["/2019/06/07/JNA/index.html","43b53972faefb1d8af038cfae4b88c04"],["/2022/08/07/R配置jupyter/index.html","04d7a7325c59cedeaec926d707c58a4e"],["/2022/08/18/FFmpeg常用命令/index.html","2a1c830d9f55b5155b7215611136ec8b"],["/2022/08/18/linux系统代理/index.html","cfc481d6a1c35dcd226fad862f5b255a"],["/2022/08/18/matplotlib补充/index.html","677dc67a19cdb3e8348c6844c7457ad2"],["/2022/08/18/常用命令/index.html","cda108b07dfca15c121c161bf19d95ab"],["/2022/08/20/sacred/index.html","fe4d676b91978f3c07042ca921f24305"],["/2022/08/20/wsl/index.html","5d5c4c06804b446e11731ab5f363ac3f"],["/2022/08/20/双系统安装/index.html","92c748db0eb7a861cc935df59f8dc7e4"],["/2023/06/28/source/index.html","45ebc86971444d8c1f8f2cd2b1701c14"],["/archives/2018/12/index.html","b0d68a9eb39776eb9cf99780953ce6f9"],["/archives/2018/index.html","0de38bd250cf3ae3180254912fe025d4"],["/archives/2019/01/index.html","04d185981eca9ea01ae9282b0cedac0c"],["/archives/2019/01/page/2/index.html","96b990ae75394646bb5d99f1433f8a38"],["/archives/2019/01/page/3/index.html","b2b4d03e645053df87216a43e79eb36d"],["/archives/2019/01/page/4/index.html","2cea5fd616b2e7d6f9dc6321d8d574cd"],["/archives/2019/01/page/5/index.html","fc338c1edb2b8cdee7f624a2851629bc"],["/archives/2019/01/page/6/index.html","257c895dd170511fd9b52e3fd8040a11"],["/archives/2019/01/page/7/index.html","ac87a99afece1f8cf565f5c2a3cb35bd"],["/archives/2019/01/page/8/index.html","638eb35b0268280dfc13d0bf2b6d5832"],["/archives/2019/01/page/9/index.html","8f4717d576050fa33c3ba431ab388b49"],["/archives/2019/02/index.html","f0a962a3cc4411b9c0aac17facd7b23e"],["/archives/2019/03/index.html","e7e217a9b133d2ede8f1ce10b167b981"],["/archives/2019/04/index.html","668fcd9022a082ab55d8a4dba68393b8"],["/archives/2019/05/index.html","fbc8169bdc14ad5be9c3443344928fdd"],["/archives/2019/06/index.html","024ba799f06a3775506f73fe5b072105"],["/archives/2019/index.html","0845905a982ff5d5606634c2d3850076"],["/archives/2019/page/10/index.html","798da86d0c756b67eea07156aa66dbbc"],["/archives/2019/page/2/index.html","f42506569e184dd5c8d85ab0835802c7"],["/archives/2019/page/3/index.html","9a94e5ed6209cc035adf9e5163207e35"],["/archives/2019/page/4/index.html","e73df72380ce69acb8eda2c1fe679670"],["/archives/2019/page/5/index.html","7013767f474e24f692ce98a9cbbd4d5d"],["/archives/2019/page/6/index.html","8276ecf22c964ac2545946773f9ca8d1"],["/archives/2019/page/7/index.html","bfbb6c187f86e6b307e93893f58c4a78"],["/archives/2019/page/8/index.html","3ea8ae56515b6a9bc1752639cdfddcbd"],["/archives/2019/page/9/index.html","222542227857d054eeda514530f83eef"],["/archives/2022/08/index.html","41a7bd619db9450f4bb2355316ae853b"],["/archives/2022/index.html","26511291361b3d04713d2510313f032b"],["/archives/2023/06/index.html","cc716e55ff547ade41291b6cd0fb6533"],["/archives/2023/index.html","16cc39aa816f8b7c4399284bd26f5725"],["/archives/index.html","dc3b1974df98264fa2f45a144e2bcabd"],["/archives/page/10/index.html","c9e3f36e1a37818be1267efe4d31a861"],["/archives/page/11/index.html","b68a1f394069f85cb13b866220269bbc"],["/archives/page/2/index.html","7df3d6c28e58def6d5c97f5dcb4ff61b"],["/archives/page/3/index.html","ff8de029055ca95ab56a87e025c42565"],["/archives/page/4/index.html","35a93f97cfc60b18dfc861554ed398df"],["/archives/page/5/index.html","186799460f8a35e3547c7065c5df3878"],["/archives/page/6/index.html","4feaf5d799d547cdc6f04cd8dc631d9b"],["/archives/page/7/index.html","5ccc2c29f62d053da3cae47d0916645c"],["/archives/page/8/index.html","3e8bac63a64124f1214340bbb57ac032"],["/archives/page/9/index.html","7d67b3268c4d85b03accf640deacc6f4"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","8075d63d09ef7b7cf7e42a99d7fb756c"],["/categories/dxz/index.html","a351fe30eca20143cdc8e40236c50d76"],["/categories/index.html","d3680038a8413393aabd184d6536e8fb"],["/categories/java调用C/index.html","19992752f6794e595465ef2b9a60374f"],["/categories/linux/index.html","08b3fdee0053881d38766e760dcdd8be"],["/categories/linux/page/2/index.html","0408008ba4169ee6dff17ff9b094efa0"],["/categories/python/index.html","656949af6df14b5743ec60298bb027ac"],["/categories/tensorflow/index.html","185f4d3e9882d16adbf8f49daf9869ee"],["/categories/优化算法/index.html","4735489ea798a0b53b513d71550e72d9"],["/categories/图片分类/index.html","0c134c84f6d5ff7b8c20fd44cde0b09b"],["/categories/工具/index.html","dbbf970076dee4842786cb27e51a0efc"],["/categories/工具/page/2/index.html","8aed34dae6428254d7d0f68d964a9ce0"],["/categories/强化学习/index.html","e18eb5091779129bee61a83788b4b3c0"],["/categories/数据集/index.html","4a19a9c2e46db99776a56194cf4d6c3f"],["/categories/日语/index.html","59d3ef79e6637c305ae82f8b1c63b331"],["/categories/日语/page/2/index.html","796dc98c9f0bcc1c1ae63b79e7540d16"],["/categories/机器学习/index.html","d1232b32484d3c2e0b89b1010fa50860"],["/categories/深度学习/index.html","ea5d9d3cbf2ae22b8591093d3207bdc8"],["/categories/深度学习/page/2/index.html","585571fadc2dc9c29f02e03015259c28"],["/categories/计算机视觉/index.html","c08d7a2c18c8fee4e3664cb5eba48657"],["/categories/读书笔记/index.html","48b8fb15429d70521c584bbb4a6cb449"],["/css/main.css","0cbf1b2a2d84ae11e6f0913456af4d7b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","70c9f64d300d99835376d85d706ac5dc"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","c2a71d4069bfab6fc70f683a90ecae72"],["/page/11/index.html","09fd2ae9ec475634b4805b856864a72c"],["/page/2/index.html","55142c9a684137199532a6089cee2ada"],["/page/3/index.html","517c2d4e8d812f41f253317d87605833"],["/page/4/index.html","4eaede86b228100891208e4481e62b4b"],["/page/5/index.html","6c9f2e6eb3395983c1e3b16b25f67693"],["/page/6/index.html","33406f6254c95c6b3a3c2fa094eb8527"],["/page/7/index.html","d9b174b447271f96a12b85564f0211fb"],["/page/8/index.html","1bb911e7ce2f33e8aa837616cda47894"],["/page/9/index.html","58e998fdbf6e3220b9baedfac92d857b"],["/sw-register.js","4d553f209bcc70d081f6be9de05b451e"],["/tags/AlexNet/index.html","fa1cb91706729475d9428f624b52af86"],["/tags/CNN/index.html","853a8972620fa50853fe3957d276ddd9"],["/tags/DCGAN/index.html","f7d4ede9705dd2206fa307bd0c431078"],["/tags/DDPG/index.html","fc9586e63a2990d2ed2535a4aac1172b"],["/tags/DDQN/index.html","919333fc3365309abfe5b172f2ee2753"],["/tags/DQN/index.html","192ba1235024a187ea6430b4c1de2a11"],["/tags/GAN/index.html","69c4ca68a9f2b821a50cd8074d4a3f36"],["/tags/IRL/index.html","c95817ac83fd779ffe24f690df7382e7"],["/tags/LSTM/index.html","e682e420749ba463d754150e374fa3cf"],["/tags/LeNet/index.html","3423cdcd91fff0797f01a25fe451021e"],["/tags/MC/index.html","17d0fd0f081177d5763c7460c8ff157d"],["/tags/PCA/index.html","0afdc9737e97d737011748f65de71f0f"],["/tags/PG/index.html","8d6dd35a4b90b3b48768dc58d6145137"],["/tags/PG3/index.html","e13bfefec8ffba0f821406b2a5a5a679"],["/tags/PIL/index.html","3554cba9a82a9495298447a84e977bc1"],["/tags/R/index.html","e093cdaad1c8086d3ca6900835703715"],["/tags/RNN/index.html","29b6b2b64ed4c934637b8c998746e947"],["/tags/SVC/index.html","bb535cd56022339f8df7b4ffa15e33e7"],["/tags/SVD/index.html","36e76c6e8aefc714ab50ff28e97ef372"],["/tags/SVM/index.html","c374ed9409d7fcdb30f3a2515caf9c48"],["/tags/TCP/index.html","75e348d2e786f324161cfe2aa7a7f33d"],["/tags/TD/index.html","50cfaf5282e7b6f98f77fea6e3aaea64"],["/tags/TD3/index.html","9ed6d448cc29c93a6b391b342247f69d"],["/tags/VGG/index.html","f8b4e69aeacfa3f914c5dee139dab54c"],["/tags/amd配置/index.html","fe4e1b5770233d14974847bd0111c6dd"],["/tags/anconda/index.html","48d91b65c66ded5efa776584b31aaa3b"],["/tags/conda常用命令/index.html","74e869ed780a8f5fdf404a9be9439168"],["/tags/cuda配置/index.html","ee4cf5cb159baec71b52adaece18b130"],["/tags/docker-ldap-mysql/index.html","068d981146613fffe92bb4ee331e6969"],["/tags/docker代理/index.html","0bca740bde03560e6a8f839c0f371aca"],["/tags/docker安装/index.html","8f4a008f5260a28bd140eff80032f215"],["/tags/docker容器挂载硬盘/index.html","b9030c2d800ec570f0b1c0505d86df12"],["/tags/ffmpeg/index.html","d06271046f4404296d8ffe34a8c38dee"],["/tags/github上传代码/index.html","2f8120154ec589592e2e2b9316ae9264"],["/tags/hexo/index.html","c8356bc265304e6839a8e11b5ff6ef0a"],["/tags/index.html","e6d79ae045f25dda08f7540dabca77af"],["/tags/java调用C/index.html","8c2caa775bdaa5a6072ebf0637538415"],["/tags/kaldi/index.html","a80a11d50f89c7151744db6a2c0f4921"],["/tags/linux命令/index.html","44724402c2131e423bcac321425d683e"],["/tags/markdown/index.html","8793c3f8da024c5e10af8e1a69551f27"],["/tags/matplotlib/index.html","782dc4cd87fbc70ed84ec10b26c8ec5a"],["/tags/numpy/index.html","a26b6d8e3331fd8d65c415a255a3de9c"],["/tags/opencv/index.html","7fdc0a2ed01cd65346b888e36d93c796"],["/tags/pandas/index.html","9f16bf6049ea1abef0c1e2c2572492da"],["/tags/qq/index.html","cee0faada8697d01c7c6d19a47864b11"],["/tags/requests库/index.html","d5fe043f452a4fb30eaa364a1f647b64"],["/tags/sacred/index.html","4200a2879c3a25dc8851540cbe0adf7d"],["/tags/ssh-远程连接docker/index.html","feea1609fa974e50473a5462c4c1c222"],["/tags/wsl/index.html","db6434fb9b07b0f7ba758c69e136d42a"],["/tags/zsh/index.html","2b96002db7dfea29f30fe2420359ceb5"],["/tags/代理/index.html","c414e27c3660be54b3ff62ee75eae87c"],["/tags/决策树/index.html","196b235c3e35e262fef2bc2ceaf8b627"],["/tags/函数/index.html","1eae3d9187989a39aa8bcd52489e8bb7"],["/tags/列表推导式/index.html","be6999011892a0ba3a6032c8b05fb72a"],["/tags/助词/index.html","b1c87b6c2883edc37af78a66ab21853e"],["/tags/包/index.html","69fd2f261b86df8acd186629d17ef3e1"],["/tags/卷积神经网络/index.html","4ae9a826b07c43aaac7bd70456a9d453"],["/tags/双系统安装/index.html","cb3a418c8aa51dbb6abfece30198ecb8"],["/tags/反向传播/index.html","d5557dada9258d564e91cbdbb93f96f3"],["/tags/句型/index.html","e24685783d90e01e8d64d3f13f3aae0e"],["/tags/可视化/index.html","44571050959e1a3820bfea3de1701833"],["/tags/哲学/index.html","0e579e1f618cc0c016d17ffb9a9024e7"],["/tags/图像美化/index.html","59705dc762218dc1a6464e0146314c09"],["/tags/图床/index.html","dc8f7efc476d366746de53aefd2b7dd4"],["/tags/多继承/index.html","d62bf3b374d3fd61886f3a9b84b7b08d"],["/tags/工具/index.html","01b74a84cf274660dfd3b99f60aaf7cd"],["/tags/异常/index.html","f23223af3a397906c04049c6c373cb9d"],["/tags/强化学习/index.html","9be5c1f1cded80d0aa78128a0bbdf2ae"],["/tags/心理学/index.html","62501d0a9ee39492609e14628bb87f7d"],["/tags/感知器/index.html","6d6105672b8bf62ee178a139d076c4bc"],["/tags/换源/index.html","ca40cf2837b6f64adad4fad3e07f28a5"],["/tags/描述器/index.html","b8a894770acbb2ebf364bd23b794c1bf"],["/tags/敬语/index.html","cfad9ec9ce822ffde73ae35fc30fc60a"],["/tags/数据集/index.html","8f429aa7af9ade0215e5b0bdd6f02a42"],["/tags/文件/index.html","75f61ccf2cee6a989c4ba19dcdab6e07"],["/tags/机器学习/index.html","57a15de72a6a95838b040559cec2cbf5"],["/tags/梯度下降/index.html","824be07cbaf5f4db462e91e3fb3fd9c2"],["/tags/模块/index.html","40883ba3869a8f9ebf66831a1d660293"],["/tags/正则/index.html","0ac770cec4ba444067f59525211a3c73"],["/tags/激活函数/index.html","46fc172def05b2378a925573d3a1baee"],["/tags/点击预估/index.html","dccbaf83d4e4934c6de2a67cf6da2e47"],["/tags/爬虫/index.html","56a8bf56b49d9ea2e7ccd59b3f67030a"],["/tags/生成器/index.html","421966081a43946602413e78984606b7"],["/tags/类/index.html","f590a302839ea5468747d62b0cec81a5"],["/tags/线性回归/index.html","1aa751ebeb5cd6d52cf8131fdf17a6fe"],["/tags/经济学/index.html","a3dc2b4ff8b8bc7eb2407a2f9d71ce3d"],["/tags/聚类/index.html","4e31512ba45a068b2337d7ad350dab9f"],["/tags/装饰器/index.html","00d0626109d223f54e41477b2ff49fe1"],["/tags/词型变换/index.html","0773a9eacfa3b3016f4e142db51b96b1"],["/tags/语义分割/index.html","7b3b22a2a39c09c6db6bb07f090d8e5b"],["/tags/语法/index.html","5604676216580de1d12a8cdbb0639dae"],["/tags/语法/page/2/index.html","57a8750f273a1fb50e24fc2e9466c3e8"],["/tags/迭代器/index.html","ae88b347ac02ba97f76a35b3873955e3"],["/tags/逻辑回归/index.html","8afecd7b86fd187a15e51fb41bbe62da"],["/tags/随机森林/index.html","f2178160c39492531685062dc848d653"],["/tags/魔方方法/index.html","ff8b8a66b1469be4eb004601acb91600"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
