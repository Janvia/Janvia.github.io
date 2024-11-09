/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","4e8c1c8c800ecfa2db7f933e0ae34feb"],["/2019/01/02/Anconda常用命令总结/index.html","08f33cd95e73e60c282cc6f6dfd75678"],["/2019/01/02/句型/index.html","704d73d5ccb44d957ef28d949efa27fd"],["/2019/01/02/日语助词/index.html","f47f1aed3b500364d5d30aa25c7622ed"],["/2019/01/03/on-my-zsh/index.html","738f7448ea64ebb551e4364f75ec687f"],["/2019/01/04/《当我遇见一个人》摘录/index.html","43c774b487342511aad2b53189d238b4"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","da626b71fedd33c8ed29d0873b81f135"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","519d5299987ed1041f42ea529c359072"],["/2019/01/04/经济学笔记/index.html","a2ecf413a859b4fe01e58a7a24557094"],["/2019/01/04/语法总结（5-15）/index.html","80cd09bd1f6d563ea3fa70d9e9dfac64"],["/2019/01/05/linux常用命令/index.html","6f9a0b53865d31a85fe26371ae9e081a"],["/2019/01/05/mamba/index.html","9371d922c78dcea3f623c2ea0481c1e0"],["/2019/01/05/tflite编译/index.html","9c71e0521f2b635670f16464b0181952"],["/2019/01/05/tflite转换/index.html","9c60780e4aaa85337c8b9b422349665d"],["/2019/01/05/torch安装/index.html","ee1d5fc060cfa2d072768adb40914ec9"],["/2019/01/05/vscode/index.html","c0ac6ea8b4a315658d47decff4384c1e"],["/2019/01/06/敬语/index.html","6b18743175b6ef8ebf507beb9369c647"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","77b85dc6a6dad7fd320e0adc496a2695"],["/2019/01/07/RNASeq数据下载处理全流程/index.html","fac40f20e6dbd3de5d6dbc186666fa36"],["/2019/01/07/cuda 手动配置/index.html","70d248e7383e30d22d12d5d0a7fd0e4d"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","dd721cf9e4c9fb24ba3c2539c674bcf3"],["/2019/01/07/docker-ldap-mysql/index.html","6e56cd7793bbe1060cd745f151759c1d"],["/2019/01/07/docker代理/index.html","8f63ddc0bb9619ee285dc5b2a63c454e"],["/2019/01/07/docker安装/index.html","3a334d502bab719cf56ad3fa7a238c5e"],["/2019/01/07/docker容器挂载硬盘/index.html","85d42667ccb5cee86697a20652f16ca7"],["/2019/01/07/github上传代码/index.html","09f7d3b0674dcf41bd5a141aebd77b36"],["/2019/01/07/kaldi 安装/index.html","f73b7f2cc16d479de806ecc649f5f393"],["/2019/01/07/linux常用工具/index.html","022ac74f62f7084b5133b211e4620d17"],["/2019/01/07/opencv/index.html","910cb067c9d7d62df0c256a52437b7e6"],["/2019/01/07/ssh 远程连接docker/index.html","52a814cbaf16f21d353d492b1ec150b0"],["/2019/01/07/导出/index.html","109e6405b1af7fb580b2a4cea64ff80d"],["/2019/01/07/换源/index.html","8291d852a80e91efc1f5a9be084210a1"],["/2019/01/07/服务器配置LDAP/index.html","cb33cc54e6abb5086ec2ae9f7d1b9b21"],["/2019/01/09/markdown/index.html","c7f19c3e4ef5ae1abfc7da88d3322baa"],["/2019/01/09/opencv图像美化/index.html","a3fa295056d8ae583018ac68ea776da5"],["/2019/01/11/19单元语法/index.html","4b39e3e38d0b9c37e5b55755ca5b5eab"],["/2019/01/11/20单元语法/index.html","2e4103c11025f6a564f3be8f4076ff01"],["/2019/01/11/opencv-图片几何变换/index.html","1275b145f6f5672b1c05cfe14c2750b1"],["/2019/01/11/opencv-图片处理及绘图/index.html","2d1b1aae43d5cd2d2abf3ac37befd2c0"],["/2019/01/11/wine安装qq/index.html","472b192992c3b0f4260ef0eaaeb4d303"],["/2019/01/12/tensorflow-可视化/index.html","d40649ef87b2220165431d9055b328bf"],["/2019/01/12/tensorflow-基础语法/index.html","67c656274ead8e5ada0034f91bcdf7e5"],["/2019/01/13/RNN/index.html","6f2cdbd8bd126f1c8c005570da1b5122"],["/2019/01/13/keras实现CNN/index.html","d7c4de398497195a6c4e435135581228"],["/2019/01/13/卷积神经网络实现/index.html","b119198602a6b747867209a565514c2d"],["/2019/01/13/循环神经网络RNN-写诗/index.html","f16c9744de0f127f348f913b1c95524f"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","02de1908e6dcfbd742ee5a8911c80ef7"],["/2019/01/14/反向传播/index.html","e72928f0631f23d812abd4216950b769"],["/2019/01/14/图床/index.html","92b9e14363dbf1265991aae19c56cb74"],["/2019/01/14/感知器与激活函数/index.html","819dcaf80d2b657eb51ffb1c2edc7da5"],["/2019/01/15/PIL简单应用/index.html","8605f97839e81861546d4b0206afe470"],["/2019/01/15/卷积神经网络理论/index.html","8bbb4bc3f1401f3c179559c64ad08d08"],["/2019/01/15/图片分类之pca-svc/index.html","f3826d53e9846cdab23ccfaf73f62643"],["/2019/01/15/强化学习基础/index.html","f514bfe5082bd49eb7455900aa2a0c49"],["/2019/01/15/经典神经网络/index.html","7bea3f8c586682fb1c4be398ada9d897"],["/2019/01/16/DQN/index.html","1b2e20cde3b7cb6bb6bbe122991e64f3"],["/2019/01/16/TCP传输图片/index.html","a32bfe8cb0fe78a03a5c612c627430c5"],["/2019/01/16/时序差分学习/index.html","00d4c82de62c14862a718838e7c9d519"],["/2019/01/16/蒙特卡洛方法/index.html","43ce7953eff2d95b601e4bd830dd85a6"],["/2019/01/17/Double-QDN/index.html","df956429c05bec79cd27401b299dfbe6"],["/2019/01/17/RNN理论/index.html","1b21e9b029db798db896a3ad37fe905b"],["/2019/01/17/梯度下降/index.html","eac4adefe668a0b82273904a08c6ddc2"],["/2019/01/18/PG和TD3/index.html","520545b2adf77e89896497ed26b9d9fb"],["/2019/01/20/21单元语法/index.html","f35f11cf6bb8e4f6ce40f5e4d81c27c6"],["/2019/01/20/GAN理论/index.html","67e7f7eb89244a27d2b8e82054c515da"],["/2019/01/20/PG3和IRL/index.html","524132a45fe7a24d2688fb42315a7d2a"],["/2019/01/20/数据集/index.html","ca3c4a16ead4859f05023a90ef812d49"],["/2019/01/21/DCGAN/index.html","ef0826c561da7cd53380d152367bbd7d"],["/2019/01/21/LSTM/index.html","69915b1871f622a1cf6c7821b724b6f9"],["/2019/01/21/点击预估/index.html","7fda9c1a8b6e281059120363950ce53a"],["/2019/01/22/SVD分解/index.html","ee5106a663fb6d265f724a58a4f73620"],["/2019/01/22/SVM/index.html","437b2e73a3a0f3dc9398cfa866926d45"],["/2019/01/22/机器学习简介/index.html","39ccbc5050541547870b8951b2ce0b6a"],["/2019/01/22/线性回归/index.html","f96f97ec1abe4c4a1633fad85020b25d"],["/2019/01/22/逻辑回归/index.html","bd693cc55c0a3b7e0dadb0bb53f1679a"],["/2019/01/23/numpy/index.html","a4b32f0699fbd70954eb805c848b46e7"],["/2019/01/23/决策树与随机森林/index.html","fc3e3e7ed9db925c387b5765cb6f0b8c"],["/2019/01/23/聚类/index.html","b49f2ec8beed019bbb11b2820f0bb116"],["/2019/01/24/matplotlib/index.html","78d1a466a695a06c64ae534dae327770"],["/2019/01/25/pandas/index.html","9bcb4f6b558de874e187169824db2152"],["/2019/01/25/语义分割/index.html","ebe884840f475fd6297fcf12a5a739f1"],["/2019/01/27/22单元语法/index.html","21b2462333f88091b24c24b3fa577606"],["/2019/01/27/SVM案例/index.html","47747fb26cd75dedd3d8b4dc1ca79b28"],["/2019/01/28/requests库及爬虫案例/index.html","010831a26107aa050d580fbe60484c29"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","a2c5ef4076d01ba1034ee516e69105a8"],["/2019/01/28/异常/index.html","7e0edfffdd55f0b943a2c82fc894861e"],["/2019/01/28/描述器和装饰器/index.html","8ac11d8b8ab144017c7bad7e9c894ff3"],["/2019/01/28/文件/index.html","ca7e291737cc3e3b65a0841a5aadd25c"],["/2019/01/28/正则/index.html","306a0914be3d279b516c2a88f9e90376"],["/2019/01/29/函数基础和函数参数/index.html","a1485ae8dcab3dd6d7f5e9e64dce727c"],["/2019/01/29/多继承和魔方方法/index.html","f8653fc15a7f4b82489be3c6031b4972"],["/2019/01/29/类定义、属性和继承/index.html","7583491b980ced0a4dd5b8814f31c1fa"],["/2019/02/27/23单元/index.html","b068554bf6e9740324bde71b1d0df672"],["/2019/03/12/hexo加速/index.html","0d4bb05334ff2913a1fb7a19cc76a482"],["/2019/03/12/hexo系统重装恢复/index.html","27e5aae934e68ce725e95866f0324fa2"],["/2019/03/13/24单元/index.html","152d88085dc09edba5315798e350421e"],["/2019/03/19/25单元/index.html","0268e9a9911bb605cb3b2f3f3a1cd92a"],["/2019/03/26/26单元/index.html","b285289427b478a83af8a69003c00948"],["/2019/04/14/27单元/index.html","9242e1625ca0714f707bdc98fe7d3177"],["/2019/05/01/28单元/index.html","cd09c7e65c81e7e7a79089ae0674e4c6"],["/2019/05/02/29单元/index.html","11534de032162a13fb02312fdf12ccc0"],["/2019/05/12/30单元/index.html","27e56964b07453ad3a85b059a586e51e"],["/2019/06/03/jni/index.html","aa9e91d69f32ab60413b5862e87d5b84"],["/2019/06/07/JNA/index.html","01a2182fd0af14180c1b7bfbe9a045f1"],["/2022/08/07/R配置jupyter/index.html","9a1218d3ec98aef0945a4a9d911b7b8b"],["/2022/08/18/FFmpeg常用命令/index.html","58a6583b1e69d9968a8a13c92bc230d7"],["/2022/08/18/linux系统代理/index.html","4b73297eee881422740d77a5505c06de"],["/2022/08/18/matplotlib补充/index.html","689a209e34a8ff51f70c6b2901f1e6f4"],["/2022/08/18/常用命令/index.html","bde0bce13eaca1847095e62c66e85b61"],["/2022/08/20/rust 多平台demo/index.html","0195653502aad13dc212f26fdd4385b3"],["/2022/08/20/sacred/index.html","5604d6ba9479e8cee728054eb25f2f6b"],["/2022/08/20/wsl/index.html","2ccd1cf9a2b69206cf1495aa35a1e233"],["/2022/08/20/双系统安装/index.html","5cb9d40e00a11c77e5b793a4c1eeb782"],["/2024/11/08/source/index.html","b365ac9f707322cbb97c61238166ed52"],["/archives/2018/12/index.html","63c80b6497041d56ec62df6522ff07cb"],["/archives/2018/index.html","a6b7232451c377496b6bb3b3e2e917e9"],["/archives/2019/01/index.html","59d0a7f82b6d16a259459aca1671f4ba"],["/archives/2019/01/page/10/index.html","11ce95f742eb754b84bcffa2930f45a1"],["/archives/2019/01/page/2/index.html","f8d6f506aa686c408ddb6f486c7954ce"],["/archives/2019/01/page/3/index.html","d7cdcedceeec0168c2dfcbab951e07a1"],["/archives/2019/01/page/4/index.html","416fa73a001d57108e63865db4217a0b"],["/archives/2019/01/page/5/index.html","6d732ac0faecaeb40e9d729d32b42ec4"],["/archives/2019/01/page/6/index.html","7e91a3bb7ca3d17b5caa460e0df06752"],["/archives/2019/01/page/7/index.html","21ca943d40ae62ef1f9339ba2c1816f7"],["/archives/2019/01/page/8/index.html","f4a5b6865cd8112a70be08ae5bb0276a"],["/archives/2019/01/page/9/index.html","7a765a1a19a13bb2d8099b5c57f45aec"],["/archives/2019/02/index.html","d83807378abe54089bd933af05f9dd8c"],["/archives/2019/03/index.html","7348bb3eaff4272b568c94769f17439e"],["/archives/2019/04/index.html","7af89dc0d8c0771a94e17a6859c7ec5f"],["/archives/2019/05/index.html","7fa439f2c3ee270a4831cf91a71c0a58"],["/archives/2019/06/index.html","d91836bc6131e09e826bd1b002d82dda"],["/archives/2019/index.html","6571df862b3e3679d8fe705811d2c2c1"],["/archives/2019/page/10/index.html","d8ce1fa36eb14af3176153e5f3d2f606"],["/archives/2019/page/11/index.html","cbb68a9b795741e33a2f702b774f9b8f"],["/archives/2019/page/2/index.html","b3bbe34ba3977a33a25f9cdbd2187019"],["/archives/2019/page/3/index.html","48315e3d77544e9ab0bc9cc19f7b4fea"],["/archives/2019/page/4/index.html","958e974fd4303ab3245670a88bebec66"],["/archives/2019/page/5/index.html","be07adef275978077fabf6265fe726ba"],["/archives/2019/page/6/index.html","8d50cc10ae3d9aabbd54bfdebe3de27c"],["/archives/2019/page/7/index.html","5c00017b41524f530ea44a6190b58c28"],["/archives/2019/page/8/index.html","963650eed8e087d35a4d715bc29df146"],["/archives/2019/page/9/index.html","037db2bc00f9b8e51d17d454a0a077ba"],["/archives/2022/08/index.html","6d29a4713c85814f2b078df4d0701f7c"],["/archives/2022/index.html","4e7a6a3c52d72623cfd91c3642c264d3"],["/archives/2024/11/index.html","b8eb422a4094047a99ad8275bef20669"],["/archives/2024/index.html","0ef459e0c26f8d447aeaf073162376c0"],["/archives/index.html","eeeb6afeb7228284d6d2b775a379a1f2"],["/archives/page/10/index.html","7b280a26a53318473f704c84b7f8a8c3"],["/archives/page/11/index.html","30c54b9616924187f469786c976bafbe"],["/archives/page/12/index.html","6ff9fc656e0469194789943cf6ea7382"],["/archives/page/2/index.html","a127839adebcfb8d6da2542b0c1a8abb"],["/archives/page/3/index.html","c1dfe38908f628bbaaa06bc42ef17390"],["/archives/page/4/index.html","e13c04233645e840af1490aedc83e73b"],["/archives/page/5/index.html","e3ced1208dfd9626b009f19e1a04df7a"],["/archives/page/6/index.html","4dced762d7df4d1b55577a5b519fc130"],["/archives/page/7/index.html","9a7b0d550c32ef7bfdb18c8df3c782ac"],["/archives/page/8/index.html","ab15fab0344f7d32cfabda28612e6302"],["/archives/page/9/index.html","c1953be26e10dcd71d314e1546ad6ee2"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","d8289d45d58e094a7496c74b9ce65de9"],["/categories/dxz/index.html","18f0f9a6ed45c055c26c3eb7a4bc5ddb"],["/categories/index.html","d7e6ca5391a785e9699ee21fceaded4a"],["/categories/linux/index.html","1c8e774057d74951bbd8367e42e92da3"],["/categories/python/index.html","7716ee994edeee64e6d14303cb8be130"],["/categories/tensorflow/index.html","53622b5df536fed418e5d567f30af85d"],["/categories/图片分类/index.html","595543c9d082539702df91cd90374432"],["/categories/工具/index.html","0b424d8dca017ec94f3c17f733c89ed4"],["/categories/工具/page/2/index.html","accdb903489e548ba4a47543915a4061"],["/categories/强化学习/index.html","fdcb12918d9b3d59750d451f57ee0f53"],["/categories/数据集/index.html","7ed186e2e1753dc71ee789038840f839"],["/categories/日语/index.html","bd03d06f733021575ec8b5a4b8db4723"],["/categories/日语/page/2/index.html","1e81dbe7047da1488a0f0d15cbed9ccd"],["/categories/机器学习/index.html","06f93025362b00ff87414ee3fdab8871"],["/categories/深度学习/index.html","bd828385078f6cd385802a277b738813"],["/categories/深度学习/page/2/index.html","bb49bc1280a53beae900dbc598b4b124"],["/categories/深度学习环境配置/index.html","9ef40fd682186b49ae9923b3e7db0548"],["/categories/深度学习移植/index.html","a9178bf76627008d2c78fb373d4a17c8"],["/categories/计算机视觉/index.html","8c92524962b26f579f138f90ec3b86e0"],["/categories/读书笔记/index.html","d670c9e12c67ad491f6d411d5fe62026"],["/css/main.css","b3a4f2c573d7a304d5462139e176bcb4"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","0d6c82caf694228d8fc4a8e643b2737e"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","8f0e2cb730326480e45eeeb906bd77b3"],["/page/11/index.html","301c56ece4d80f8cab8670e77f97f3f2"],["/page/12/index.html","35b05993575b4cd7c2942e8bd4899491"],["/page/2/index.html","4fea1b528324de05299d5b74903375fd"],["/page/3/index.html","b50bdaac554266c6966d2132c43bc46c"],["/page/4/index.html","8b33b622ad062d2c865b87d387371a0c"],["/page/5/index.html","db79deee0eab408ef76385b73ed240b7"],["/page/6/index.html","59537b7cfa89cac6848c4c7a10e1c2e0"],["/page/7/index.html","24eede96d70bbef3da290dc11d85c7ef"],["/page/8/index.html","f8cf59b41764b8040e9f1526b7722314"],["/page/9/index.html","404fb590fb92bcf70faa3440e8eddc81"],["/sw-register.js","b71ee2c2f69af16e9295172fffa1fdef"],["/tags/AlexNet/index.html","7dd18df7837cf24ea4056bedb7b44ace"],["/tags/CNN/index.html","d3cc013e3eaa0e6c898214466c0a2e9b"],["/tags/DCGAN/index.html","05eb8b365e4a52c296d6cfd5ef55616c"],["/tags/DDPG/index.html","26f18d0bb753883810029c39e21fb4dc"],["/tags/DDQN/index.html","ec1bb82005c5ec2e96ee83ef12a7814c"],["/tags/DQN/index.html","14b5d9b81df77a80356ef6871c9f5957"],["/tags/GAN/index.html","794b974f412c80ec888e6462cd85e683"],["/tags/IRL/index.html","48422bdec56a6f03517e6c9d61b79878"],["/tags/LSTM/index.html","01ba8a37e04d8d8cbc9d13f8a7b55fff"],["/tags/LeNet/index.html","ec7677dfa13440d8e0338de1a9809774"],["/tags/MC/index.html","c0282f10ca4b06e1404c94c2fbdc0bb4"],["/tags/PCA/index.html","65a1cd40796570c28d0a0b04bf21d1f6"],["/tags/PG/index.html","5b827d2f6ff6f5afb7bcb9b5520173b1"],["/tags/PG3/index.html","e8cdf858f71585b8abb2634459140954"],["/tags/PIL/index.html","285ab4314be208b3d15b70b7eae4dcd7"],["/tags/R/index.html","5e6b41f09b51cac9f35d5629bf1a185b"],["/tags/RNASeq数据下载处理全流程/index.html","5678205136883f73d72243ac43bad6b1"],["/tags/RNN/index.html","74353b5870e98f9918df6d3ef13fbe70"],["/tags/SVC/index.html","5891acdc4bbd9a6e7b4277f609adbb38"],["/tags/SVD/index.html","ce9181d2441c9ec7e9156f38afd84fd5"],["/tags/SVM/index.html","f1d3097585710b6f965d5a13829f3641"],["/tags/TCP/index.html","cb91790b6bbfa809467b984742aed903"],["/tags/TD/index.html","1077d275f3ad7380c5481d20c5749584"],["/tags/TD3/index.html","5654b571ac721e37432b72a347ffdc0d"],["/tags/VGG/index.html","b679ce212ed9a8137b3d5cff762199f1"],["/tags/amd配置/index.html","f3871512aa3d3ca190928e05cdccb6e9"],["/tags/anconda/index.html","adae68a47453061862e8e0f9c10d9fff"],["/tags/conda常用命令/index.html","c25ef071e9fadaf9b34661e44c01834a"],["/tags/cuda配置/index.html","a17d1bac291d23427112ddd9271d4be0"],["/tags/docker-ldap-mysql-arm64/index.html","932cd723c9f4809963e23847d74c71e1"],["/tags/docker-ldap-mysql/index.html","9400fa86079aaa23545916a579588d8b"],["/tags/docker代理/index.html","eac6c83684038aedd3a63e32a5da0d69"],["/tags/docker安装/index.html","7ef8cf099bca9e827b5c3d984f465598"],["/tags/docker容器挂载硬盘/index.html","2f948b4975dece761934b822339b8076"],["/tags/ffmpeg/index.html","7dc23fbddfb2fd862e1537fa200d1eb9"],["/tags/github上传代码/index.html","5731b2a0b80a100b133c21c95f55a3f0"],["/tags/hexo/index.html","050a5b2e7ab662e16ea55c36b850bf65"],["/tags/index.html","45059219afe30b6e151f4fad396bcc6d"],["/tags/java调用C/index.html","a23446a50c3d077ec6c6f43e46e1830a"],["/tags/kaldi/index.html","5905e16a7c2f46ba9a77304022ce7d6b"],["/tags/linux命令/index.html","6dd6104f55cd60a2268115ceabe7ba81"],["/tags/mamba/index.html","f6772c58979808b313d89fd3a798fa24"],["/tags/markdown/index.html","8a565c02b3df2643dea59d23d649e2a3"],["/tags/matplotlib/index.html","1b8c8aa88c831210908398d63bb3b172"],["/tags/numpy/index.html","2f1c18f934074176bcc4153f1e7801cd"],["/tags/opencv/index.html","c14c87a0f5d1b6259e2beb7351bdcf8a"],["/tags/pandas/index.html","60cfdae4d7bc640135cf57402e167d07"],["/tags/qq/index.html","70e66883f8ac574313747800d4859206"],["/tags/requests库/index.html","27cc68f1770af92775ff96a00f108611"],["/tags/rust-多平台demo/index.html","0775ffab864d614ee3291fa53f26ec27"],["/tags/sacred/index.html","89ae5c478a763c011a5d497bc4d7a9e6"],["/tags/ssh-远程连接docker/index.html","7716f21bd4125a40f7e295af18a1849b"],["/tags/tflite编译/index.html","e2dcd6b115fd6a748b9409b6a61b77ed"],["/tags/tflite转换/index.html","939699ff602eec9f6506c7c7d4386a30"],["/tags/torch和apex安装/index.html","1a791ef49c329d659d15f10099f227a4"],["/tags/vscode/index.html","9bd68585133e67cb25b7c3cc3e655e72"],["/tags/wsl/index.html","bd122f10a33186592ead707736755481"],["/tags/zsh/index.html","6f7d420820c9f9e187886dd509e8820c"],["/tags/代理/index.html","792146625d297bbc8edc6b0af85aff7b"],["/tags/决策树/index.html","7f95f97fbcf02b13ec0943ded4678d5a"],["/tags/函数/index.html","dbe0b321a01ef4753d57a4969b5933ab"],["/tags/列表推导式/index.html","74cfe78434706e245d7a41bc3fb10cb4"],["/tags/助词/index.html","a705c90de74560b29a771c60e01c9514"],["/tags/包/index.html","2909b7748f99a31f96bbd50ca9fecdc2"],["/tags/卷积神经网络/index.html","087c7017876fdbf125b1f92612ae24ca"],["/tags/双系统安装/index.html","9b7201b98bcb8b1608db3baa51ba577d"],["/tags/反向传播/index.html","e0a189e00fedb45f14fdd0c52e871fdb"],["/tags/句型/index.html","45fa244e66e6f93e9d33874f6515010e"],["/tags/可视化/index.html","4ba80ceb2d4e6d148588defeeddd436c"],["/tags/哲学/index.html","76ac5576512febfb98f14332d0b6581f"],["/tags/图像美化/index.html","adb995416e0213b47d83894b224fde33"],["/tags/图床/index.html","aaecd50b07ad16ffbfc2e32f7bd214ff"],["/tags/多继承/index.html","bbb5bffd49fa3458924b87957d154d5b"],["/tags/工具/index.html","f7a0169897f6da1bab552d12fc1dbc97"],["/tags/异常/index.html","edecc89d7ac97db4418034377b1f010c"],["/tags/强化学习/index.html","9964acf3b7f0af0776ee1efb319d44f8"],["/tags/心理学/index.html","0e4d713652d21b3f2ea4ca5101d66875"],["/tags/感知器/index.html","4af018cb71c0cc5f3fe398a339e9f107"],["/tags/换源/index.html","cd8b1b84128bbbcddfbb366e81d5857e"],["/tags/描述器/index.html","11d17c99cfe3198f77c94d4489be0d67"],["/tags/敬语/index.html","355358624b17cbe7f81720d353090a01"],["/tags/数据集/index.html","9b0e411d3ad3430c028bc20434c76d66"],["/tags/文件/index.html","5071571486aeb4e8a829f5f162985d9d"],["/tags/服务器配置LDAP/index.html","6f3b69ceecdb02442fe3faaf6c99bd2f"],["/tags/机器学习/index.html","dfb27ad477ff68d608d3fb41ae63657e"],["/tags/梯度下降/index.html","468d6df64406b13a2b14d5bfb62ca3e1"],["/tags/模块/index.html","43edd50cd46a73226ce87a25a4cce1c4"],["/tags/正则/index.html","ea45b1aeb1e81e26ddc9b49881b007cd"],["/tags/激活函数/index.html","4dc6a2870ea941ddf84c36dd02f65930"],["/tags/点击预估/index.html","e7bf7b1704f1c249f46967700f04a180"],["/tags/爬虫/index.html","a4d8bea40fae6c5b6ed7268b0899ddc3"],["/tags/生成器/index.html","f21c85eb10a899e8514d2c9e51cf698f"],["/tags/类/index.html","d740ec2e6e4657471a4e2e0d55f0b619"],["/tags/线性回归/index.html","06de5b85e8c6db32fc07b9b14dff9075"],["/tags/经济学/index.html","b90057f08a0fbe38170918ea310d9931"],["/tags/聚类/index.html","4e8707cbdb30137d8ead58e6f31d8ec0"],["/tags/装饰器/index.html","de68db4d0e8e4f32bca0148fd3a45fd3"],["/tags/词型变换/index.html","329e85728cc56196bd376d649a97183e"],["/tags/语义分割/index.html","b031b5744387acf4d32ebd7cf55c96d9"],["/tags/语法/index.html","728aeca80ef7286fdaf8cfbf5fe5dd34"],["/tags/语法/page/2/index.html","55ddcdd72a3a0510a8082b4c209bb442"],["/tags/迭代器/index.html","625abb53569fae1ea8ea243dd1b55764"],["/tags/逻辑回归/index.html","88ff2b137c00f5f6c791a0bf3eddc56b"],["/tags/随机森林/index.html","25c95932cb3cc7ee5de05ca15d626f01"],["/tags/魔方方法/index.html","07711e9cbacf50dca1cf76d9b6a8c6af"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
