/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","50b304419633e2c0d701e6868a89dd4e"],["/2019/01/02/Anconda常用命令总结/index.html","755ff050ec250dcffe4ff3535b55c2f9"],["/2019/01/02/句型/index.html","91c55004d5e36e48a2bdf35fba400e98"],["/2019/01/02/日语助词/index.html","c5b36d8acd4147e37221a83d572c1b5b"],["/2019/01/03/on-my-zsh/index.html","da0a5aacbdd37083f65c2ef7c40b4d18"],["/2019/01/04/《当我遇见一个人》摘录/index.html","de58a42730d5359e4f56bfc77d4dfc18"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","50bef6358b75502e5063f8eac3f0cb41"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","46110fdc489f6b96936b937c96087047"],["/2019/01/04/经济学笔记/index.html","60a45099bc548fcf9186f5f32d56228a"],["/2019/01/04/语法总结（5-15）/index.html","effc62f45171a1717e535233716decb7"],["/2019/01/05/linux常用命令/index.html","6b947ec3a42a38f1376a03a3fab0aa07"],["/2019/01/05/mamba/index.html","db19255ec962710aa6962d041a05d6fc"],["/2019/01/05/rust 多平台demo/index.html","0ea65e6e6fc89893b12cf003b69ac136"],["/2019/01/05/tflite编译/index.html","f94fca68bbff9e44f531c5dffcfd5276"],["/2019/01/05/tflite转换/index.html","e9a65af53e5f302e1db18f0460fecdcc"],["/2019/01/05/torch安装/index.html","130d88e8ec5dacbac9e8cbd8608cd2f6"],["/2019/01/05/vscode/index.html","ff414f18d3feeb702499680889d324f9"],["/2019/01/06/敬语/index.html","92c55330c16ed445976bbe6573cb9265"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","73f6c9f2ebbb873bf81d9cc6a48b3efc"],["/2019/01/07/RNASeq数据下载处理全流程/index.html","8583f2e7c7484967f805110f5fad1cb4"],["/2019/01/07/cuda 手动配置/index.html","a9412c134e885d7ce3a4178ca656c68d"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","25fb484219b08054c4d1e0513068dbf7"],["/2019/01/07/docker-ldap-mysql/index.html","559072aff4815629b2b2ab5df70260a0"],["/2019/01/07/docker代理/index.html","9903751c62cacda9833aba28b0b5a181"],["/2019/01/07/docker安装/index.html","189f9f1ec240c093a4f0ae2589f62f81"],["/2019/01/07/docker容器挂载硬盘/index.html","3c0c7e6046660157a3ef13b651c8075e"],["/2019/01/07/github上传代码/index.html","b42b4c8e8bd56871c89c78aa36f0de45"],["/2019/01/07/kaldi 安装/index.html","2bf58bb300df41498f84cec6db4f7efe"],["/2019/01/07/linux常用工具/index.html","b06f92af2bf656c633646873e15d25a3"],["/2019/01/07/opencv/index.html","273331ed210e018fba9393b5ecd258dc"],["/2019/01/07/ssh 远程连接docker/index.html","2de6add8b3d19b1e9cae697ffa0d0f97"],["/2019/01/07/导出/index.html","e5f084784f4cb32bdecd52a22a45fce7"],["/2019/01/07/换源/index.html","df61a66efb7271cf0d61985ffe82ae3c"],["/2019/01/07/服务器配置LDAP/index.html","3eb8bfc360fdcd21eabc8527b2be8ab6"],["/2019/01/09/markdown/index.html","78de57f6ef6f3cd26768ec65cf8f382a"],["/2019/01/09/opencv图像美化/index.html","df2d523b5432ce9d32239117b17b411a"],["/2019/01/11/19单元语法/index.html","7c19d666a55f7589bfd9dc99d164697a"],["/2019/01/11/20单元语法/index.html","cd795d187e0a25ef6da52d3b72c0fadf"],["/2019/01/11/opencv-图片几何变换/index.html","138743881d867b8e82640422f4bd0617"],["/2019/01/11/opencv-图片处理及绘图/index.html","9b618612aa7196c90d276f25125df623"],["/2019/01/11/wine安装qq/index.html","4efc23d48ceddbcd8aff51c2b272e1db"],["/2019/01/12/tensorflow-可视化/index.html","128c13f35b60624abeeef3bd606960ef"],["/2019/01/12/tensorflow-基础语法/index.html","c109b98c39e96399c41a075949225c8d"],["/2019/01/13/RNN/index.html","fbd48dc3b8415db7d89f10b7ff6bf6a1"],["/2019/01/13/keras实现CNN/index.html","055bb67ad217a6116dc2ef9502d708d8"],["/2019/01/13/卷积神经网络实现/index.html","504aa3361db17b3d9c8f07c566b77e14"],["/2019/01/13/循环神经网络RNN-写诗/index.html","9af3f5109cd8f411c28d0149f1fce774"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","50c4a07469074818cdbd8674750c801e"],["/2019/01/14/反向传播/index.html","440104e7f71f9fe178ff230071239c04"],["/2019/01/14/图床/index.html","120bf6ec385139b2f8a7f7901ebc6433"],["/2019/01/14/感知器与激活函数/index.html","ecb8a03df665a73921b23ef38d602c5a"],["/2019/01/15/PIL简单应用/index.html","327cd0d75a36d581bb29abd8fe1c9e43"],["/2019/01/15/卷积神经网络理论/index.html","da2a183ea5348f2fe88bc547c1eb7312"],["/2019/01/15/图片分类之pca-svc/index.html","82d44177b3841eca488bd39af243f73b"],["/2019/01/15/强化学习基础/index.html","2c7b6bcc1f2b93f1af97c206480db320"],["/2019/01/15/经典神经网络/index.html","230788b120436cba4d836fa55aa4f99a"],["/2019/01/16/DQN/index.html","0b9caba1b8ee9ed37b3afcf0a77d3870"],["/2019/01/16/TCP传输图片/index.html","50f579084fb4aa8689e833aac30ef38b"],["/2019/01/16/时序差分学习/index.html","a960e5acc984f5fa530fb4ed45170cde"],["/2019/01/16/蒙特卡洛方法/index.html","f2f12a484347a36520efa24b1ccbbf77"],["/2019/01/17/Double-QDN/index.html","0708cce426a699c47f3948b5524a790c"],["/2019/01/17/RNN理论/index.html","98a3dd4dbd92791e9da81119096beedc"],["/2019/01/17/梯度下降/index.html","4d8b94ee2972497e5c6bffd70da00ef5"],["/2019/01/18/PG和TD3/index.html","cee6e167d397cdd3232ee4f0c4d6f147"],["/2019/01/20/21单元语法/index.html","965fe60564ec0df08ee3d86c20dba7b4"],["/2019/01/20/GAN理论/index.html","6c694bc1143bec78982ed84e547b9d01"],["/2019/01/20/PG3和IRL/index.html","74a41649f4bb7b088b12ee4be395da39"],["/2019/01/20/数据集/index.html","151498fd33124eb8742ec5b1cf2e9282"],["/2019/01/21/DCGAN/index.html","b91d558b9c0d8b26d5f4eb682d0a15f1"],["/2019/01/21/LSTM/index.html","3f9d6252904bc75343a35bce64968f03"],["/2019/01/21/点击预估/index.html","5ce917349151f24b89476e38a9ce1455"],["/2019/01/22/SVD分解/index.html","81437720b1d3523af3fa069e5afda59f"],["/2019/01/22/SVM/index.html","96cd0375c5f3fa53384ac975ab6c7862"],["/2019/01/22/机器学习简介/index.html","56b1e58a7d493d26677a294dda147796"],["/2019/01/22/线性回归/index.html","88ada32da746e522f1b55bef9753e6b4"],["/2019/01/22/逻辑回归/index.html","7ffc76815a1431c2d42f67d1b6432db1"],["/2019/01/23/numpy/index.html","144063b1b95d727038f2cb5ee90aa088"],["/2019/01/23/决策树与随机森林/index.html","8aed2454a5e5f2f2483ab85bb42b6acb"],["/2019/01/23/聚类/index.html","2116fc8141f0646d620309dfba1ef34b"],["/2019/01/24/matplotlib/index.html","96b8f1282130ff1660417734e9a2de36"],["/2019/01/25/pandas/index.html","68178a08ca45d601dec045eceb6ab0ce"],["/2019/01/25/语义分割/index.html","1c23875fbcb93c0b3bcb244865e48bf3"],["/2019/01/27/22单元语法/index.html","bcc60d44fce77c4b5ff91392cb5024c2"],["/2019/01/27/SVM案例/index.html","0fd266973e88181cccac6ef579e9e61e"],["/2019/01/28/requests库及爬虫案例/index.html","fca23aca782ce824d47cf64c87765f06"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","a25ddf5fac23cb560f25d25383b26b05"],["/2019/01/28/异常/index.html","636b61c42b47b321b29988fbeee7df96"],["/2019/01/28/描述器和装饰器/index.html","79d7cc6e09334a9f29001e2cf5615c2b"],["/2019/01/28/文件/index.html","b1974b58e38d163aebf54c625b06dbf5"],["/2019/01/28/正则/index.html","358c1a46d6bd78e76c2775bf1437f8f1"],["/2019/01/29/函数基础和函数参数/index.html","8f12fa7b6dd53cf7702573c074771aba"],["/2019/01/29/多继承和魔方方法/index.html","4164a1f5b3d926f61aa84bb744e9440a"],["/2019/01/29/类定义、属性和继承/index.html","caba4993d321c8c73004abe5fd4269cc"],["/2019/02/27/23单元/index.html","692bb540d77242f5c125c42340cf9887"],["/2019/03/12/hexo加速/index.html","3d7248d130d3b899e179db2a2633b1a1"],["/2019/03/12/hexo系统重装恢复/index.html","e02d8c14fedfe817ffcdd6df8d6f44aa"],["/2019/03/13/24单元/index.html","63de648e211994aa56b88772f0910387"],["/2019/03/19/25单元/index.html","b4781aa665f3aee190eae9afa3c52433"],["/2019/03/26/26单元/index.html","2d7b1ba2e39a8706e1773bc37c92735f"],["/2019/04/14/27单元/index.html","e6f12540a3bce5fb40778ebb80fd6d2e"],["/2019/05/01/28单元/index.html","cdcbca54c691c7ee60e0f988cab8b2f5"],["/2019/05/02/29单元/index.html","387c55201be66e00a929a0c7066ca7b5"],["/2019/05/12/30单元/index.html","7e03109c5e7ffbfd40bb50ad412d40e1"],["/2019/06/03/jni/index.html","c1fdbca0f22cc6be8fcf832432e4109d"],["/2019/06/07/JNA/index.html","2c05d7bc2beabea6ac6905dc2833d37e"],["/2022/08/07/R配置jupyter/index.html","f7f7d72fca71b63e0bdb91a3abd01595"],["/2022/08/18/FFmpeg常用命令/index.html","914af86bfda69d4c1b1e7cd0a1a34d07"],["/2022/08/18/linux系统代理/index.html","8a2896408f4e9c99cf27169e14b062dd"],["/2022/08/18/matplotlib补充/index.html","43aeea8eefa9a360a3c9087397471267"],["/2022/08/18/常用命令/index.html","bee718041b195fd5c30a6f38983c087e"],["/2022/08/20/sacred/index.html","d54383b24da0304331cd39711f28f8d0"],["/2022/08/20/wsl/index.html","e63d12b43c0bea2d6277eb174c6282d9"],["/2022/08/20/双系统安装/index.html","df259bf6163fc9e5457e956dee5de251"],["/2023/06/28/source/index.html","1ba0439e9b531136d514bed11804f280"],["/archives/2018/12/index.html","d68e0aaa65a8e60bbad3f55e6139fa9a"],["/archives/2018/index.html","251cfebf02398b3ff51907d04d301e7f"],["/archives/2019/01/index.html","61abe05705806618032d890a74e4a411"],["/archives/2019/01/page/10/index.html","b8ef423f09279198900696d859d655bf"],["/archives/2019/01/page/2/index.html","d659a94626379544bb968735c760e5d4"],["/archives/2019/01/page/3/index.html","a16ddbe06754e226a715f50313038d34"],["/archives/2019/01/page/4/index.html","bb6bddce62548c8c61c6fea8af514ea4"],["/archives/2019/01/page/5/index.html","3e433bf97fccb6d99fcbf98a0705abcd"],["/archives/2019/01/page/6/index.html","cf21c8065460e20b20ef1bc9359df167"],["/archives/2019/01/page/7/index.html","138d71c71568ee13d1e7d840672746e5"],["/archives/2019/01/page/8/index.html","bce5e4bb513dcb5194873d9038d06ffb"],["/archives/2019/01/page/9/index.html","4a4b19b842a4f8ab4b2e0dd564fa25cb"],["/archives/2019/02/index.html","60e836acb735f2abcbc0d4aa3365057a"],["/archives/2019/03/index.html","968194161db9106ebff2cfb6a91bb5c3"],["/archives/2019/04/index.html","a14e28d557332971c125e6e71a60d69d"],["/archives/2019/05/index.html","1ca899ed68dacae938b5e651b42c9b51"],["/archives/2019/06/index.html","f9491a39cb3ed1064f704c9d81727abc"],["/archives/2019/index.html","549f685c18e2b0716427fdb8aa228f9a"],["/archives/2019/page/10/index.html","3d53eb63ae6204d100aab5e8988a3226"],["/archives/2019/page/11/index.html","3c276c25ee4741a94beccab5c2cec54b"],["/archives/2019/page/2/index.html","f7ec2a758d298fb971c61626e43121e7"],["/archives/2019/page/3/index.html","39f5bf554f611a4750587b2dec1623f1"],["/archives/2019/page/4/index.html","f1df2715fe3331a66456e7f2c8acd24b"],["/archives/2019/page/5/index.html","699ce48b5effa11a1940c2477439db53"],["/archives/2019/page/6/index.html","4a7b644c68841aca5e4bac1e960021c7"],["/archives/2019/page/7/index.html","039cc3ec28d6be6e98634e6229505f04"],["/archives/2019/page/8/index.html","e52a7bbe7593f83ee321fdf66dd034e3"],["/archives/2019/page/9/index.html","8f8ac38d76cd2ad2e09ce68ceb3cb24b"],["/archives/2022/08/index.html","f35abc062da0910b7c7d3eabd1767058"],["/archives/2022/index.html","03966fb268dffd1d2d9d9bb20f3c0aa4"],["/archives/2023/06/index.html","b468eac079a55ab80ac2f4bbd229023f"],["/archives/2023/index.html","7d90a53a2de9eb75d748f9a2514db571"],["/archives/index.html","3518359a7f47503fbc4d722e38eddcc8"],["/archives/page/10/index.html","eb3278c9ea392a62f0f04d37cb85bce4"],["/archives/page/11/index.html","bb104524c64ea55c425d822d33b8953e"],["/archives/page/12/index.html","ead34d7902e057e71cef982f079f02fc"],["/archives/page/2/index.html","3b13cafe0d419df80c69c6004427f727"],["/archives/page/3/index.html","c0f89f47e534696626a0cd9a0e3122fb"],["/archives/page/4/index.html","fab6154144fc28990d06e4b8b1281a71"],["/archives/page/5/index.html","57ea7ef2e860ac776a426d92f92701f0"],["/archives/page/6/index.html","4ea703252e16e5dd04d0ebbbc5e300b8"],["/archives/page/7/index.html","79db6f7a791e5222bdf77fb839524dd8"],["/archives/page/8/index.html","4aa24969c0f8bfd990cd349826163170"],["/archives/page/9/index.html","ffac542f3692fbef9934f7ea65af0732"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","f4c5f50044c257e02f2c92475e7e2b29"],["/categories/dxz/index.html","5910b0cfe25f430334c90c7084c05ced"],["/categories/index.html","5e0ed4b65c26629cf296582171068ee2"],["/categories/linux/index.html","c63414a44f43a7793b4eefad617664cd"],["/categories/python/index.html","7e08eeece02611c7b0eebbf9b971d37c"],["/categories/tensorflow/index.html","50db8555eae4796a0719dbd1751cc29f"],["/categories/图片分类/index.html","1f10fd12f81b2d675564bcf44bb430f1"],["/categories/工具/index.html","9796f63a38e297d0c3377cb9623365c8"],["/categories/工具/page/2/index.html","4d522adf125ab06ae6b2cd56af118d2c"],["/categories/强化学习/index.html","490b2b9bcf3e77083b7deb49be1cc7e9"],["/categories/数据集/index.html","c595f2432a5c23c8f5e3554515fe13e5"],["/categories/日语/index.html","3dd0f86be314f8e2ad53463457fdb331"],["/categories/日语/page/2/index.html","6678b6b63a021bb77d8da79d51b3337c"],["/categories/机器学习/index.html","a1b9f4d20344821ebb9bfb47d52bba36"],["/categories/深度学习/index.html","cad8a7522564752ea53af010a06fd97f"],["/categories/深度学习/page/2/index.html","2c9bb4b1b27cfd11de4f6fb597c2a894"],["/categories/深度学习环境配置/index.html","d65df170632a5eed1006aeaff403b553"],["/categories/深度学习移植/index.html","b2231cec7d0f455e04b8957a6d96c4cb"],["/categories/计算机视觉/index.html","42ce197ea215e9a7563b3bf7fe79ca25"],["/categories/读书笔记/index.html","1142d36751d9619941987b8c4417a619"],["/css/main.css","02af23c7d88908c1973586b818b8037d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","fc559353a7f1f510c09b588ee6d0fc53"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","f58e7789ec03456b833d7537567d2ec6"],["/page/11/index.html","cfaa7fbe70f4eccebdd1f5708a26d066"],["/page/12/index.html","9c44daa9422629534583fffd03eea7b9"],["/page/2/index.html","fe42ee990065513a96af041fef736a90"],["/page/3/index.html","7529a88f64e7a07ae8304ff183bfa3b3"],["/page/4/index.html","334102c89d947f8af80d8d10888cd4b2"],["/page/5/index.html","a235472ccddbc71c0dc5f9e00c3d02a8"],["/page/6/index.html","a1ada6cc29c8c29e4b39612757bd45f3"],["/page/7/index.html","d1247a204e9c4bf9b2322b27bae248be"],["/page/8/index.html","4c4cca2a6f2eace1c33da7436e15f185"],["/page/9/index.html","c4d6232152b8db53577a90000551e59f"],["/sw-register.js","bfe650e00b9db7dbf0b8e35b80a19cff"],["/tags/AlexNet/index.html","9ed6752350627e9e5b868f459c00aa9d"],["/tags/CNN/index.html","3b936c86d1d41440613b2a447be9f7eb"],["/tags/DCGAN/index.html","210ca3cd2572d6bab3fb22091a026c54"],["/tags/DDPG/index.html","46b051e0258a93523fca16788ec912c9"],["/tags/DDQN/index.html","46160721b4ed0a6a2129b1a6eafee3ee"],["/tags/DQN/index.html","8813fdbe928550a11dc3832997052f1f"],["/tags/GAN/index.html","dbec3d59e134828e3fb0ba3d3d719b3e"],["/tags/IRL/index.html","cb1baf7366685fc74433f4bc17ea75d0"],["/tags/LSTM/index.html","fa076cc36e5e507da0243e4a60a954b0"],["/tags/LeNet/index.html","783b2350848421e6d7b621bda409836b"],["/tags/MC/index.html","22305a9d4888817e9c47e8275751143b"],["/tags/PCA/index.html","6fe51a95afa08e75ebc1f47497f4080f"],["/tags/PG/index.html","9b7ac087d3cf9c0d66992f5e9d10324c"],["/tags/PG3/index.html","28ce879fc7bf4cd17ae9853984690044"],["/tags/PIL/index.html","c87ae0f89751e552c24b316b0971031b"],["/tags/R/index.html","fd86e2ba07971de2aa0a80461b2d94fc"],["/tags/RNASeq数据下载处理全流程/index.html","e990fc9876ca05ce533a3884185b36be"],["/tags/RNN/index.html","e819657b748b8d570cc94e8bd04e7697"],["/tags/SVC/index.html","457afca2b2894a31ef2e395c34e4f6c4"],["/tags/SVD/index.html","46adac22a877d3a7ddfb5fd72ba49bbf"],["/tags/SVM/index.html","ce092a5047e774b25361166ab8c44919"],["/tags/TCP/index.html","384d7f0a49c94e6e335f5111c39021a3"],["/tags/TD/index.html","6113f6cd56504f4af6da3ee260e81c27"],["/tags/TD3/index.html","a167eac7563f33569f967ae3bf07e170"],["/tags/VGG/index.html","d78d09c089ca3e7784a48299e7179991"],["/tags/amd配置/index.html","0c89b74a2ed671167954b7eb4057b903"],["/tags/anconda/index.html","2ef8c5704cde4306501e371ec5d1d090"],["/tags/conda常用命令/index.html","50ead80440c170f1c7ed87efcf74235c"],["/tags/cuda配置/index.html","0a3ff78b60103a38b64e08e1d8250313"],["/tags/docker-ldap-mysql-arm64/index.html","7c2219f8735950042795ddf4ae948256"],["/tags/docker-ldap-mysql/index.html","bb1b2acc0ac142b6c734ccc3bb61499d"],["/tags/docker代理/index.html","1f047a15723e94cad8c29880c7765190"],["/tags/docker安装/index.html","1f3c7d11e13dd53cc61daef0f3a35cee"],["/tags/docker容器挂载硬盘/index.html","87213f1cd66cefa5b9c9696526183674"],["/tags/ffmpeg/index.html","9ea26d6aa28b43fff65e17afb6d75cb4"],["/tags/github上传代码/index.html","33498fad8711415f23cf88b839f782b9"],["/tags/hexo/index.html","75513f88fb5402c426c828cc35d07d5e"],["/tags/index.html","9a089add69112c31af62a10199cb33c0"],["/tags/java调用C/index.html","da362f0ee3b6045b59750865933d6d98"],["/tags/kaldi/index.html","6186d3d1ad69fbfdd928a91602a2e0dc"],["/tags/linux命令/index.html","b1e267f07fd1f8a475337b216be2a781"],["/tags/mamba/index.html","a74d119c3e367fa0dc264d88c87e4e07"],["/tags/markdown/index.html","f2daa31b425ffc421dc87b9718e4f54c"],["/tags/matplotlib/index.html","cc67cb6c7926a9547c3ed6ddf2a900fa"],["/tags/numpy/index.html","56e50505be7d9954b5c94b6e66ec8659"],["/tags/opencv/index.html","a7f9d60067fe51a23fa5bd9b984b2af0"],["/tags/pandas/index.html","9e529759d548443242867a6c572c84ed"],["/tags/qq/index.html","17374dd98787fc48e30b0138b3bfb84a"],["/tags/requests库/index.html","550799223778defc5cc30161432fc174"],["/tags/rust-多平台demo/index.html","854876c7a6ff901dce8ff32c6fb70ebd"],["/tags/sacred/index.html","d84e12f36b947791181581baf40ffb32"],["/tags/ssh-远程连接docker/index.html","b79e6ead5b8eb5abc15c568b1d084d82"],["/tags/tflite编译/index.html","64f8e3e622ea51a8daffe506d361678f"],["/tags/tflite转换/index.html","18330c487985f466899976ff34546206"],["/tags/torch和apex安装/index.html","bd5e52c8713f8a2f06d3d2f307b05f7e"],["/tags/vscode/index.html","797d6648033918f7266be0642f77001d"],["/tags/wsl/index.html","5ddcc519f8d694195a5682cba7858946"],["/tags/zsh/index.html","0e02f573d3abb5749ca91f0c324b7135"],["/tags/代理/index.html","17c9866e956562e6eaa82e9f38c03056"],["/tags/决策树/index.html","68240ff5aaebb1d335723a5250a084df"],["/tags/函数/index.html","75a9be54e2d4a1b97d707096afa8ca74"],["/tags/列表推导式/index.html","1e5910a06e46bc8297b15c2b8638d877"],["/tags/助词/index.html","02ae2b48526cb52a7d8adbded55827a0"],["/tags/包/index.html","1a30ccb7435d6afe1eb29d1b4fabab0a"],["/tags/卷积神经网络/index.html","d19c7777ba85022ccb27214ee55a35cc"],["/tags/双系统安装/index.html","a1400f095dfc7392dbdb3ed77601a4a7"],["/tags/反向传播/index.html","77465338ea35ecc81ef4a26bb8f76516"],["/tags/句型/index.html","24efa9c79e5b3fb09801f1c326141e7f"],["/tags/可视化/index.html","54738f081204766348ab7f820906a049"],["/tags/哲学/index.html","c2640766072aa142de826c7fce91a14a"],["/tags/图像美化/index.html","9ec357d75154fd8bf93fbc16bc6f22b7"],["/tags/图床/index.html","32cd21c280fcc8f7edd5a9f1373c7dc6"],["/tags/多继承/index.html","575cfd21e97231af5748b425bc909aa7"],["/tags/工具/index.html","074dfdda6b53a82343ebf1b753a5c0d4"],["/tags/异常/index.html","8aad16b230f8ea5c1a636ccc258d31ee"],["/tags/强化学习/index.html","82eeda26834f0b2458f7b4d9d5090469"],["/tags/心理学/index.html","7b769bc27586b8edf1f5e4107e552843"],["/tags/感知器/index.html","5de94cab906fc2678ce662de3a045c56"],["/tags/换源/index.html","6007feec6358be684875d979a929425f"],["/tags/描述器/index.html","e2b19a542069b2b5395fdb1e20535d78"],["/tags/敬语/index.html","30eab8ebde791eaedcc69f19120755e8"],["/tags/数据集/index.html","bf416ec1aa1f99a06314207e6ef8ac06"],["/tags/文件/index.html","94b5c35033d1082e26fa0720b6738b15"],["/tags/服务器配置LDAP/index.html","3457e6fbf0876403318fca024c98ba78"],["/tags/机器学习/index.html","c242841f5955b96863e68f65ec564877"],["/tags/梯度下降/index.html","de7e2682e12e76316799c20ef6802805"],["/tags/模块/index.html","aa4e61a8021c7935e95e59d2643246d8"],["/tags/正则/index.html","a9a45f46a386119be69ce4b66550983c"],["/tags/激活函数/index.html","a9e4334376ac910efb8b62f244aedab1"],["/tags/点击预估/index.html","2d3c4e28397c2b7c961fc50fc433ed66"],["/tags/爬虫/index.html","90cb7f352138346063ceafcdfb08567a"],["/tags/生成器/index.html","93b0c229f55d762bb1b67ebcf84a80ed"],["/tags/类/index.html","36a2b5a99b725754815ec5157699161f"],["/tags/线性回归/index.html","af46dce8601531c7e9307baad2a98224"],["/tags/经济学/index.html","2bf0a9cf6a2f2dea2e6592ffd1916c85"],["/tags/聚类/index.html","8a2350c2d8cc128143901afab2388f3c"],["/tags/装饰器/index.html","2a45289fd92ea4d12d8928b9909151e7"],["/tags/词型变换/index.html","bfc17d509d4cf93a1ba190fd0b51a2b8"],["/tags/语义分割/index.html","c190675ae3a515b71ee560ef4fb65f58"],["/tags/语法/index.html","9470b5fc006242eb6c6b2977831d5be3"],["/tags/语法/page/2/index.html","58934a2230084a3bc609514acd50531a"],["/tags/迭代器/index.html","4d16d07bafb9b21bcbe0298687a2c683"],["/tags/逻辑回归/index.html","f65604ecd12051e86c56b7742edc3556"],["/tags/随机森林/index.html","2efaec33dec404a50472411f3e499e88"],["/tags/魔方方法/index.html","2f14f414d650468155c9d30cbca6ee43"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
