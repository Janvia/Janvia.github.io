/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","8a0fc22585dfb33074ba5ecbc6f6f7fe"],["/2019/01/02/Anconda常用命令总结/index.html","df5763cc2f38ef69c8afad93b25c248a"],["/2019/01/02/句型/index.html","9bdb0fd358e4776e8aa712eb07f92123"],["/2019/01/02/日语助词/index.html","07e3c07fd814d4c0e961165e44dfa201"],["/2019/01/03/on-my-zsh/index.html","e253c59e95fc51a71091e4a4e5bdeb5d"],["/2019/01/04/《当我遇见一个人》摘录/index.html","a2547f55b1a162630067d69e365a1abf"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","f71efb2933b8348a936f44ffe348c10a"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","cef51fc9af1ce52d0cac0b92c1178ab1"],["/2019/01/04/经济学笔记/index.html","7708f1c02b116276ba6bcc9337a0fcf1"],["/2019/01/04/语法总结（5-15）/index.html","de8b54628dd3de08a5dab9a2cfa06d94"],["/2019/01/05/linux常用命令/index.html","869265eb7c4528f0aa6e9d4f6d0f9e46"],["/2019/01/05/mamba/index.html","48597240607cbb0acb14d2a24d39fed4"],["/2019/01/05/onnx2tflite/index.html","1a727e9d50c18b5ca668f927deb234b6"],["/2019/01/05/torch安装/index.html","bc9f8a56e9a52c71ec80bfbb2a076098"],["/2019/01/05/vscode/index.html","f586b2374edcd9d4a46699a5b09bc208"],["/2019/01/06/敬语/index.html","2f437a9c2b8fc04b303709e7588f57e0"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","79737e62e473c8456e7d83d119b3e405"],["/2019/01/07/cuda 手动配置/index.html","cbd7c091f12d413660d8483adf5ce3e7"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","e60c412505b1ca7dbd39c1511c8cbcd5"],["/2019/01/07/docker-ldap-mysql/index.html","4fafc304f66562d876f148aaa2c7af03"],["/2019/01/07/docker代理/index.html","ffd5e6f35d168f2fccc95b7d69f2f199"],["/2019/01/07/docker安装/index.html","1309553fa8ec97412e23b5c0cbe5ce5a"],["/2019/01/07/docker容器挂载硬盘/index.html","442b879dc92a25e5d951b96c110ae24a"],["/2019/01/07/github上传代码/index.html","8177d5e0faabfa073ae4e55be5d6fcbf"],["/2019/01/07/kaldi 安装/index.html","3bc64fcc9a5ced1beb826f1549a05f3f"],["/2019/01/07/linux常用工具/index.html","061b9f79e94e6654f920275f0eb04782"],["/2019/01/07/opencv/index.html","398e7f9a53b9a7f94b8164efcd678e05"],["/2019/01/07/ssh 远程连接docker/index.html","bdc645db68a448eb854a6c471d11ef82"],["/2019/01/07/导出/index.html","c9809248d9eb0874bf3b4dc4ab7182a6"],["/2019/01/07/换源/index.html","d110e7c41161e634e529ced7974fa81c"],["/2019/01/07/服务器配置LDAP/index.html","1a6586db228ecb6abe498d47078570ee"],["/2019/01/09/markdown/index.html","6f2d54f8c1bf286b2be340d12311799a"],["/2019/01/09/opencv图像美化/index.html","b6028331258827b489572b406d3c947c"],["/2019/01/11/19单元语法/index.html","c5c1cb5e539c1a47665cca7adac346ac"],["/2019/01/11/20单元语法/index.html","b8abc254079beea9285494601914961c"],["/2019/01/11/opencv-图片几何变换/index.html","6701ade2fb863360721fa7531822c314"],["/2019/01/11/opencv-图片处理及绘图/index.html","9a4c3dcff0e1490683fb9e31b2a4f73a"],["/2019/01/11/wine安装qq/index.html","a7a8e8e6f2adca399c6afab3ddb74f20"],["/2019/01/12/tensorflow-可视化/index.html","65781512de3ba37ffbe7b11479bc7450"],["/2019/01/12/tensorflow-基础语法/index.html","52be7d2a5ebb43df9c71e5015da818e5"],["/2019/01/13/RNN/index.html","63604ff3552ea25b9fb9bef26e0f5614"],["/2019/01/13/keras实现CNN/index.html","5dc0e4e7bea956f6885b49e572b79c5f"],["/2019/01/13/卷积神经网络实现/index.html","40c336d72c7544e48f47ad5ca95960d3"],["/2019/01/13/循环神经网络RNN-写诗/index.html","6395ba829d051e7f1ffdf52702df385e"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","3601a41a59b373dca2f20ecc6dfa800e"],["/2019/01/14/反向传播/index.html","026a099363bc259692dbf9709bc21289"],["/2019/01/14/图床/index.html","be6f9b8f3397de1d0b39f83211e45c91"],["/2019/01/14/感知器与激活函数/index.html","18de10dbd91561be0cfe68dba41d35fc"],["/2019/01/15/PIL简单应用/index.html","a65b83920b16b412c1b3363b41ad47bb"],["/2019/01/15/卷积神经网络理论/index.html","10e29c7c18c03cbe593658364e0b7648"],["/2019/01/15/图片分类之pca-svc/index.html","0b98fda0df4c5a9590db575f913602d7"],["/2019/01/15/强化学习基础/index.html","1744fd06cb038ba803d7708f4541e88d"],["/2019/01/15/经典神经网络/index.html","7a1651b9aa5b3f27912fbdce58d91266"],["/2019/01/16/DQN/index.html","4ba15917007de59f66f4b53367e7f887"],["/2019/01/16/TCP传输图片/index.html","1559e2679bc56575e66f2f08f5a8513c"],["/2019/01/16/时序差分学习/index.html","a2d206d32779c3e8e70fcea1bb50e899"],["/2019/01/16/蒙特卡洛方法/index.html","a29b07ba066984b30b2d5410e71fd985"],["/2019/01/17/Double-QDN/index.html","db9d5dc3c38e62310023a897a04f79f9"],["/2019/01/17/RNN理论/index.html","275d0113586bae7e60f9660cdb4cde5e"],["/2019/01/17/梯度下降/index.html","ff5f613c8f970f80cd452da84e7c131c"],["/2019/01/18/PG和TD3/index.html","8583d60c6bc67e65be0f7711e976c9c6"],["/2019/01/20/21单元语法/index.html","5db954b731d149f515fd58607631837e"],["/2019/01/20/GAN理论/index.html","8a582b0fa2d9aa7c7ac2bb8ef50f9e57"],["/2019/01/20/PG3和IRL/index.html","dd723c08a1dc44d3dda0f2d866cfa807"],["/2019/01/20/数据集/index.html","c882e9c3915c52d9ad3e5b8462fc7f0a"],["/2019/01/21/DCGAN/index.html","a5cf05c6795adb45a306b82e67cdb527"],["/2019/01/21/LSTM/index.html","97030e650b5e4871e34c86e6f9de6c1b"],["/2019/01/21/点击预估/index.html","fe75338ca8c17908dfb3a623b7bf3227"],["/2019/01/22/SVD分解/index.html","114875be25fd267042af41ae3ee827d3"],["/2019/01/22/SVM/index.html","83f735802d007def4469d02747c0f91a"],["/2019/01/22/机器学习简介/index.html","28db40936b0579282c8682c8e59859e9"],["/2019/01/22/线性回归/index.html","8405bad6f9b3dd14b7b07fbf9f396ba0"],["/2019/01/22/逻辑回归/index.html","982806b95555b9c6778a932f3cfd7dcf"],["/2019/01/23/numpy/index.html","38b148f7a2de4e37aafaad8afcfc55d9"],["/2019/01/23/决策树与随机森林/index.html","b854eb78cc9ddeb9ca803406dada98f1"],["/2019/01/23/聚类/index.html","c476cd40c08fc228cf057f523ab3e49b"],["/2019/01/24/matplotlib/index.html","d699486ac058bd825000ddd21474db48"],["/2019/01/25/pandas/index.html","6971f30ef4d0881379f3127c00bb3774"],["/2019/01/25/语义分割/index.html","f4aaf5317f03a2e58041fce09169f582"],["/2019/01/27/22单元语法/index.html","38a655056b892a35b534d020c1c892d0"],["/2019/01/27/SVM案例/index.html","8a3003ea6b0ffff59c200018f490adb9"],["/2019/01/28/requests库及爬虫案例/index.html","e95a891bb2ccfe0551d2d548b85f5085"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","2d2b463f1be829ec36d6ef9d25921c72"],["/2019/01/28/异常/index.html","0f24177bec8c3d6657a35bf8c31b2073"],["/2019/01/28/描述器和装饰器/index.html","fcca7530d29095fc0756ae2c4676d5d5"],["/2019/01/28/文件/index.html","63032eff514651ee91696544e3c264a9"],["/2019/01/28/正则/index.html","8aaa6645412e9e546dbd85ce8e53887f"],["/2019/01/29/函数基础和函数参数/index.html","a9b074d2bff312523597e42d83c31dc7"],["/2019/01/29/多继承和魔方方法/index.html","cf69157cdf17ff21153792099f2b589d"],["/2019/01/29/类定义、属性和继承/index.html","05d066039a9861061c2abd54db7c8656"],["/2019/02/27/23单元/index.html","2f4f0dbb9a757f9989cc32b52cd69ad5"],["/2019/03/12/hexo加速/index.html","0426330af0c5d7ad8d6c860ea92ea0c2"],["/2019/03/12/hexo系统重装恢复/index.html","7cd275743b97212b480261165c62084d"],["/2019/03/13/24单元/index.html","1895089457d0eba251c5d3b0bdd3aa7e"],["/2019/03/19/25单元/index.html","3eeb03212e7327af346ca964098f185b"],["/2019/03/26/26单元/index.html","fa796fe6783e126a957ca350ee74364d"],["/2019/04/14/27单元/index.html","4d48b398254e124a7917b24fbd8597e7"],["/2019/05/01/28单元/index.html","640495b4344ca2e15412e69d913a089d"],["/2019/05/02/29单元/index.html","eba4abde4b732538689f7163faa255f4"],["/2019/05/12/30单元/index.html","4a43759a8f63db9fa56bad368695c398"],["/2019/06/03/jni/index.html","c78dfb3ee76e71215b0eeffe979ddf2b"],["/2019/06/07/JNA/index.html","5187c58f2bbb69559bd71f7f46a088b0"],["/2022/08/07/R配置jupyter/index.html","f2511fe49845cab647e89370ee38bfe8"],["/2022/08/18/FFmpeg常用命令/index.html","4291883118d60de394ebbf3eef58c9c9"],["/2022/08/18/linux系统代理/index.html","5b3d190e44e7caf1f107aea3abdf72d8"],["/2022/08/18/matplotlib补充/index.html","f501b7b4b67217a5747efc0d32f4ff1d"],["/2022/08/18/常用命令/index.html","be2b77b1878187eed8488a431de05ed9"],["/2022/08/20/sacred/index.html","82d58fac3c697b0d1fdecbb7ffedbb66"],["/2022/08/20/wsl/index.html","73e6a7244c3de50ba509d49daedb61a2"],["/2022/08/20/双系统安装/index.html","a66234bdfd44c0559236048b62e86710"],["/2023/06/28/source/index.html","e711f3ec2cce8286c1a258aaa700c3cd"],["/archives/2018/12/index.html","39180f2e5fa369e33d0d80e23646e6ac"],["/archives/2018/index.html","acea1155927e093a1d78bf455cc4ef45"],["/archives/2019/01/index.html","7fb9325aa2e9fbc8fc98aaeb09ee57d6"],["/archives/2019/01/page/2/index.html","5ef7b3f625f5aa158f83e7a1ab4c0b42"],["/archives/2019/01/page/3/index.html","13c1c09da4571e6f1371f0aeacfc75fe"],["/archives/2019/01/page/4/index.html","36e62850d4d2606365efebd17382d51f"],["/archives/2019/01/page/5/index.html","63e23238a4eef6a96d29a971305d52c9"],["/archives/2019/01/page/6/index.html","05975fda0621604f41d3831acbb771eb"],["/archives/2019/01/page/7/index.html","32e67953b6075b121905bdf284d5cc76"],["/archives/2019/01/page/8/index.html","e15ef848e4b2eabaf9825ad050490699"],["/archives/2019/01/page/9/index.html","add1ec181f22ac4c3d26e566af0d446a"],["/archives/2019/02/index.html","8b05a494278d3b85028ea2eb87023f96"],["/archives/2019/03/index.html","dc90d381553eedd5591d748b9cc0f2e3"],["/archives/2019/04/index.html","628d8ba62aac55bc3b8c4073e4213ae5"],["/archives/2019/05/index.html","32ed34ffd8e18741a8453b74027dc093"],["/archives/2019/06/index.html","84a77193558a057099d18160d03b979c"],["/archives/2019/index.html","8d1fa52386470f57aa964d283d1cace2"],["/archives/2019/page/10/index.html","a9bfb1c801d693b9a07a1385c71a2976"],["/archives/2019/page/11/index.html","c71b97b649a75bb3ebfb212738c3b68a"],["/archives/2019/page/2/index.html","0078aacd2ace7446ec0a397d5b846792"],["/archives/2019/page/3/index.html","b2cd8d86434958f3da39a9bff522c76a"],["/archives/2019/page/4/index.html","5a9dba6f15accd882f3b7f2d75d203eb"],["/archives/2019/page/5/index.html","f54bb5a3550c4d2bef68b4cfda48e00a"],["/archives/2019/page/6/index.html","8298e77a3f9592c190020437981ba4c1"],["/archives/2019/page/7/index.html","13824935da22f98775f6d37b627e3847"],["/archives/2019/page/8/index.html","df514a8af9c393d30b34dbad1eb045a6"],["/archives/2019/page/9/index.html","a012829e91863418b628e908664b2c67"],["/archives/2022/08/index.html","45197bdb612c63279d02bb87ad8e3cdf"],["/archives/2022/index.html","8b4e60c5bb28994e33d6593ee98483a2"],["/archives/2023/06/index.html","9253334a6ea42290277363a6686a574f"],["/archives/2023/index.html","453524b3d71cf0cb4fc141d77f2462a7"],["/archives/index.html","d423ec8a955bd410d15609f96a4f317c"],["/archives/page/10/index.html","817fcb6726eb4f52439c1f45e7b45929"],["/archives/page/11/index.html","e2d04da88b24fa9542cdb992f3d4e72e"],["/archives/page/12/index.html","487aaf643892da5eb22b5b476c70c0cf"],["/archives/page/2/index.html","bcc4229e5e0bd4f16aa2dd90cdc55634"],["/archives/page/3/index.html","118046fffc7569854f0586598a6728c0"],["/archives/page/4/index.html","19fbe658d1a5fc24f58832193742d42b"],["/archives/page/5/index.html","797342a3b01f975bdcc48621587fb70b"],["/archives/page/6/index.html","6c8607b25f2250dc310d43ac6142e86b"],["/archives/page/7/index.html","df5bb747501cc027b179a9a1308a57f9"],["/archives/page/8/index.html","9b2b0eb01ee31ab33a9f4de2d53a7a7a"],["/archives/page/9/index.html","8efcdd91a6ea7670ca76a2296836c9ed"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","038a342d1695a1f38b99ccc7f7371fbd"],["/categories/dxz/index.html","09c8d7cd0933504b0aaf16b7ecb43dd2"],["/categories/index.html","496ee7c722b068918a15e0a1c7103fd7"],["/categories/linux/index.html","3ad462209c256f3429e9d7528d6ebc27"],["/categories/python/index.html","44816af51e34977349c78a56e82c2b9d"],["/categories/tensorflow/index.html","61289f2d1f9ed7624b9d4d1c09a0ffb9"],["/categories/图片分类/index.html","2f62efc62552efbec23d2f6b7e3726e6"],["/categories/工具/index.html","ed366c8a2d3d7b8295418a7d3aa7db8e"],["/categories/工具/page/2/index.html","5109d905e6003f446a5ad077ba8fc295"],["/categories/强化学习/index.html","4bbf69dc4bfad409308e55c9b217de05"],["/categories/数据集/index.html","cb64da57b26a72a7fa66b16ae8082419"],["/categories/日语/index.html","0ba33f32a51c67f7b71f53d9b21c3288"],["/categories/日语/page/2/index.html","b9ae6804cdef9ae2dc033a362e37cde0"],["/categories/机器学习/index.html","54579daf4b4b1937834ecacc677e7073"],["/categories/深度学习/index.html","65063c007d8fd551272731e06b0fdfbd"],["/categories/深度学习/page/2/index.html","0d403b275029c6c30382758eac2d5a8b"],["/categories/深度学习环境配置/index.html","f96c24eaccfbbd5469047cb8c7102ca8"],["/categories/深度学习移植/index.html","7bdc081314940307036ace3742979edf"],["/categories/计算机视觉/index.html","ff3b06a5bea5ec9cc9d44f441980ab62"],["/categories/读书笔记/index.html","1cb6ec049e48de320e6a35ca984d93b5"],["/css/main.css","3c151441718cd75681c70229ca852169"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","7fdf9090918350fe277ab058e891d338"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","208a50643eaa6cf52343ccc885eef8ea"],["/page/11/index.html","9d34d57775bd75ecfe621270592edf3a"],["/page/12/index.html","b6301e781d8387b021eafc61cff65c85"],["/page/2/index.html","a45e09e6351583e8adbcb91fac5ef09c"],["/page/3/index.html","23046ef8d559770b10ffed6473c742f8"],["/page/4/index.html","cd5ffc4ce08590814cf777fe29fde5e1"],["/page/5/index.html","2046439674f86d2f4e3664e7753416c9"],["/page/6/index.html","9039de18bc219a3e03f172a88cb75c3b"],["/page/7/index.html","99dae7368dc2bebd79d1b27ba2eebd6f"],["/page/8/index.html","6a03344a2e8f57720c6a9b80e5f0a279"],["/page/9/index.html","e237a4883ce495b9d0655b9c468fccbc"],["/sw-register.js","2b795900abad8fd121ae837324bbfa1e"],["/tags/AlexNet/index.html","cc37604924da7a6972565209f1f7a10c"],["/tags/CNN/index.html","95c5d13cf7d24beba41373024147fa7a"],["/tags/DCGAN/index.html","d98114db1faa1af3726cdd1a6ac3796c"],["/tags/DDPG/index.html","fbb35f1c3ea58b497f2cb622463fcb59"],["/tags/DDQN/index.html","c7328f2ed09a5a551b1e81258df4b91c"],["/tags/DQN/index.html","e98053b4da3b4b3a077d12c0975e209b"],["/tags/GAN/index.html","e54a273fec194896b1d4b82f84e6d9d5"],["/tags/IRL/index.html","7070261ca08d7638b500ab74139c5243"],["/tags/LSTM/index.html","c0a43a81d7bef57b78bd21549baf73ce"],["/tags/LeNet/index.html","4511a2672670a2559d3bd9cee7a5cac2"],["/tags/MC/index.html","83289b77ef8b021c930db7dc9f38d00a"],["/tags/PCA/index.html","7dcf44f2bfb7fee623ad04f2c76288f6"],["/tags/PG/index.html","e55285fc45d4c5800326532039d80c05"],["/tags/PG3/index.html","b90bbddad76ca7d8daf7dbe05670aff4"],["/tags/PIL/index.html","6d1d3cb1c3b72022d8a775582e17c188"],["/tags/R/index.html","8df06317a32a2198a12610fbbfbb6c01"],["/tags/RNN/index.html","91ef6448fc78212d3e16fc8d006ed13e"],["/tags/SVC/index.html","94f0ecb9e5602b8916443e66d8fe4419"],["/tags/SVD/index.html","7a788849af7373f4f6d8b288c0e79aef"],["/tags/SVM/index.html","f678aac722c7af0eaf24a32fcece6575"],["/tags/TCP/index.html","fc67819d9a086b9f38324d01ee6afa34"],["/tags/TD/index.html","f01a462bc188c64c2dfd601e516ac29b"],["/tags/TD3/index.html","9f00cd749fde8ef08490e9d9b63d57d0"],["/tags/VGG/index.html","e440c52a757d21d0dbf913c2ef8fba6e"],["/tags/amd配置/index.html","6a7ecccd85bc44505bfb38d7ea1b57a2"],["/tags/anconda/index.html","9ca25ac34ee48f9c1fc6b06e00bcc256"],["/tags/conda常用命令/index.html","ad25ccbf3261afdc9f7a79a5a7cd6b76"],["/tags/cuda配置/index.html","0d08094a271dca86b8111bd057c123e2"],["/tags/docker-ldap-mysql-arm64/index.html","95d70e4c4e4cdf7d66dfe205eb47bca2"],["/tags/docker-ldap-mysql/index.html","9e56089a3dcb1d85eff9d837088f6b69"],["/tags/docker代理/index.html","6d6b332a83e4f1a0857cbecc85e705ac"],["/tags/docker安装/index.html","587bf22ab1fab64aa5c0cecb0df93746"],["/tags/docker容器挂载硬盘/index.html","f9c2b8a71d0d37599f55a116e5925d40"],["/tags/ffmpeg/index.html","d97f830e27f171a411fd91732a2f369c"],["/tags/github上传代码/index.html","a7389d98ee7ccdbb1ee883f9e6cd33ae"],["/tags/hexo/index.html","59f1a0e516cb82aecb2d78cfddcb590c"],["/tags/index.html","8a508d179f2064e998effe9f2c492769"],["/tags/java调用C/index.html","273ed7c68616a47c28a3e3c1ad42ff8b"],["/tags/kaldi/index.html","17f1fbe1b118847c5e0ac34c35832a03"],["/tags/linux命令/index.html","135ac4c5a8610d130551125326ff8624"],["/tags/mamba/index.html","57776e57df80ef7532c8137753d58b07"],["/tags/markdown/index.html","117122378e919a52853d8796ea918e88"],["/tags/matplotlib/index.html","70c3fa5abd8cb36702695591e3ded8a7"],["/tags/numpy/index.html","ddc90f4443f9a08f65d547a0818babff"],["/tags/onnx2tflite/index.html","e9185c0ebf7bf032404abe531925059b"],["/tags/opencv/index.html","5db9866763231d1eb410273c3090a47b"],["/tags/pandas/index.html","cfcc9ffc2190fc5109c9790e0b2f5c98"],["/tags/qq/index.html","64463016c6f36a0c4e62dee90fa65caa"],["/tags/requests库/index.html","6209005429541602348eb9c6cc72d253"],["/tags/sacred/index.html","8a57d195eb90d319a3138b0c824c65fc"],["/tags/ssh-远程连接docker/index.html","c8a0b9c0f88a535f14455bc9937991f7"],["/tags/torch和apex安装/index.html","561f8475f7de2aa6d1ca91bf621b1fa4"],["/tags/vscode/index.html","f1dd72695e36099e7953a29f6dd4351b"],["/tags/wsl/index.html","dc13477eff08b1153133754903ac4777"],["/tags/zsh/index.html","a608dc81c560d10c75ec58c3c60352c7"],["/tags/代理/index.html","d6d404d07dac9b39504699c31dac1b1a"],["/tags/决策树/index.html","febcf233cf25ab0c28be1a4c25a015b3"],["/tags/函数/index.html","79b1ad884c4c485443dabf91bc33b6f8"],["/tags/列表推导式/index.html","59657f64b6a59b1b1780b064e5b58e92"],["/tags/助词/index.html","6947f370a22f86ef68f4907e3c3bd6cd"],["/tags/包/index.html","9708cf00ccf71e489eee63635cd97771"],["/tags/卷积神经网络/index.html","86ba8f05dbaaf3fbd572f55e2374b5e8"],["/tags/双系统安装/index.html","ce3d1d4a199397d6d87d05ac01f6b486"],["/tags/反向传播/index.html","3ddbddb63a393a6dc3beb2e94dd282e4"],["/tags/句型/index.html","f6f27ec685f97e2b2c31cb4c5771eedf"],["/tags/可视化/index.html","278a32875f9a1722a9c23e904c98dad6"],["/tags/哲学/index.html","b2c2c692337d1ed7eec08590dcfcc23a"],["/tags/图像美化/index.html","1e1d2490b2d632d89b66bde47204ea0b"],["/tags/图床/index.html","fa3c0cd5615de0aada1bc9dcc63dcb91"],["/tags/多继承/index.html","7a255cce70a0c8cd349f5ae0afd94a14"],["/tags/工具/index.html","ac7c8169120a37ec80736c196f9b2f84"],["/tags/异常/index.html","eb9073d5ae26660beb640f45be2a9961"],["/tags/强化学习/index.html","0d428908eb175dcd1cf774cdbed675a0"],["/tags/心理学/index.html","a4229802abd13d67f026907dafffed61"],["/tags/感知器/index.html","94ab8082799978059d6d3f257dd131a6"],["/tags/换源/index.html","c311423c33161f39dc1b21d3010b4283"],["/tags/描述器/index.html","13b58223aaea54fc39e9b0a010ff6370"],["/tags/敬语/index.html","1d1dd7d440ab8ee4b4e50b98315f1c8c"],["/tags/数据集/index.html","90e5dff3d9200bb8d9267046f26dfba5"],["/tags/文件/index.html","ba7b72bb7f960f69e6c04b7a38867208"],["/tags/服务器配置LDAP/index.html","10d073e176e834398fc30adf668034c9"],["/tags/机器学习/index.html","5739b2e2dbf811126d86044a64cd13f7"],["/tags/梯度下降/index.html","072de04ee969282b809dced586f75ae2"],["/tags/模块/index.html","3ae51024b44a6198ab1adf536c602014"],["/tags/正则/index.html","265d028e9420ee6eb12b036324f1ed16"],["/tags/激活函数/index.html","8dca92db31459a302fbd4debb624c092"],["/tags/点击预估/index.html","8074dbd365a9cb51e9f7421f05dc29ff"],["/tags/爬虫/index.html","328b773a0fbb8e6c063c0f65340d9c51"],["/tags/生成器/index.html","f5b6e63df83ec3355c594c0bdf9fde6c"],["/tags/类/index.html","44955af65214966226f8dc5761b81cca"],["/tags/线性回归/index.html","feda14e04eba212716057085a3b97080"],["/tags/经济学/index.html","6ad4e7712c6cc622b6e2537b84a6d6d7"],["/tags/聚类/index.html","f47d1469d7cc4f96d8a27f947096e0b3"],["/tags/装饰器/index.html","26e581d284c855d62f8fb12c7a19a9c5"],["/tags/词型变换/index.html","5e0ad1ab3321eed744b9825501d3ab47"],["/tags/语义分割/index.html","4a2336b229c459972bcb65590b027a09"],["/tags/语法/index.html","7426a2b91fcf7301abb7450c13ec1d30"],["/tags/语法/page/2/index.html","5df6ec5acf320550f0dfe7df0790a93e"],["/tags/迭代器/index.html","4955250bf551a867a191b5c738de8b4a"],["/tags/逻辑回归/index.html","c8242165657b8119d8ccf439fdb7c2ed"],["/tags/随机森林/index.html","47b371ecab628bb5586eb622ce9281ef"],["/tags/魔方方法/index.html","4efdb52f1bc89be972d24b6da4802d35"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
