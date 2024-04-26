/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","0878b2df6c6f469ba24090be9147ce40"],["/2019/01/02/Anconda常用命令总结/index.html","3983263eb69b80be88bcae1063c855e0"],["/2019/01/02/句型/index.html","bd82090b801ba73540f3565c9088e77c"],["/2019/01/02/日语助词/index.html","787c0a631fc43fe7d70616e293e97b37"],["/2019/01/03/on-my-zsh/index.html","b5e5ab6946ed8c2308e656d813e7911c"],["/2019/01/04/《当我遇见一个人》摘录/index.html","955b5f152ca9522980cbafe3dd8e3e3f"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","4beea316dc61b8f385c46d04fa3ff55a"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","9ba6c36c569ae43659f5271871c64a72"],["/2019/01/04/经济学笔记/index.html","9a299b6d4588c4ab54f7fdaabecfbfda"],["/2019/01/04/语法总结（5-15）/index.html","bee70119ee5dc4555701c39f69aeef80"],["/2019/01/05/linux常用命令/index.html","5ea1b9114e65bd9807b449ede6c7b15a"],["/2019/01/05/onnx2tflite/index.html","125c5c4ba2aaf182c965348752e2daa7"],["/2019/01/05/torch安装/index.html","c54da1fdd9e0db38820bc65b493f9157"],["/2019/01/06/敬语/index.html","973c76cace522b407ffdda76bb64d8b3"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","6ea76444128aefe48a0de5142b559509"],["/2019/01/07/cuda 手动配置/index.html","b11d216e270cbed9b7998f2b1a834f0e"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","ab653369451973963f3ab9290d6d3303"],["/2019/01/07/docker-ldap-mysql/index.html","5790a89b4ea8d932c2f62c38d5e82b6b"],["/2019/01/07/docker代理/index.html","2f9b262b0371b9470b38248a5e7882ba"],["/2019/01/07/docker安装/index.html","5aab5aff3f499f11a7b93688fdb5262b"],["/2019/01/07/docker容器挂载硬盘/index.html","88ac484ff105919a7cf30f2f5b1906f8"],["/2019/01/07/github上传代码/index.html","10a8e3fdadc956dfcd6176f38ba5eb5c"],["/2019/01/07/kaldi 安装/index.html","debda15f3b29b3513783d544dcf02d81"],["/2019/01/07/linux常用工具/index.html","cb0e362b38befd15c1f8a2c299517992"],["/2019/01/07/opencv/index.html","5cde8d5f468c3af141531a97e7ceb782"],["/2019/01/07/ssh 远程连接docker/index.html","74a073baeba135262f7ad86aa13b3291"],["/2019/01/07/导出/index.html","2c5c92d8963b9ec5673003f7c604dc28"],["/2019/01/07/换源/index.html","2fd1d09806961d1c774aac2509747331"],["/2019/01/07/服务器配置LDAP/index.html","885b3beb8c8407ea136a9ea2d82bc897"],["/2019/01/09/markdown/index.html","8b529ff582c7f4559853ba6ae8f2114f"],["/2019/01/09/opencv图像美化/index.html","7e7c701aeeadc5b277488574be176b4b"],["/2019/01/11/19单元语法/index.html","1d5841bda35d0a499ac9c405c759b079"],["/2019/01/11/20单元语法/index.html","048d7ff0018694dde0c555e98c4d46d4"],["/2019/01/11/opencv-图片几何变换/index.html","e081861e29b5361a7209ddcbb3cd7df1"],["/2019/01/11/opencv-图片处理及绘图/index.html","78cc5b06e7f2ec924a210df9ed748d21"],["/2019/01/11/wine安装qq/index.html","90a8da4a47887adc7b1d8e1a1bb5c7e0"],["/2019/01/12/tensorflow-可视化/index.html","a9a6b7bcc3ecf153e83cdd8bd4b433a5"],["/2019/01/12/tensorflow-基础语法/index.html","13830785a770948e006db9b397294fdd"],["/2019/01/13/RNN/index.html","788c7119c16c76badd359cf5d56c2938"],["/2019/01/13/keras实现CNN/index.html","145cd569bb9acc58b24a3e066994b6db"],["/2019/01/13/卷积神经网络实现/index.html","67bc3b8e6149593448afd4b1d8d56720"],["/2019/01/13/循环神经网络RNN-写诗/index.html","8889890a1aaa9a186bdec4f2ddfdb8c6"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","1b1ba934be286df6070003a7c023532c"],["/2019/01/14/反向传播/index.html","0992579e31625b895e2f6120fbc78cc4"],["/2019/01/14/图床/index.html","438bb046ca66c936f5e28772575aeb3d"],["/2019/01/14/感知器与激活函数/index.html","fe638fb9104fcfde020b607f2b8af993"],["/2019/01/15/PIL简单应用/index.html","3a7dd5a94795af468634d5f8a126c48b"],["/2019/01/15/卷积神经网络理论/index.html","2cd4acc06f19d492a6c770a0d91a664a"],["/2019/01/15/图片分类之pca-svc/index.html","e63d55fef57b4f781dfda475570941b6"],["/2019/01/15/强化学习基础/index.html","172719bb285bd5d68b4c26da01f66f26"],["/2019/01/15/经典神经网络/index.html","19aee528c372ee04a107cad64e8e81ee"],["/2019/01/16/DQN/index.html","f7b2c0bcfcc5ac55cb023ecd06454f56"],["/2019/01/16/TCP传输图片/index.html","9d55cb2f85d99d53b490748c36a2a430"],["/2019/01/16/时序差分学习/index.html","ae0516842f386b75405fbad1b4d33598"],["/2019/01/16/蒙特卡洛方法/index.html","747ee0d198ac2f76971e1426118f4cbc"],["/2019/01/17/Double-QDN/index.html","b779eacfa740c5989b931037156ae20c"],["/2019/01/17/RNN理论/index.html","512793833db3068b118b286e05830884"],["/2019/01/17/梯度下降/index.html","7efa0dc317a5c2ff317cc6534cc3d578"],["/2019/01/18/PG和TD3/index.html","96ad961404b524172e2e5309fa32ae83"],["/2019/01/20/21单元语法/index.html","df5ab9d6909d845a1e3ca69244f84a00"],["/2019/01/20/GAN理论/index.html","2e05d5002ab6075fd5b9ad79e6ac60f9"],["/2019/01/20/PG3和IRL/index.html","f08f7aae93e7a5b1f0c166f5e9315b1f"],["/2019/01/20/数据集/index.html","85ed278c34d2f3c8989ac2e87c3b61bf"],["/2019/01/21/DCGAN/index.html","dcc80f66db74516a7321d176ff377251"],["/2019/01/21/LSTM/index.html","f31e70d68bcd78e301b94e2c71cc31a7"],["/2019/01/21/点击预估/index.html","abe4312dcb2338ba2a6e7bdcaec7cd62"],["/2019/01/22/SVD分解/index.html","1091f4c1e2d5fccee3ce5de63f894c65"],["/2019/01/22/SVM/index.html","cb2fec1e05e1ec1199daa2be6db5b331"],["/2019/01/22/机器学习简介/index.html","b9c20677dde8a9ed635258c2fd726c67"],["/2019/01/22/线性回归/index.html","cd10866f281bc11d46144241fa145cf0"],["/2019/01/22/逻辑回归/index.html","7a85581a46d4eb69604ad5ab9fb24957"],["/2019/01/23/numpy/index.html","afc05ddec0f297deae75496ee0d0c889"],["/2019/01/23/决策树与随机森林/index.html","c9161162af9b699764fa6aaff98a30b1"],["/2019/01/23/聚类/index.html","1da24b0f6c770810b12683aa798278ef"],["/2019/01/24/matplotlib/index.html","44c4e9cd1662eddc906f372dddc9e229"],["/2019/01/25/pandas/index.html","74378cb20e9ce897acc52a51ed654ad9"],["/2019/01/25/语义分割/index.html","d337bcac78e0f77e2d77ad370f32dee4"],["/2019/01/27/22单元语法/index.html","f0fdb47bb14d3147be7c4f29b8920b22"],["/2019/01/27/SVM案例/index.html","f0337f231ad3981bb12f53c74064b983"],["/2019/01/28/requests库及爬虫案例/index.html","ceab10fe571e9027eeec2f2a07852d5a"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","0d11ae66a0cb45e1eecd1aff871b18ad"],["/2019/01/28/异常/index.html","df2f186f0179f4b059492fa9959ad4f4"],["/2019/01/28/描述器和装饰器/index.html","3ee465f7f182a3ed4092b87ecf0cb85d"],["/2019/01/28/文件/index.html","b6d40c3e2bc5955153058416f178faed"],["/2019/01/28/正则/index.html","17739f1cee859e75f75550def0847696"],["/2019/01/29/函数基础和函数参数/index.html","13230fb0e32b4160d48a68b415235e5d"],["/2019/01/29/多继承和魔方方法/index.html","e94e4d0c9b3d3e09e2dccd01f2392928"],["/2019/01/29/类定义、属性和继承/index.html","1930b79d6cde5339467b124cef0a7831"],["/2019/02/27/23单元/index.html","b19c463ea7099e4a5d0a8a2e30a508b8"],["/2019/03/12/hexo加速/index.html","f3086c5e80787c2f4f7f9df28aa0c6e2"],["/2019/03/12/hexo系统重装恢复/index.html","73c8ffac68d1fa32397812c9d68c9c8e"],["/2019/03/13/24单元/index.html","a251f0ecd4ac240588e72161e56b6f7e"],["/2019/03/19/25单元/index.html","22dfe96818f78cdbccc66b792adce7b9"],["/2019/03/26/26单元/index.html","229c183729e715a22e34f0746bd3f3c6"],["/2019/04/14/27单元/index.html","1548cc5667d6a5b330e25c9e9ebc170a"],["/2019/05/01/28单元/index.html","8cce316a0176063d1ff870359eca2c1a"],["/2019/05/02/29单元/index.html","079561ba8a233f61bf2acdbbddfa3f73"],["/2019/05/12/30单元/index.html","03bfe9498bd98f61601f69de87a02ca2"],["/2019/06/03/jni/index.html","dc9c340f0ab2ba9b1f39ef0b44aa3287"],["/2019/06/07/JNA/index.html","2b7e3d7bfbd455a52e896131fc40735b"],["/2022/08/07/R配置jupyter/index.html","7db0984ed5f03f375be3c2cb6fe79c42"],["/2022/08/18/FFmpeg常用命令/index.html","5a1ac864dbd524eac95697fd23b8fc8c"],["/2022/08/18/linux系统代理/index.html","1040b61e4f159b8ed90110ab5532a78b"],["/2022/08/18/matplotlib补充/index.html","6afea39ce39d83c10789329095eb86cc"],["/2022/08/18/常用命令/index.html","ff4bc818a427e450b2e4cef9b84ca860"],["/2022/08/20/sacred/index.html","0777385588d8a5a7bf768bf4d6b2c522"],["/2022/08/20/wsl/index.html","01a08d2882ceb264585ae2611d91e78f"],["/2022/08/20/双系统安装/index.html","4f564798ecdea72ff986acff54acf5d8"],["/2023/06/28/source/index.html","cc09d60cf5071996b9bf6a5d225fa4f9"],["/archives/2018/12/index.html","e61522b71ddcfe7c4f022de4c861122f"],["/archives/2018/index.html","c5aa14f318ddba32ec348191080ba9d8"],["/archives/2019/01/index.html","bf976270c776a0311e641a8703bb7de0"],["/archives/2019/01/page/2/index.html","0f5698f9f4bd349b1b4bd8184284e168"],["/archives/2019/01/page/3/index.html","30c478034f2bef99fd5da8728cca08a5"],["/archives/2019/01/page/4/index.html","66adc8e5cceb8e548dafdd2a8c142f1d"],["/archives/2019/01/page/5/index.html","017615b2214d30db9685b937ba742b1d"],["/archives/2019/01/page/6/index.html","21d7accb4f19ace80577f4a5db17faa3"],["/archives/2019/01/page/7/index.html","740587f06f56c54c1bec410d18a47036"],["/archives/2019/01/page/8/index.html","dd7e8cc2b477980e62a2694776857510"],["/archives/2019/01/page/9/index.html","570fb93d633d04d376486fc4b2698f3b"],["/archives/2019/02/index.html","088cc07c75027de72d6cde96f97ec54f"],["/archives/2019/03/index.html","c8227db83472f239ac49ee24947eb464"],["/archives/2019/04/index.html","718db1897c72ea7830c6f7b91e35a540"],["/archives/2019/05/index.html","abaa366036a60a05ee9adaa0382446df"],["/archives/2019/06/index.html","c1b7a951040084dfb7a712636f233b49"],["/archives/2019/index.html","46d0a8515d2f5f0a014c3cdff9da0ab0"],["/archives/2019/page/10/index.html","d0fca126cc90f2fb48d19eebcad21488"],["/archives/2019/page/2/index.html","af50fbfe8d11e119d23a5273a2dde651"],["/archives/2019/page/3/index.html","d7cb1d046d85e9254e9908c8af435f31"],["/archives/2019/page/4/index.html","564e1bcb595c144e1b5e3109d05778d9"],["/archives/2019/page/5/index.html","5db1bb31612ac14bc55ff60b346cffc2"],["/archives/2019/page/6/index.html","4b29022506783f975ecd609fbd84a1c7"],["/archives/2019/page/7/index.html","0573ef7c4157a7defc477ebb2a6265e4"],["/archives/2019/page/8/index.html","a14d0e27cf99a34dafcbeb7e32013308"],["/archives/2019/page/9/index.html","539fcb625277d64f8bdf16bf996f5ec5"],["/archives/2022/08/index.html","0216fa44b7e9439bc4a1d75733c13fc3"],["/archives/2022/index.html","4049e677a9c00f944cbd29becdbf8a8e"],["/archives/2023/06/index.html","4d55a123a1a2e2202630cda5b35f2c20"],["/archives/2023/index.html","9f03b16869dd3a1fd9cf78979376d671"],["/archives/index.html","573c79ed6bd10701567ea69093d51d32"],["/archives/page/10/index.html","e826f50424dcd0a4a77361fe634dae8c"],["/archives/page/11/index.html","762305110a992296f72162d3912be1fa"],["/archives/page/2/index.html","abc33c1c78934b81625bfbbfdd5c7ed0"],["/archives/page/3/index.html","2b432d04570b463d4f9561f2a3ffcf5b"],["/archives/page/4/index.html","86bf5ebab8a2f0ce33ea698dd7504a61"],["/archives/page/5/index.html","193e668882375d8e7379165a058a7374"],["/archives/page/6/index.html","414ca77c3516f24ea8ef8f42e326b494"],["/archives/page/7/index.html","577de9c04764a46c590f24154244c98c"],["/archives/page/8/index.html","c5303d5d41a2f02912711ee023e68fc1"],["/archives/page/9/index.html","14bd4296136feb69268e2e343951b8ec"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","767f7d33b0c49e2ab1a8806f96a1a981"],["/categories/dxz/index.html","24fc655797f90165f8875e2a807ba982"],["/categories/index.html","63cd442ea002ce2a85fc6d441fee1452"],["/categories/java调用C/index.html","b89cf0a1eca3c7534e0e78147e410261"],["/categories/linux/index.html","8dd774040f4fbe10c4a64dc006f5f415"],["/categories/python/index.html","fb005c5644c0ec06882dad98bae32542"],["/categories/tensorflow/index.html","cb278805f50e4d5d3ab3f385570730d5"],["/categories/优化算法/index.html","f4ec76d19f9c58fc711ee5af5e968ae1"],["/categories/图片分类/index.html","339a0471cd3e7b02919835cd20f2e694"],["/categories/工具/index.html","312b4756fabe176560e890f53b4ef997"],["/categories/工具/page/2/index.html","49c94004d4f18adfe3dafd408d19fe1b"],["/categories/强化学习/index.html","56dfff1b25bcdf07b943fc3f39b6f155"],["/categories/数据集/index.html","6076ca3cb7961d485ac96e1d3f529086"],["/categories/日语/index.html","1d89caca9a05a38e31b5a73cbf411fcc"],["/categories/日语/page/2/index.html","5937c3e8bcced9cdf781c561b5d85a04"],["/categories/机器学习/index.html","e4570a451dc1b6c24695b56e0be0b8f8"],["/categories/深度学习/index.html","8f66757847f5dcf7879dab958d8f496b"],["/categories/深度学习/page/2/index.html","dddadabd5b06a00afa76cb8bc5d1b31f"],["/categories/深度学习环境配置/index.html","9ecb9ec528b3b43114c7e394573cd78d"],["/categories/深度学习移植/index.html","ab8297943a82656031f3e378360d2eb9"],["/categories/计算机视觉/index.html","51202015e51f703e04d8be513798a43a"],["/categories/读书笔记/index.html","cca26935e17b9f92b06326f5e19c9634"],["/css/main.css","2bc6b2067a0b0e9caa3bcd05b3fd981f"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","90c87370e55fae9d686add673eb6b835"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","d7734e7be93846110aaab6e5257c5987"],["/page/11/index.html","389cac0dd59f739a6a47d077c8f34649"],["/page/2/index.html","79a4c1f8ceb0c17ea04e77dacde3110a"],["/page/3/index.html","18427f5061f9ccd17fc5f1f459d67dea"],["/page/4/index.html","aa0596da675d6f8064cc3622f0844e1d"],["/page/5/index.html","a3d58322da52c05098b5c929afa20222"],["/page/6/index.html","ac6303abdc35c1aa72c4cb25bdc961b6"],["/page/7/index.html","45b57d48fb4ac40ddfaff29e05ce3813"],["/page/8/index.html","7fa054883c352f4c0e30e7ace2833653"],["/page/9/index.html","22f2e6f49b61dc82dc06d95add89f7a8"],["/sw-register.js","a1d35ec86cec4a257817c8ec5e589bd3"],["/tags/AlexNet/index.html","9aac8c7ccb3fc8a8196b7c4e12f5e2b4"],["/tags/CNN/index.html","116c2a7ada4739e701a3487cde0b5f87"],["/tags/DCGAN/index.html","ea4414a128ed78eae67a4d10a948858c"],["/tags/DDPG/index.html","6200a66c2c71400a97f754e56bbf2735"],["/tags/DDQN/index.html","ff8cd3173cb5cdefed6685c27880f0c4"],["/tags/DQN/index.html","a7187f991d47be630b2ee94514d8c465"],["/tags/GAN/index.html","ddb6a50abb668632f625d4a5395f69bb"],["/tags/IRL/index.html","914844c733306dd3ed42af8939777518"],["/tags/LSTM/index.html","14188aa970f38d3096ec11e044b25125"],["/tags/LeNet/index.html","1d9be402a5f12ab8d2ae94614f66bb20"],["/tags/MC/index.html","4ef662a15fd628546fcc56c99a84498a"],["/tags/PCA/index.html","2868ff7084f9754261b4faf81df29245"],["/tags/PG/index.html","ef0a7c0a904be623717d18faaf65a5d2"],["/tags/PG3/index.html","ffbe99540282a84179f5ac7a032b3a87"],["/tags/PIL/index.html","783247725fa716e2970cbf3a564c19cf"],["/tags/R/index.html","03aa4da1a2262e95de3e76893f902b54"],["/tags/RNN/index.html","0392973624031595cb85ab6a948d8616"],["/tags/SVC/index.html","f48b4f2414f0ea8f714ad19d79ff225e"],["/tags/SVD/index.html","cf832afee2230243ecdc9e967d6577ac"],["/tags/SVM/index.html","08a3ce2e7343abbdf40cc6e210657bb3"],["/tags/TCP/index.html","3b2c7ddec606433928ca3924234b99d1"],["/tags/TD/index.html","d98fc51ec3a9a78f1059f811b187f442"],["/tags/TD3/index.html","89ec0168f32399e71a2f3fbaaaad6eb1"],["/tags/VGG/index.html","4dd9bd5b6ad048c085b38474e39f46e8"],["/tags/amd配置/index.html","85a9f77bdf3dea04a7ef633d83cc4f1c"],["/tags/anconda/index.html","589a8e68eac3c9cc2268b4478d4e58f9"],["/tags/conda常用命令/index.html","c450423d2a6e38eec7112b12786e28e8"],["/tags/cuda配置/index.html","f0014da568ffbc5d59b7e0337a6b8859"],["/tags/docker-ldap-mysql-arm64/index.html","b4dde6238b64d8e1ec8e84d62242d102"],["/tags/docker-ldap-mysql/index.html","727d03b9f3b090bdeba0b32dcc7c7b79"],["/tags/docker代理/index.html","9cec46a30a68b92843c9ffca2a4f4618"],["/tags/docker安装/index.html","80456c2d5677742c6d3cec1e598c1d1d"],["/tags/docker容器挂载硬盘/index.html","7148f55bfbf8dcad21b02971ef6799f2"],["/tags/ffmpeg/index.html","aa98e268235820e159d59218ffbdfa3d"],["/tags/github上传代码/index.html","afddb54a78231fef4f2d20a6b73e6a11"],["/tags/hexo/index.html","26656206aff05f574765a30fc277ffbd"],["/tags/index.html","19a75edef9cd0f413dbb8e443c50f194"],["/tags/java调用C/index.html","06a6e7cc17bb78f92f139673f52e2922"],["/tags/kaldi/index.html","068c6ad7d241466d531fc5a6c1bf41df"],["/tags/linux命令/index.html","64b0f3948b5c927c6f4e92af06638f85"],["/tags/markdown/index.html","b9808cb6d171b8aba12e183a53166cec"],["/tags/matplotlib/index.html","2cc2c81feb43127f3570a2053887336f"],["/tags/numpy/index.html","76342a2d453275d721ba1be1364ef05f"],["/tags/onnx2tflite/index.html","a11f8988466221e2de7f236e7bba9a62"],["/tags/opencv/index.html","0f45649f7263492440c45c2408c73b09"],["/tags/pandas/index.html","ac4b54bd657592cb361aca8d206c5d0f"],["/tags/qq/index.html","92b0e952d2f490b83e5490a29f441d15"],["/tags/requests库/index.html","7979b2067a6e009a99d794f23daee538"],["/tags/sacred/index.html","56eaff8aa3244ef81150a0b6a9eb63b1"],["/tags/ssh-远程连接docker/index.html","f5c837f33b6a96128350a79b230a56c7"],["/tags/torch和apex安装/index.html","fa667a394590054d081ad2877c9310cf"],["/tags/wsl/index.html","b54e5a0bedd597943b80db2fd1c985d9"],["/tags/zsh/index.html","043c026436a62189bacceacc4a01e229"],["/tags/代理/index.html","17ea55d6860b7169d7987e6e14f01104"],["/tags/决策树/index.html","0337f35785a17d8cc448c9a3bc945913"],["/tags/函数/index.html","1d19f8438e6c9761d91aa91d2e924be1"],["/tags/列表推导式/index.html","ca768cf2699767896f7d8d9bb848edba"],["/tags/助词/index.html","71a9179614af37110e4aba4ee79840aa"],["/tags/包/index.html","aea2d09c111549c381d4eb5fadb3b9ba"],["/tags/卷积神经网络/index.html","7be145dbf31c9f3854598160c9cc4a98"],["/tags/双系统安装/index.html","cf31ad653d91c72be5e51fd9250fc9b5"],["/tags/反向传播/index.html","b7aa9a1246fabb37f3c214f7591cd0a3"],["/tags/句型/index.html","efaeec9009f29da56028d5e2d369ed7d"],["/tags/可视化/index.html","fa919afa3103d8408de6290c70bd3bd9"],["/tags/哲学/index.html","43997ce1625342e16763e05d333d7411"],["/tags/图像美化/index.html","f84f78f7d3e7a0c4d4ad19d92c2ea574"],["/tags/图床/index.html","ea039ba45ad9697a8a007a0297c85738"],["/tags/多继承/index.html","038fd4d58863a23d71473912a5e0021f"],["/tags/工具/index.html","d6212447f6a4b96c0f26acdad3517dbe"],["/tags/异常/index.html","203f5d859e55cf71c031a428a38297f7"],["/tags/强化学习/index.html","e68c66969b0db0e5049acdddb7412e53"],["/tags/心理学/index.html","3263d0d4129fac752051c43416b052dc"],["/tags/感知器/index.html","610945b605830b4062c915cd24950a0b"],["/tags/换源/index.html","9c2e0e9a4c537dced12bbe8e5246bd34"],["/tags/描述器/index.html","99b1f4abe1b1426f3d06bcc5316c9211"],["/tags/敬语/index.html","247cdeb29399467b27aa0832c67178fa"],["/tags/数据集/index.html","445decb0f191d467594f8ca56cf7a35c"],["/tags/文件/index.html","6bc3160266efeb5fb63f5fe3d7547314"],["/tags/服务器配置LDAP/index.html","11968677ace26d6f5f06b552da0354a0"],["/tags/机器学习/index.html","55d5e35c387eb106a8a7b5626d189925"],["/tags/梯度下降/index.html","92c76f3f7cc8f30cc5db5894e6f0b95a"],["/tags/模块/index.html","4b23848303546d53ef0b71a1acfb8de5"],["/tags/正则/index.html","ee45724cb095e09fd466eb5e5f98e9bb"],["/tags/激活函数/index.html","e1ad95644e67203edc52bd04c8671460"],["/tags/点击预估/index.html","b7efcdc0e68ce78d43fbb18e1c68dabf"],["/tags/爬虫/index.html","d8b04a5b0de6352c64e7d064fa79df4d"],["/tags/生成器/index.html","1d4150485b7ae767b931909402eee989"],["/tags/类/index.html","f06115186565d10da99caab0c991ed66"],["/tags/线性回归/index.html","287236f32ab49707c8c89b0c58eae825"],["/tags/经济学/index.html","beb8dc3fd01423f3e9c4df66fd860855"],["/tags/聚类/index.html","37e6f05ced2d60b8414f3109e8340b44"],["/tags/装饰器/index.html","452108da540da6a96d347e3632b3303a"],["/tags/词型变换/index.html","4edf002459142034c4225a871f609bf8"],["/tags/语义分割/index.html","e09fde618f3f177209388d1db73f006f"],["/tags/语法/index.html","5129e39130db37aa10a8a8637a7d0440"],["/tags/语法/page/2/index.html","415d8f7a87af6ed3d61bf21f5961b369"],["/tags/迭代器/index.html","c31f4fb5911a20c238fa59ebf028caed"],["/tags/逻辑回归/index.html","5a57f7f557ec3d5c025dc9bfbec5530f"],["/tags/随机森林/index.html","ae3a5774bfde59268a389147010c5d57"],["/tags/魔方方法/index.html","bd4892fa90cee36383b93330a8b9101d"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
