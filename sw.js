/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","06a1e336b5d572f796dd5640fd7e4583"],["/2019/01/02/Anconda常用命令总结/index.html","f113af7145d0168f19777d04b8d7c21b"],["/2019/01/02/句型/index.html","d0ec00433852fcbf0bbac26588d76987"],["/2019/01/02/日语助词/index.html","1720c8e454b09e0693023604c4877aa1"],["/2019/01/03/on-my-zsh/index.html","8104fb599970516ef805597867703e4f"],["/2019/01/04/《当我遇见一个人》摘录/index.html","f0087b548ee7b926d44047ac3ec812e3"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","8157fbb317918552e39c83fc6545506f"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","71dd05e7340ca477808d05508e2c0f79"],["/2019/01/04/经济学笔记/index.html","074df1c6e059cb2fc330975b79ed3a43"],["/2019/01/04/语法总结（5-15）/index.html","b61aab378c63e0330255e9288d6a96fa"],["/2019/01/05/linux常用命令/index.html","340db820197771763cfd4274a1414a42"],["/2019/01/05/mamba/index.html","c1a22a333da87f2bed3567ac4bf8e38e"],["/2019/01/05/tflite编译/index.html","ceec57cbbf65387204541bea50949fa5"],["/2019/01/05/tflite转换/index.html","b6f4e8a67561d771d2cc31214e22321f"],["/2019/01/05/torch安装/index.html","f72777c8a466999fe1d80f0b22988ba8"],["/2019/01/05/vscode/index.html","3ba1f66a36619bc3f15f506ef8ea7abf"],["/2019/01/06/敬语/index.html","cabb941de1dcfb1db5a762fc8f60963e"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","2dd2dd5f157990254a8dec124a211bce"],["/2019/01/07/RNASeq数据下载处理全流程/index.html","9297d1c7bb1e31bb67b0658ce0d62ccd"],["/2019/01/07/cuda 手动配置/index.html","81d92c8b0d22146626d20e9bfd45b680"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","309db0d2993ad26e7f21cb9ac33ae436"],["/2019/01/07/docker-ldap-mysql/index.html","dbc218afb2599f461745d101029b36d2"],["/2019/01/07/docker代理/index.html","5461d12ad3c5a0e559288e1621f02809"],["/2019/01/07/docker安装/index.html","28b78c7b8720a427b31a5a37ec5195f0"],["/2019/01/07/docker容器挂载硬盘/index.html","c65bd509dda65d924b5611013762343e"],["/2019/01/07/github上传代码/index.html","c931f7e4c96ee1f9e9def46f681c251e"],["/2019/01/07/jupyter配置vpn/index.html","c6f09db711e1e22c613fb66d7aba7d9e"],["/2019/01/07/kaldi 安装/index.html","ed41ae13f9f6c311e63d1061bfc251e2"],["/2019/01/07/linux常用工具/index.html","dbc6d2e5587da65fddbdfb2e2eb8b597"],["/2019/01/07/opencv/index.html","4d0eebe7ae7578c1d727d9d9ec76143b"],["/2019/01/07/ssh 远程连接docker/index.html","264a0062a92a4d40b171c0f8fa18ef87"],["/2019/01/07/导出/index.html","efa957bd6eb60769e80476c2493de975"],["/2019/01/07/换源/index.html","7a922a06a1c97e8331f435231efb4e81"],["/2019/01/07/服务器配置LDAP/index.html","3dbc93d5d7dba1d22d077e5cf1698ab0"],["/2019/01/09/markdown/index.html","7b015698296975aa3b88b95ec526ad66"],["/2019/01/09/opencv图像美化/index.html","e7be9a4fc7e14a90c32eb96388466c0d"],["/2019/01/11/19单元语法/index.html","e2d56976eabbe9c452c53879277a6fc1"],["/2019/01/11/20单元语法/index.html","f128367fffb1c256bb48533084a2a78d"],["/2019/01/11/opencv-图片几何变换/index.html","28d26064bb6cad9083bc2089344c475b"],["/2019/01/11/opencv-图片处理及绘图/index.html","831399f7b182f2383971b0d0f7b7f2bf"],["/2019/01/11/wine安装qq/index.html","49cbd027cfdf3728233b10ddc3f7f9ca"],["/2019/01/12/tensorflow-可视化/index.html","dabfb0bc2724dd9e5c52777600de460f"],["/2019/01/12/tensorflow-基础语法/index.html","4a474442568477442baff864cdab4e47"],["/2019/01/13/RNN/index.html","961c11879750f82c1c5d425bbfefbe83"],["/2019/01/13/keras实现CNN/index.html","c31e9e55938f9b0aba72e435ef0ec43a"],["/2019/01/13/卷积神经网络实现/index.html","37ad6c3f56d4cd2d74a7191c05e7908f"],["/2019/01/13/循环神经网络RNN-写诗/index.html","6fe231266bca5ca9bab15967d166c958"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","f1546ee68130bb43d95ee9b73544ef75"],["/2019/01/14/反向传播/index.html","561fe1deeca3fc7717b0404de3b006c5"],["/2019/01/14/图床/index.html","a4f6ae329912070612b961ecc9bda766"],["/2019/01/14/感知器与激活函数/index.html","96d2a34cae04313d072143685d5c38de"],["/2019/01/15/PIL简单应用/index.html","372b04e47765cc7905727e4e79f3662b"],["/2019/01/15/卷积神经网络理论/index.html","05bbbae5585b744555513d1a1e7e88de"],["/2019/01/15/图片分类之pca-svc/index.html","546024656c732fc5c039c7e50c52bf7f"],["/2019/01/15/强化学习基础/index.html","fa673b2d1e9fbeecbef6a6b5a421b125"],["/2019/01/15/经典神经网络/index.html","4f6386b9101ed8dfaf190545dc2147ef"],["/2019/01/16/DQN/index.html","e718baefe06362f3b635f6245113dff2"],["/2019/01/16/TCP传输图片/index.html","c26d4dc9633ef8aff704d271ec85e983"],["/2019/01/16/时序差分学习/index.html","d4f7b8c99ae287afcecacd0f95d70e46"],["/2019/01/16/蒙特卡洛方法/index.html","63a4fa5736a73232ea3573dae1996c11"],["/2019/01/17/Double-QDN/index.html","1799974885582b09991f1b4292e5890b"],["/2019/01/17/RNN理论/index.html","465abc1f85211d966761d825e4efdd9d"],["/2019/01/17/梯度下降/index.html","47e84b862b65b46ae2ae30716b5e4c38"],["/2019/01/18/PG和TD3/index.html","957d29c8257addff215645cec6042a73"],["/2019/01/20/21单元语法/index.html","430c7e37fbf3d813cb7efa27807929da"],["/2019/01/20/GAN理论/index.html","3a68668dd6adaa05ec8174539d057ad5"],["/2019/01/20/PG3和IRL/index.html","ab7303fe1b7479f77c2de8719386dc57"],["/2019/01/20/数据集/index.html","11833bf715718b5ed565fa4cabf14fc4"],["/2019/01/21/DCGAN/index.html","611a49739911772cad191058b9fe7736"],["/2019/01/21/LSTM/index.html","7be52d54379d21a8442684d378cd9380"],["/2019/01/21/点击预估/index.html","9dde2a669044ed241084b70c604e44e2"],["/2019/01/22/SVD分解/index.html","ce61a9958d30514222ee33fd9c38f64f"],["/2019/01/22/SVM/index.html","57322841f76042892a85d14cdc3d588e"],["/2019/01/22/机器学习简介/index.html","4d57c600083ba903b0cd021d3468afa3"],["/2019/01/22/线性回归/index.html","30edf98c4e9dc18570902c8253ddf2b2"],["/2019/01/22/逻辑回归/index.html","b1a10b7593191d2db94cef05a3873a37"],["/2019/01/23/numpy/index.html","02f66696a5ccf91c7387de52a658cc9f"],["/2019/01/23/决策树与随机森林/index.html","1e6ff572f98c62bbd25a4f3546d363d2"],["/2019/01/23/聚类/index.html","256aeb6898c90423d7585f84d3e447b2"],["/2019/01/24/matplotlib/index.html","46e0299e3c38b11277af87e46fd3f1a7"],["/2019/01/25/pandas/index.html","2f6a7e5af748fdfc2d781bbe52c596bb"],["/2019/01/25/语义分割/index.html","caaa4a238ec23c4ca55fe4022a80a9e9"],["/2019/01/27/22单元语法/index.html","70aaf57a65d419436477ffb2cd05a90b"],["/2019/01/27/SVM案例/index.html","134f01846447af15dcf6e49cbe581707"],["/2019/01/28/requests库及爬虫案例/index.html","84a0b666ca0aebde046a53fa8625d037"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","8707c2f305253adbea968c96cc15b139"],["/2019/01/28/异常/index.html","6ab704428872435ae6f2d2f3da047c5e"],["/2019/01/28/描述器和装饰器/index.html","f513770fa86737f47911edb4e5dabb64"],["/2019/01/28/文件/index.html","f30a487c2940047b14d07831d1ba2194"],["/2019/01/28/正则/index.html","5683b12e3d78300c1ae6b27027adaed7"],["/2019/01/29/函数基础和函数参数/index.html","b85ed84ce21c536a89e837e101f22412"],["/2019/01/29/多继承和魔方方法/index.html","01934b0abfb2e6c8979cdafaf9764840"],["/2019/01/29/类定义、属性和继承/index.html","129dcfcd6c6ae2dfbeffb5e414061d64"],["/2019/02/27/23单元/index.html","e0f8674af9448d8f58ce2fb69d5388ea"],["/2019/03/12/hexo加速/index.html","4700d32d32a7c3f237a6da0753cdd5ba"],["/2019/03/12/hexo系统重装恢复/index.html","0cc225ee969e12e3f30e3d6d35a8bc43"],["/2019/03/13/24单元/index.html","2b1506cda7e8084170e9c7938adbea72"],["/2019/03/19/25单元/index.html","1312f11eab493bc29d8f3cc8e3b76f49"],["/2019/03/26/26单元/index.html","c8f042010ae500399a06359193d3cd3a"],["/2019/04/14/27单元/index.html","109af1f8df734f39b9b7efa9ab71f81e"],["/2019/05/01/28单元/index.html","d4fa924c2b98b18fb5107c7313bdc955"],["/2019/05/02/29单元/index.html","6c13fb799b1e9071807fb0cefebb36e2"],["/2019/05/12/30单元/index.html","9482eef2252f02801b4d15f943d07a28"],["/2019/06/03/jni/index.html","8c1f102383503af0af705a1e5da50ad8"],["/2019/06/07/JNA/index.html","bc41774efd6b2425259e083632251ec5"],["/2022/08/07/R配置jupyter/index.html","5901c137f806cbd836d422d0fd0eb940"],["/2022/08/18/FFmpeg常用命令/index.html","8d52a05e0b8bb907d218238ea67cb8e5"],["/2022/08/18/linux系统代理/index.html","fd303a0889c42a47ca1ecc693819d438"],["/2022/08/18/matplotlib补充/index.html","b00c4d64f9700658def7fd37950c8ed9"],["/2022/08/18/常用命令/index.html","cb9a181b9c118cb7a358a06d681cc095"],["/2022/08/20/rust 多平台demo/index.html","44111bdef4f74301428acf8916e1a17a"],["/2022/08/20/sacred/index.html","ceb3323ce26ac1cdca291b267aadda9c"],["/2022/08/20/wsl/index.html","d16219288b1d9f67ea5eb80c6d8191c6"],["/2022/08/20/双系统安装/index.html","ac667e7d0434fc2d2b7b2e958dc315fb"],["/2024/11/08/source/index.html","edd2ab46750b3fa981ca6e2daefcdae7"],["/archives/2018/12/index.html","1a4d74525415dc2428c3a8557e6203c5"],["/archives/2018/index.html","6f4ec6e246b9a8177681d972255e6e4a"],["/archives/2019/01/index.html","92b762ada59b9b4a58500d1c6dc78bbe"],["/archives/2019/01/page/10/index.html","940ad322f3b2b04fbb309e4dfe0ec792"],["/archives/2019/01/page/2/index.html","ed8ab9c1915320e539790f055b75c298"],["/archives/2019/01/page/3/index.html","92db823da427f311f36d2e6da68241fb"],["/archives/2019/01/page/4/index.html","770b268c514c80724dc3e3756d51641b"],["/archives/2019/01/page/5/index.html","701f546f69444ea1bca4fb02f47a76f4"],["/archives/2019/01/page/6/index.html","7fecb428f13c36be35732bf77302782b"],["/archives/2019/01/page/7/index.html","f67d351eb9a2b9860a5b2c7288622eca"],["/archives/2019/01/page/8/index.html","8cd83cb6bea49d71c2a47fed8efa4c21"],["/archives/2019/01/page/9/index.html","8e9d2b6265a1d421276d0d6a08298e46"],["/archives/2019/02/index.html","865f99e2cfad137b063d3490b09cb02f"],["/archives/2019/03/index.html","04182a7bbfe670cd5b06fe5ade02b812"],["/archives/2019/04/index.html","28b079491c481e536400afecec17ee9e"],["/archives/2019/05/index.html","154d186fb31258532d13596eb865f24e"],["/archives/2019/06/index.html","9947cfeae55438142de59db8a5c8b8ba"],["/archives/2019/index.html","75ea289874611611e195eb5263491927"],["/archives/2019/page/10/index.html","9bb7ad392a066c87b8b7b14b1adbbbde"],["/archives/2019/page/11/index.html","bfeb459fa074a3bfbe2cf5cd0e109376"],["/archives/2019/page/2/index.html","a1f3a0410c3a13723afa702d5d24f26a"],["/archives/2019/page/3/index.html","400829a18418243fab2d6f6793349d9e"],["/archives/2019/page/4/index.html","c8ff987fc4f84db859468ba0b27a2559"],["/archives/2019/page/5/index.html","1686556db16cefa9e2d53e1ba70f4005"],["/archives/2019/page/6/index.html","d4988158c853bdb8d297c5b2cf5654e9"],["/archives/2019/page/7/index.html","1e1d57b9933214104795f61ddf77aab4"],["/archives/2019/page/8/index.html","a4dc915aebb221367eb8e17d1618847d"],["/archives/2019/page/9/index.html","57a34c077c0214acf0152232b1bfe17d"],["/archives/2022/08/index.html","6d58dbffb52cbbd813ed6e89fb4a79dd"],["/archives/2022/index.html","fe8db916afd7f7f7712b06f503d5d58a"],["/archives/2024/11/index.html","6a99bff0ef1e05d8ac2bb2d5994df350"],["/archives/2024/index.html","e289796e233841b5db064157eacbd569"],["/archives/index.html","3bddb9f728df1ef32aa2934236dab738"],["/archives/page/10/index.html","ace9eee6463f40cf1e9b55ad59cfbab4"],["/archives/page/11/index.html","c55e21c16268730e77365f870de5d7bd"],["/archives/page/12/index.html","349262175eb48e1e10c53f023613ce12"],["/archives/page/2/index.html","94d974fff3195afaacbe555543b37a05"],["/archives/page/3/index.html","be668256d99316a3ee32bfc1723af77c"],["/archives/page/4/index.html","6c62aec20218a4148751e95ea005fd14"],["/archives/page/5/index.html","58229d82c663eaf93c855a3d645b252a"],["/archives/page/6/index.html","6da7ade198a9a76b810c66b4610a9703"],["/archives/page/7/index.html","14ad8c9fb091b4d223c466fc896b7772"],["/archives/page/8/index.html","a29ef0b93eaaa811b6419b3718ad2dcc"],["/archives/page/9/index.html","beddd0670cd6a72b95108141be5edcf1"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","13ded9df94ecc6f52ff80637219badc2"],["/categories/dxz/index.html","a54cd994e5b4a919ffda3778faba9809"],["/categories/index.html","6818362725c01681a6d168919a0ef410"],["/categories/linux/index.html","fabe490701c74021579b4d1bffa5a4a3"],["/categories/python/index.html","48081e6398b0420da4bfbd1ac2d4343e"],["/categories/tensorflow/index.html","530dba83b6ec6b82393fd89f02a7d7e7"],["/categories/图片分类/index.html","8350cddfc421d0dfd2abe209e0cfc379"],["/categories/工具/index.html","99fb0b528a933cff0bd749b38d159bea"],["/categories/工具/page/2/index.html","4c96dbe8bea0bc8789378219eafef43f"],["/categories/强化学习/index.html","fc365dee327f248c7443d3a915e2bb84"],["/categories/数据集/index.html","474abc6d4eb493107cc03036b7fe1282"],["/categories/日语/index.html","9aec0ae4c1d5f8a348e92b4d0acbf4dc"],["/categories/日语/page/2/index.html","179691782fb6e5cda75d6f73128c9260"],["/categories/机器学习/index.html","8f43bbf6fba3ae833180895e8f35d60b"],["/categories/深度学习/index.html","480566f2455a6b31959035f23c0e44dc"],["/categories/深度学习/page/2/index.html","8621fae02703cde56b788148193c0f48"],["/categories/深度学习环境配置/index.html","f79cf06ffe038f92a10c744434b3f24b"],["/categories/深度学习移植/index.html","961383df99f720e716ee3b93ac63368b"],["/categories/计算机视觉/index.html","723ee0f382d459270fb723803d3f9ed0"],["/categories/读书笔记/index.html","d6193f8f1e2cf3ca6abf8df74fe7a391"],["/css/main.css","ac8febdb46bc5e465607dd2b73a8404b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","4e4c2c30499fbc42b6981bfd056d95f9"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","be9d93b835fb3bda6d9f9d4b54985be2"],["/page/11/index.html","60f2a1fa8f73b47b34ca9688077c6330"],["/page/12/index.html","1eb6677e995d37e322f395e1f8a4b40c"],["/page/2/index.html","013d63c9b4f0d88a2b1cfe0f2d63565e"],["/page/3/index.html","d856b23ac9fe12e7284e20ce3166bd41"],["/page/4/index.html","987f22a216f0fff5e28a3962e8ec61dc"],["/page/5/index.html","863bebecd3dd8c6d9d41a12e71258eb1"],["/page/6/index.html","1128790cc26e015ebfe04d8172097689"],["/page/7/index.html","b35763b11fe60584a69436d410d6b3f7"],["/page/8/index.html","8288cf633bf86db3028329316d98d649"],["/page/9/index.html","d7fe61f0c97181e77578b5ff99b98a88"],["/sw-register.js","66e8c0484ae95112e6ab96da1c653f7c"],["/tags/AlexNet/index.html","d23e3183693829df3b2808b2b8b7d931"],["/tags/CNN/index.html","7964a7981e8d956f409ec72598421624"],["/tags/DCGAN/index.html","75350038fc691399f78b6568fc40fa8b"],["/tags/DDPG/index.html","b21a8fdb64d7424a6702d08ea9c4e82c"],["/tags/DDQN/index.html","ac85caae1da8bc558c35047bde71c2a7"],["/tags/DQN/index.html","3ae4f5cd857eb41a94763be73745fc3b"],["/tags/GAN/index.html","4a799f038211321a54d065f1ae57f035"],["/tags/IRL/index.html","6c5dffbcff6bc89e2908f452acbba001"],["/tags/LSTM/index.html","dff219d73ab0473e2532ddfee32bd6c6"],["/tags/LeNet/index.html","356340dd6f32d942d87149a9e267613c"],["/tags/MC/index.html","0beadbebb0690c3df29d727e969b513b"],["/tags/PCA/index.html","03a7dbf2e4ce46503c18a0ed0d5fd2cc"],["/tags/PG/index.html","4bd05e1ea4842037b20a9bc42f2c7413"],["/tags/PG3/index.html","97169e2e9bd5c8ca5b36f76948a9d469"],["/tags/PIL/index.html","baa370894c93bca4d2d58cdf9b78a292"],["/tags/R/index.html","34134cc05b3a3cbbae66c2bd0c4bb823"],["/tags/RNASeq数据下载处理全流程/index.html","7f7b5a1d9600ed281a1f2041a4c3ef95"],["/tags/RNN/index.html","4cbd5335615d2a828267b19044c003d8"],["/tags/SVC/index.html","6b815bf8f1d1234d55a92420f8fd8118"],["/tags/SVD/index.html","7929271f8fe3adb02377e6a21d8fc821"],["/tags/SVM/index.html","ad4ca4e011568faf76136ac0ba765574"],["/tags/TCP/index.html","22afb2ca16110f199dbc780342a787fa"],["/tags/TD/index.html","25539a5227da88d703159fc53353a424"],["/tags/TD3/index.html","ba47b8041de356de83e41a7fd66a1dc1"],["/tags/VGG/index.html","8c075a2d242ea4a033eaf499617f16d8"],["/tags/amd配置/index.html","385aa1309e36f858e20a7e1236174fe7"],["/tags/anconda/index.html","748d5590130140871cabca2702005ac4"],["/tags/conda常用命令/index.html","af489b72703656028ef5a8ac6eb99a97"],["/tags/cuda配置/index.html","2b03c722a1c90ca2e23257f3994ed31e"],["/tags/docker-ldap-mysql-arm64/index.html","aac2e41f13afb65eff2593ce8f068121"],["/tags/docker-ldap-mysql/index.html","5de2c2766cc68901c5a18dded05f6af3"],["/tags/docker代理/index.html","4e937e0f60754fc6a048d8813514402e"],["/tags/docker安装/index.html","7d69eaba041a823a27ae36df03a5e717"],["/tags/docker容器挂载硬盘/index.html","550dd50ab79ff22069d5ab14a29f6db2"],["/tags/ffmpeg/index.html","550560ec783d96dfcd3f4687e3ee9335"],["/tags/github上传代码/index.html","cf1c7d09e2eeff05a9cb8c9c81e7bfbf"],["/tags/hexo/index.html","d585778341115224c17e62a7fd1dca9d"],["/tags/index.html","3ff7a90630415c2307bbe82d204047d2"],["/tags/java调用C/index.html","27673bc2511755535d1a3053777542c2"],["/tags/jupyer配置vpn/index.html","a98f7cff6da683486c51cb18ea94ba47"],["/tags/kaldi/index.html","06769269794f61923fc6575debc62dd2"],["/tags/linux命令/index.html","417a84f0b1005fc1283b6c885a1b1f9a"],["/tags/mamba/index.html","9918c4d5634b8b999d39a2cf51790310"],["/tags/markdown/index.html","63935b4cef9943f94fcf326de9f0b526"],["/tags/matplotlib/index.html","96f8ff76445ef61350df471caabe0982"],["/tags/numpy/index.html","c1682878adbdd53dc7980f5af28aecb9"],["/tags/opencv/index.html","d96b803895df7c2ed90bf6480710676c"],["/tags/pandas/index.html","0382f946f9c2b19fb41ec78b468bb55e"],["/tags/qq/index.html","cdbf84df2ba5c64af3adc142a7df4654"],["/tags/requests库/index.html","d906142e76447ee079d570260ba8f442"],["/tags/rust-多平台demo/index.html","2f31a261306d84ea45b8c796ecf1eee4"],["/tags/sacred/index.html","6727d502c3f786af5ec17446ce111e00"],["/tags/ssh-远程连接docker/index.html","0d8598076d0a5f9e7b42f05138074e60"],["/tags/tflite编译/index.html","d44fa990117957f9852733d4718bfb38"],["/tags/tflite转换/index.html","d79dc6c0ff500a4e162c58627480f0ed"],["/tags/torch和apex安装/index.html","03c96188150cec2662fca279765ff79d"],["/tags/vscode/index.html","83926bb59cdfe55a230b5b65715e7cbd"],["/tags/wsl/index.html","fcc88ad7bc798b4af1c72b7d68b0d458"],["/tags/zsh/index.html","1a8474c328c4b1378575bb4cd45869f0"],["/tags/代理/index.html","61adb98efbf6ad25c0a019eb7c42fb36"],["/tags/决策树/index.html","930873fc82fbf855a7bf0a9b4fab8a14"],["/tags/函数/index.html","11ea34c19105cce8b7cddd72e6845b55"],["/tags/列表推导式/index.html","9b9a2162147008187b35f79770cb1511"],["/tags/助词/index.html","e5753f37b19676919fd22ff3a793643b"],["/tags/包/index.html","be0ca32eb9a637d92e73208c4493e403"],["/tags/卷积神经网络/index.html","b240969d89fc2e462d8355360eec36cf"],["/tags/双系统安装/index.html","2387d6990f10ed6b0607efab75246c44"],["/tags/反向传播/index.html","4805a8913c078e9e35b33714e830f3cf"],["/tags/句型/index.html","1e67622b20bcc0eef0eeafc2a49b0164"],["/tags/可视化/index.html","85bfb82161f23e591be6cbf643210630"],["/tags/哲学/index.html","0700763b1ff9e0624cacffc547782b68"],["/tags/图像美化/index.html","a98eeb410e844723887f58aa059af120"],["/tags/图床/index.html","7ab58ae292429c4c26f581e9578f5056"],["/tags/多继承/index.html","dfb6bfeba6e3568a7e66d1b93913274c"],["/tags/工具/index.html","dfc7a831f88ba562fcbea3958ba30199"],["/tags/异常/index.html","1c29f342e059f73a50aadbd93e15865c"],["/tags/强化学习/index.html","2af621d2c7607d1c36d2f4e319947f4f"],["/tags/心理学/index.html","4b59868c1f9a6deb7e8d60adb45a0319"],["/tags/感知器/index.html","0937fe3d75aaf9de57a94fc6e270291d"],["/tags/换源/index.html","8fb69ac2116f1d64ebcc1ba321a98ee9"],["/tags/描述器/index.html","f76ed623f983d0310f52c607ad41a16a"],["/tags/敬语/index.html","294dc711ae1e883d8eee25e48a33b6d5"],["/tags/数据集/index.html","550bfa5fa0d1d67916f20c0dc6558c4e"],["/tags/文件/index.html","973dfe346474f8057545d819256b6f5d"],["/tags/服务器配置LDAP/index.html","305c061dc636acbee905a24e144c676d"],["/tags/机器学习/index.html","403c48cbaf483fa3ea58dd9d0c035343"],["/tags/梯度下降/index.html","063b6eb0ba158df83aea20e0cefe1d7c"],["/tags/模块/index.html","32114b3f3d86ff61238c47b48f16219e"],["/tags/正则/index.html","c91093cd74ab38c3cbe3c32cb8c9afa7"],["/tags/激活函数/index.html","4d9183c39bf5afc22e6407a7e029f70b"],["/tags/点击预估/index.html","bd098d382eff09d69537c096c9a94c6a"],["/tags/爬虫/index.html","d2e18bb51a65d624dad12bd7403de40d"],["/tags/生成器/index.html","9ea7e08abab63d451d740d647cac6233"],["/tags/类/index.html","692ee30e8e072c7e20253b732ad1c60f"],["/tags/线性回归/index.html","3f8194247718d350b35102ed9351bb1d"],["/tags/经济学/index.html","0ad85697493f875f1ea7745553804ee0"],["/tags/聚类/index.html","1f1193e403da6afa3fa6c5e17d57f635"],["/tags/装饰器/index.html","5f60dbad8f0b2798ddf572a0dcbc68c0"],["/tags/词型变换/index.html","e7d435aa4b46974f13737bbbe822059b"],["/tags/语义分割/index.html","9671361716d5f23e6de0471a8c6bb7b9"],["/tags/语法/index.html","c2d340cc316958c49adc46297065f353"],["/tags/语法/page/2/index.html","c1e3ee9ac5954c5c1570e781a4d48f5f"],["/tags/迭代器/index.html","adfa9fa630796be8cc2debbdf2eba88d"],["/tags/逻辑回归/index.html","4211a08f403346636a2e93499ce16aca"],["/tags/随机森林/index.html","6d09fc80a5ea0f83de3508a81ac0b14e"],["/tags/魔方方法/index.html","18c38169a92f88f2d069a6a8dc564c97"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
