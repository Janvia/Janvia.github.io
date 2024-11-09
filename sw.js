/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","cdcf7a467a28028bc6fe41aca4d9465c"],["/2019/01/02/Anconda常用命令总结/index.html","4e0fa69f5d0248463fb98279f5c1d800"],["/2019/01/02/句型/index.html","396faaad9b475cc04a40746760b3c7fb"],["/2019/01/02/日语助词/index.html","3d7985c06e370dff225f5811f372991a"],["/2019/01/03/on-my-zsh/index.html","fc1fa0c938696627b0959184fefaa9c9"],["/2019/01/04/《当我遇见一个人》摘录/index.html","87bba1bed88be69f88e8f25d6e79aceb"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","fce61036c61b9cb0678e3f1c9c609ed0"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","7b9aa37c4c5208467c61824734c3b370"],["/2019/01/04/经济学笔记/index.html","0402507ba35452db7137a0e4ff631015"],["/2019/01/04/语法总结（5-15）/index.html","80e685f0034f99925aeef342a726c163"],["/2019/01/05/linux常用命令/index.html","5d037efea91bef8d979b1fce20765a3e"],["/2019/01/05/mamba/index.html","743359d5b6f566de6754df1a5519fb8b"],["/2019/01/05/tflite编译/index.html","12e1a4d6a52b0d0d95416e20d388dd50"],["/2019/01/05/tflite转换/index.html","eb26c99805be07ff1a51ac2c68a4b381"],["/2019/01/05/torch安装/index.html","7d2a7c931cf86eb37583a457dea0e3d2"],["/2019/01/05/vscode/index.html","377d45ac65a4e00b58f6129800f9501f"],["/2019/01/06/敬语/index.html","2e2aba118b52e1b921f2ea6e4cd3d02a"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","fc00db1b80ecb43d3c10a8628de85870"],["/2019/01/07/RNASeq数据下载处理全流程/index.html","15a19705da2b04dbdeadc60f7e4a5ff4"],["/2019/01/07/cuda 手动配置/index.html","753651ede9302563a7c7e58dc1719ee2"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","e845481f736bb0f2d54710cfa8162fdb"],["/2019/01/07/docker-ldap-mysql/index.html","d36a1d3b0afb6af5b685601b9b9f0048"],["/2019/01/07/docker代理/index.html","1ec3ed1b5f773c0d09d9d60c40a977b3"],["/2019/01/07/docker安装/index.html","4748bd0e85393c6608b01d38856d779f"],["/2019/01/07/docker容器挂载硬盘/index.html","e3c188c7f33da57ef7b8fea2378cac94"],["/2019/01/07/github上传代码/index.html","7d776a5c5ed92eab2811a03cd11c2059"],["/2019/01/07/kaldi 安装/index.html","9003a1e62fb062a6a3af8e016d41ef02"],["/2019/01/07/linux常用工具/index.html","f99a3deca9c139ec5da1ecbeded76d70"],["/2019/01/07/opencv/index.html","d6b609dd6bd7b96e3984ac460f2312e6"],["/2019/01/07/ssh 远程连接docker/index.html","515df43713d8eaf03020c2b3b31875f2"],["/2019/01/07/导出/index.html","835b49cc422c221671843f9b2d3f1e11"],["/2019/01/07/换源/index.html","12c7c8078d0156098d7a2f4b7af9895f"],["/2019/01/07/服务器配置LDAP/index.html","e75ed50a42c63535ae91b1224e2a82e8"],["/2019/01/09/markdown/index.html","b9b79d2ff8e897fb0803e6986cec4c86"],["/2019/01/09/opencv图像美化/index.html","942fa5faaf00b8337303561e6ba16f63"],["/2019/01/11/19单元语法/index.html","3321a649f38f9ef7fd725abb296c7947"],["/2019/01/11/20单元语法/index.html","a97b2446781756c42d6c41be3c108583"],["/2019/01/11/opencv-图片几何变换/index.html","042422b137c37259a1451f5c20bdcc0f"],["/2019/01/11/opencv-图片处理及绘图/index.html","c81906a406b636352c5d4e358abe6e05"],["/2019/01/11/wine安装qq/index.html","d091092f3e16a96d911fb2fece8d5335"],["/2019/01/12/tensorflow-可视化/index.html","02607824e7d7bf3e1af8152a09884f23"],["/2019/01/12/tensorflow-基础语法/index.html","bec26bb88fcd276af94f3a4a28b6f3b1"],["/2019/01/13/RNN/index.html","af1caa03e96bba896b08443ce5d79507"],["/2019/01/13/keras实现CNN/index.html","eba2e0cc26c68e8e2cfcbda3de4d7277"],["/2019/01/13/卷积神经网络实现/index.html","840d7d0299bbca4cd6035d506cd125e6"],["/2019/01/13/循环神经网络RNN-写诗/index.html","832f478677c80e05adee73ccfdaac490"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","9db804aaf9417f47c04ba1e7d70a59d4"],["/2019/01/14/反向传播/index.html","f6d3fdac33fe0e61c7742be9ee2acb3d"],["/2019/01/14/图床/index.html","9c78246ac23f6edd154ba437773e9887"],["/2019/01/14/感知器与激活函数/index.html","9bebc3ba12bff5410ba810ce8f58bda4"],["/2019/01/15/PIL简单应用/index.html","377d30f7d9ce3b9a02af5e75d48cde31"],["/2019/01/15/卷积神经网络理论/index.html","65b097aba2da70387cdf99e0242b24ad"],["/2019/01/15/图片分类之pca-svc/index.html","bd868a4750183bb6b6eb74c657331455"],["/2019/01/15/强化学习基础/index.html","3435bb039c5697ea4b895a6b023fc540"],["/2019/01/15/经典神经网络/index.html","2d1d321285b9f501fd7e64c6122ab8e1"],["/2019/01/16/DQN/index.html","a21578fa902bb32eb580b181cab33596"],["/2019/01/16/TCP传输图片/index.html","1a106f1cac9e1b91fd85cf0356bcff58"],["/2019/01/16/时序差分学习/index.html","2c14ed0914fdee568f8fa3291bb2ccd2"],["/2019/01/16/蒙特卡洛方法/index.html","8ecd550b1cd9297ea6f34433d2f93694"],["/2019/01/17/Double-QDN/index.html","08246361ae6a321e1842294b75dd69d6"],["/2019/01/17/RNN理论/index.html","4959f4e3ab7ae16c204046bf4880f123"],["/2019/01/17/梯度下降/index.html","e633f0857215469e402cf51ea60cbc5d"],["/2019/01/18/PG和TD3/index.html","88c47e2e481eb7036432a669a6639ee5"],["/2019/01/20/21单元语法/index.html","21194a2a77c36127c0f89269b1031037"],["/2019/01/20/GAN理论/index.html","51d515c02242682a4853280ca255ff27"],["/2019/01/20/PG3和IRL/index.html","317f87ee6078b5e792a26819014340f1"],["/2019/01/20/数据集/index.html","fdc45995ce11806c53ad4b95c64a9c2b"],["/2019/01/21/DCGAN/index.html","ee00177b7cd530044d457135764d91a7"],["/2019/01/21/LSTM/index.html","a13a59ca6fad2ec8a59ab9d3f0a44780"],["/2019/01/21/点击预估/index.html","6c28c01347ff75a2f34fc4ff60189ed3"],["/2019/01/22/SVD分解/index.html","af011ddc02fe43f9e045bf104598cc6c"],["/2019/01/22/SVM/index.html","654408d287f55e8f2a60e0d9aee56a63"],["/2019/01/22/机器学习简介/index.html","9a00733d34d5cee42d530bd8afb7b521"],["/2019/01/22/线性回归/index.html","24947876e23f8455f549e683759099df"],["/2019/01/22/逻辑回归/index.html","a73e0bc7281f5a4df6d274a2e075f5e7"],["/2019/01/23/numpy/index.html","e46394a7b6f0597e67fedd720d0d754b"],["/2019/01/23/决策树与随机森林/index.html","46fc77acd61906a20a2c13b1ba478222"],["/2019/01/23/聚类/index.html","7cff74c4624eb1859537673d235855cd"],["/2019/01/24/matplotlib/index.html","e3cbe841bb341e6d17e6765816260f3b"],["/2019/01/25/pandas/index.html","535ed6dca224f1f8a7f6009eacce6641"],["/2019/01/25/语义分割/index.html","51fd926bd6b19e81d504b39c3b314a9e"],["/2019/01/27/22单元语法/index.html","885c5388cf8e94a4e167e3404c24fae9"],["/2019/01/27/SVM案例/index.html","ca35946f56c48fa9b779ca7018d77a0a"],["/2019/01/28/requests库及爬虫案例/index.html","dc89bebaf928c110ccff0aa32f0ec07b"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","6af85c9ab43a92cd884f95f7f4fbe1a1"],["/2019/01/28/异常/index.html","add4ae7a1e22e7c1ae165aeb8bd45d23"],["/2019/01/28/描述器和装饰器/index.html","9c208fbbfeebc73bd7998c5c3686f85b"],["/2019/01/28/文件/index.html","b330a343a80757201536d104d2e32925"],["/2019/01/28/正则/index.html","5c9839eb9125b0352a10f82dc17ff3a9"],["/2019/01/29/函数基础和函数参数/index.html","cfe9904afaa545df9823a0409426263c"],["/2019/01/29/多继承和魔方方法/index.html","2ca5ecadbc0e37e679ec768754afdad1"],["/2019/01/29/类定义、属性和继承/index.html","8abfad87d094513c62bc70688d6d7184"],["/2019/02/27/23单元/index.html","31cd3016454dfb96f34998e3dcd90ec8"],["/2019/03/12/hexo加速/index.html","3743d3c6cab29efb80a13083c8bebb9c"],["/2019/03/12/hexo系统重装恢复/index.html","b671cf94ea989aa1fc9149bec0d19448"],["/2019/03/13/24单元/index.html","13dc55f2d1b17410e7cdfa640ddf1ca4"],["/2019/03/19/25单元/index.html","72a7b1a04cce4f83565739e0f3234be9"],["/2019/03/26/26单元/index.html","0814f1d9fd07a918692a53833e758819"],["/2019/04/14/27单元/index.html","7e4e8f144cf982d08cf4f49d43afe6af"],["/2019/05/01/28单元/index.html","5ba242cf3b3071cb5b44e029d566857f"],["/2019/05/02/29单元/index.html","b3f1caa30be5ec80401baf1ab5fa138d"],["/2019/05/12/30单元/index.html","e0123f1b706cdc11ca60d07421f6b9ff"],["/2019/06/03/jni/index.html","1539732dfce24677a17c1378c77f9f6b"],["/2019/06/07/JNA/index.html","e59be51fec7e13aafc8b39a6bb5cab86"],["/2022/08/07/R配置jupyter/index.html","d3bdf598d1fa99c9a93d086de757175e"],["/2022/08/18/FFmpeg常用命令/index.html","07a4789ea3cb94772e61d30e2b8f7903"],["/2022/08/18/linux系统代理/index.html","fe2021e89446e956e5cb26990168eff8"],["/2022/08/18/matplotlib补充/index.html","2a7e1580badff864170396e9a7eef87b"],["/2022/08/18/常用命令/index.html","958dfed348b9fac0fcacaa79a4069342"],["/2022/08/20/rust 多平台demo/index.html","7d87864c86367ad217cf11561a55a215"],["/2022/08/20/sacred/index.html","4e21d2705e8df6393682d1e647048201"],["/2022/08/20/wsl/index.html","8bb5f8b40dfbf73a91d5fd0b1b999c29"],["/2022/08/20/双系统安装/index.html","6c55af29305622a91944844dde0bb11a"],["/2024/11/08/source/index.html","54690d1c43dded2d574530930fe1a5a2"],["/archives/2018/12/index.html","e5b1d6bf08bc61bac2d5c401f161445e"],["/archives/2018/index.html","f4a3c7342197aa94283f674ebd06f2cb"],["/archives/2019/01/index.html","59bcc440b8445bb3c9d09f9fc338e60f"],["/archives/2019/01/page/10/index.html","377f9a1395276f8a290e26dc4792ff68"],["/archives/2019/01/page/2/index.html","01f80195e995b1e1fd3c0f8391cdc876"],["/archives/2019/01/page/3/index.html","5a4b90d45aec5e8d35efe742fb6976ce"],["/archives/2019/01/page/4/index.html","79d6ff87df7808df3923d30e688f884d"],["/archives/2019/01/page/5/index.html","f56dd550c637bf3915925388f5e21fc2"],["/archives/2019/01/page/6/index.html","f45be2b7685bb534e59c9335ec88b4ae"],["/archives/2019/01/page/7/index.html","2931667bfa29cb9f50fd0bdfb5d9af00"],["/archives/2019/01/page/8/index.html","cd1f6ef4e75f2dcd88369eaabbb66d55"],["/archives/2019/01/page/9/index.html","b32951e9524db25c5fac739364dc5811"],["/archives/2019/02/index.html","e6d23c727977dafed5d614279a6967df"],["/archives/2019/03/index.html","22a27dd21a5fd1563c2c506d92c04a5a"],["/archives/2019/04/index.html","a7396287ae04a28cd4e133c6e63b8eca"],["/archives/2019/05/index.html","bf65f785998c37de0f1e039c98b16ef8"],["/archives/2019/06/index.html","181f665b0a60abae0d079c31b7243136"],["/archives/2019/index.html","178f683676f02663c2864ae53a80042d"],["/archives/2019/page/10/index.html","dbcf8f198f12de0c3927fc44ab786419"],["/archives/2019/page/11/index.html","c6e7de6bf3f02b281f734f1723743f80"],["/archives/2019/page/2/index.html","df4da941256aa51c60f9e266b9c12ac7"],["/archives/2019/page/3/index.html","bf4b74ecc28c9211eda4837e4d8ebb35"],["/archives/2019/page/4/index.html","19feb4077d636999253c263a615a28d9"],["/archives/2019/page/5/index.html","54d7c2da0f280ced731d515d94ad4972"],["/archives/2019/page/6/index.html","8523c0ace5ea098968196fc255fae50a"],["/archives/2019/page/7/index.html","dacfdf719de8987f061c2ddb28aa05f0"],["/archives/2019/page/8/index.html","f0906402502869508a287bc2b1f83393"],["/archives/2019/page/9/index.html","03b4917d9500cced229486ff5124656a"],["/archives/2022/08/index.html","aa87ec51064cafbe40e56faf84c626b6"],["/archives/2022/index.html","8ebdc68274f10acfca7b0ddbf81862c2"],["/archives/2024/11/index.html","4fc093c5ce202743b4634117c2d7ae20"],["/archives/2024/index.html","586d58fa0bdee1a3f6a0febce8c0738e"],["/archives/index.html","055504bb6bfd8d82e95b23a6b99c99a6"],["/archives/page/10/index.html","f3ae994a67fe655a69380e07b5af42cb"],["/archives/page/11/index.html","55fd4ce600d3bf8227f1e4f5f1ae9220"],["/archives/page/12/index.html","cd54cdc4094d66089b11ed072e5a89e7"],["/archives/page/2/index.html","e0409659c240d641e10dd32b329361ef"],["/archives/page/3/index.html","93c1fc74135ce6608a4f56466680c0d8"],["/archives/page/4/index.html","8c11085d3784e44d6a38c90d5728a38a"],["/archives/page/5/index.html","3e7c50aa397b627bb2295ea66d67c7f1"],["/archives/page/6/index.html","8575f70e0c7bef562d32c3af69ed0b93"],["/archives/page/7/index.html","98ad12978d90fc7eb9a5159405984800"],["/archives/page/8/index.html","18a30af2cb42f5d120c89e5d24cbc201"],["/archives/page/9/index.html","6533de319fb3e9a1f11f0a7f405a2791"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","8c27c961b61244da48b58112bbe1d115"],["/categories/dxz/index.html","9db618b21e30348415fd9a6156608205"],["/categories/index.html","f9510e6f395a468647eb06f4904013ba"],["/categories/linux/index.html","802c5a8daa50a71bc337af5ef68c81e2"],["/categories/python/index.html","0defbd0776c4d295017976b9ba836f56"],["/categories/tensorflow/index.html","ece5d151cce14412756a88649f8a16bb"],["/categories/图片分类/index.html","b5bf1ee1efa1b1c42353b35afdbc9a49"],["/categories/工具/index.html","019f7aca39fa87ed51a48a6bb8db4ae7"],["/categories/工具/page/2/index.html","628ed80d79d69d64a2c7ec5697b9ea60"],["/categories/强化学习/index.html","1287b10ed7a6d2a33874e504b49096df"],["/categories/数据集/index.html","c6c1944dce85fec5e9318f68d1b6630f"],["/categories/日语/index.html","ecb65e806b311313c36b07278533230a"],["/categories/日语/page/2/index.html","fd3feb1341d8e9954a21393a59288a99"],["/categories/机器学习/index.html","ca78b46a90ec3809f58bab238508c9b2"],["/categories/深度学习/index.html","49429cfa842a786c9e3476206966350f"],["/categories/深度学习/page/2/index.html","64896b07f13dcc26050062baf84c9fbf"],["/categories/深度学习环境配置/index.html","5eb699abd89b181f1175be46b53ab3bc"],["/categories/深度学习移植/index.html","25e8a4d716ca742a4597546c749e3a50"],["/categories/计算机视觉/index.html","076d993355603e8277431c4f6185ff80"],["/categories/读书笔记/index.html","fe8e159c28a6c0bcd3e8efa3686ec79f"],["/css/main.css","3f483b0abc8f0dc4e96ac387195b1c84"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","8de2ac2286df2db302325e1dc5719f51"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","790463201558caaf2a8db8395430cfac"],["/page/11/index.html","4d69d6a0850beea928fbe70f1cbdeab5"],["/page/12/index.html","48cab9b8a6df588dae63084f71e4cdab"],["/page/2/index.html","848924c54ff651067d2b941cb72f618a"],["/page/3/index.html","1b70239c26bc501557770a20a9a423c3"],["/page/4/index.html","f99975a133c10179fa21e2826cf274ee"],["/page/5/index.html","a1b23cfe30b333ca5676ada347b2aab7"],["/page/6/index.html","0b340349f8ba7367b7c9b0cc741f98ca"],["/page/7/index.html","5820f22a005f310547ecdeb0a0287617"],["/page/8/index.html","54f9ffe8e35868df242fd1700fff8e43"],["/page/9/index.html","f824be54b9e066674f75d8f163d62771"],["/sw-register.js","3ba2979cc22011a0482caa4ec5e19c95"],["/tags/AlexNet/index.html","5e96a80cb29f87c8cc7c765758c2d508"],["/tags/CNN/index.html","f81e0e7b5faff0383a53ec0c036d4746"],["/tags/DCGAN/index.html","f41a51dea132ebc759c2e0b7c285e152"],["/tags/DDPG/index.html","cdf0235ed6c4bf223b9d2a335ed64695"],["/tags/DDQN/index.html","0b0a2582f10fad82b4eface44b284f92"],["/tags/DQN/index.html","8bcdb96d2439ab91327b73c5edab2b98"],["/tags/GAN/index.html","739fd31be61cac7c170e5ba8e2b83e25"],["/tags/IRL/index.html","9b99380662a8518440e47601063893f5"],["/tags/LSTM/index.html","cbfdaf722890011efd79ebe27ae6d52f"],["/tags/LeNet/index.html","71ee855ad06b8a592630ce58390a4f9a"],["/tags/MC/index.html","32fcc1649a4cc2f1b025ba4cd1a4365e"],["/tags/PCA/index.html","270d830bcdd071a225dd58ee45e4715d"],["/tags/PG/index.html","323bf75f59ec03585d28e592cea2c9e4"],["/tags/PG3/index.html","1730f086f93a5dbfa2a67dbb999ced96"],["/tags/PIL/index.html","f1aa97aadd92487dc3f269e8e0632d4c"],["/tags/R/index.html","80ea10c64f544bd7140260edf94f7638"],["/tags/RNASeq数据下载处理全流程/index.html","dca52a9ce1f948cc0a74cbabe28bda71"],["/tags/RNN/index.html","af756c7f0abae48d32977539cd5b336e"],["/tags/SVC/index.html","a6fbdf8e29216e241d7cd5148b0b63a2"],["/tags/SVD/index.html","1bbe1de09a519defeb6a7f7b87f40528"],["/tags/SVM/index.html","9559c815f52e4086ef78a35c45f1ae4a"],["/tags/TCP/index.html","5e74fc05f425272207091371ddad483e"],["/tags/TD/index.html","d0a3050c223b2a76696665c6f91965f2"],["/tags/TD3/index.html","2acd523e51fcf636c1e481402cbbed13"],["/tags/VGG/index.html","3c3792bb5cc0ea81fe2bc788e5b9fe72"],["/tags/amd配置/index.html","244a6d5ca3d4764a0e549fefb8d1cf39"],["/tags/anconda/index.html","35cebf7a0a3b3be709b04e14e4f31adb"],["/tags/conda常用命令/index.html","4f6df2528cff763e1fa4892772870152"],["/tags/cuda配置/index.html","f3b443b794fb73a2abfb07f65cba750b"],["/tags/docker-ldap-mysql-arm64/index.html","3c3c8caec40f7f768e8b2334851b85f5"],["/tags/docker-ldap-mysql/index.html","3df2b5f638606a5397b2c248f367158a"],["/tags/docker代理/index.html","1daa862c2fda48207ccbb6ed8854ffa4"],["/tags/docker安装/index.html","50953bd1018e95524fd0c346fc439dd3"],["/tags/docker容器挂载硬盘/index.html","f63b24930f30d7a38b778a0bd6bb9333"],["/tags/ffmpeg/index.html","979224bdba982711f5888483b3b786fc"],["/tags/github上传代码/index.html","8d8c4a508364ec664dfd58168dafefc9"],["/tags/hexo/index.html","b7ad3f3ba65524e7a108f3f60bed24a8"],["/tags/index.html","1830107a5f7948453f7415ae18a9037f"],["/tags/java调用C/index.html","0f79956ee841b75e3a0b04b1fdc1f917"],["/tags/kaldi/index.html","534a65a93f0bf82670f8baa85df37008"],["/tags/linux命令/index.html","91ccc0192846cf2b67e3f3919a812a6c"],["/tags/mamba/index.html","bb9bffff2dfe0a754f33688232bcf75c"],["/tags/markdown/index.html","b207c73d98482ff69d9114ce98e32a50"],["/tags/matplotlib/index.html","fa39cd205ae606747be757c76691efb2"],["/tags/numpy/index.html","42f89d65f1420ad66902aa312ee39e9c"],["/tags/opencv/index.html","27c2b40a46f4e869180ad601e102f525"],["/tags/pandas/index.html","82fec764aa4bb312f5d93499901ffbb9"],["/tags/qq/index.html","5ad004c706d425348cb27573b95d872d"],["/tags/requests库/index.html","b52db72739a88b4f8427e90d08b10d81"],["/tags/rust-多平台demo/index.html","632336a3265d10d1725799db91942857"],["/tags/sacred/index.html","fd5a56b2bd7ddecc7df28e7fe16d697e"],["/tags/ssh-远程连接docker/index.html","a6bb1d2934197383488b0b88d9be052d"],["/tags/tflite编译/index.html","c32a190a3e1e5232a60d195004a55d40"],["/tags/tflite转换/index.html","87bd9b84832d0a3e5579af78490440a3"],["/tags/torch和apex安装/index.html","5c45c97a12e255f0f837e0a57424738b"],["/tags/vscode/index.html","d9bf1085a5a06d91137d04a73801d819"],["/tags/wsl/index.html","bb37959bae27356bdf4b2a78f2298d1e"],["/tags/zsh/index.html","55accd4518df239d5ed8d91708c2e8eb"],["/tags/代理/index.html","7fcf0e4a83ff302dbbca09da8b83f7e3"],["/tags/决策树/index.html","34b88a6d7ea37a2099c110f373d6f75d"],["/tags/函数/index.html","721cf92e792c82c9756e1468fc2707cc"],["/tags/列表推导式/index.html","e5376e5fa76ff8afa4ca672811998317"],["/tags/助词/index.html","663a644f812ad6f264afedec23aad465"],["/tags/包/index.html","ff3acadac00af03631fbf82194505c8e"],["/tags/卷积神经网络/index.html","9c3f34452adbbfd98ed54f6ebdb9ab34"],["/tags/双系统安装/index.html","c09950152679ba0024323a579741bce8"],["/tags/反向传播/index.html","9cf7095bfa17a48249ce619c80faf7f3"],["/tags/句型/index.html","e33345c182e749e9e22c3588a0740aed"],["/tags/可视化/index.html","88efb3576a83ec0483ee2ec4eaf50818"],["/tags/哲学/index.html","64bb087bff9e692b63d96b35e0ce2429"],["/tags/图像美化/index.html","29b05c243faa2e744ccf95a1c39e399b"],["/tags/图床/index.html","e2749a7a92a6c49875b1e8d37fe9012b"],["/tags/多继承/index.html","cf0f952203fe0be186ed3df2f72fc7a9"],["/tags/工具/index.html","62c191b462dfa6a9396bee9f3667fdfc"],["/tags/异常/index.html","21ab1d6042046197f9116e3ba11b6407"],["/tags/强化学习/index.html","81ad6747402402b4b7f1df4c573adcdb"],["/tags/心理学/index.html","43254a1b5600e45108e875cc53caf88e"],["/tags/感知器/index.html","1b3c98155811c52c376ee2252b117536"],["/tags/换源/index.html","2e7faae25d01bb627bc80f7f06b61b56"],["/tags/描述器/index.html","1b4b04ad15b2e839aebb2e3d1654c2b4"],["/tags/敬语/index.html","6bb9143a8e5f172c6b664301c43fda72"],["/tags/数据集/index.html","9d71e883047924cef71cb895b5ce4ff6"],["/tags/文件/index.html","72a43cf7b9fb9ef239345df39ba67bcd"],["/tags/服务器配置LDAP/index.html","5140253bb84a24237e59c33aa4bc1ad8"],["/tags/机器学习/index.html","f36887f805586bf32d98a2a74f4441fe"],["/tags/梯度下降/index.html","ca8177bc35fab5de47844794c3940485"],["/tags/模块/index.html","a7302c0fa587235fe4e4c76a044559ac"],["/tags/正则/index.html","3b6ebe6c7742a4726901ab09da326af8"],["/tags/激活函数/index.html","07d524abc35bf31c3b31882dd7f8b8c8"],["/tags/点击预估/index.html","35d575bbe893d26d9e0cd00bdda21308"],["/tags/爬虫/index.html","908b827899fbc632012177f07b9600a1"],["/tags/生成器/index.html","0a08ee7319e0b2744d2334d62d524ca8"],["/tags/类/index.html","d500ab4daf82b74325f05beb496e12ab"],["/tags/线性回归/index.html","cab87c1a4f763c37a5ebfbb1ab660229"],["/tags/经济学/index.html","2b8ae624eb690593c858e10ae251838f"],["/tags/聚类/index.html","6338b4d19e20c0687ba4f52f2321f61c"],["/tags/装饰器/index.html","acb3e88d502a284c105986d16e81ed8d"],["/tags/词型变换/index.html","28c4b49d71058d549887e611568bfc99"],["/tags/语义分割/index.html","170bbf8c55da93fd2f8ef5e1902e75d0"],["/tags/语法/index.html","c743d1224a95229dcc9ebf1f8d195e90"],["/tags/语法/page/2/index.html","76471a6962a973f917a804098340ef1e"],["/tags/迭代器/index.html","b95709adc377fee3955377797dd177c4"],["/tags/逻辑回归/index.html","24f19b364a4ae9e407f316841ead9033"],["/tags/随机森林/index.html","c840321e2bd67034e2571ca435caf100"],["/tags/魔方方法/index.html","ac895364e80e46d43c44858918ceb9c4"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
