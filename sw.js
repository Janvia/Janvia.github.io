/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","576f0dea2fa5cf7a2d49e321147fa9a7"],["/2019/01/02/Anconda常用命令总结/index.html","f52e31cf55391f0d21542bb7cd6141c3"],["/2019/01/02/句型/index.html","b39ee31923204ecd1e0b1244a59c73e0"],["/2019/01/02/日语助词/index.html","de4c43df0671a1eb7fd4542907447f83"],["/2019/01/03/on-my-zsh/index.html","a0be9c2eaaffe9e40eb733afb6176699"],["/2019/01/04/《当我遇见一个人》摘录/index.html","d7a224030998fb6eba218a65a168e9fc"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","77fd8c0190959cad0f913e8b0b3cc434"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","92fafaeb1cdb95f4e8aad9cfd2e7898d"],["/2019/01/04/经济学笔记/index.html","2c1e17ae1170112032e0375396c4141e"],["/2019/01/04/语法总结（5-15）/index.html","ad77a28a76a50824f6f14ef78adf6b80"],["/2019/01/05/linux常用命令/index.html","0a00f19a1d3560e90a8ca559b5ed0cb7"],["/2019/01/05/mamba/index.html","87f24601d78075957fa16e44b5299171"],["/2019/01/05/tflite编译/index.html","af267bdc982a27fba474c212c096a7ae"],["/2019/01/05/tflite转换/index.html","6f5b23adda07c5855fe9ce11159cb840"],["/2019/01/05/torch安装/index.html","9defba3197107926e69e9869249050f8"],["/2019/01/05/vscode/index.html","555749bdb38299f057238e2d39503ace"],["/2019/01/06/敬语/index.html","ba0a70b5ebded7d18538294970fc1748"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","144cb25f258f1545b6ca5bee5a79554e"],["/2019/01/07/cuda 手动配置/index.html","6848f115e1496e386302d6953329d63a"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","df158b7e5f230ee816f811e26093e9ab"],["/2019/01/07/docker-ldap-mysql/index.html","b2a38eb0b2837f190686dd9827e56af8"],["/2019/01/07/docker代理/index.html","74ea70ab5f69d03b550e2c4894951005"],["/2019/01/07/docker安装/index.html","78ca9caf0adc18fe38f07725af4ef79d"],["/2019/01/07/docker容器挂载硬盘/index.html","b66f773def8acc06ff0c7bf107af4031"],["/2019/01/07/github上传代码/index.html","14ac5dd7974d2b06bd91ecd7930190ea"],["/2019/01/07/kaldi 安装/index.html","530219a094092280dbeb1dcfb42a5b1a"],["/2019/01/07/linux常用工具/index.html","ba27dce4f09b973f1688b1361dbc1012"],["/2019/01/07/opencv/index.html","113cc72a6581370771d8e9e1e0027c16"],["/2019/01/07/ssh 远程连接docker/index.html","e90339f82e738463053295c99e3b132e"],["/2019/01/07/导出/index.html","d065435d0fee390c6f84b6bb34f67bc2"],["/2019/01/07/换源/index.html","8eb526a03fa9d17d986672d56d04e315"],["/2019/01/07/服务器配置LDAP/index.html","58f603b8396a782e0392921d32aefd0f"],["/2019/01/09/markdown/index.html","629f8ed2975a261c93c2cfa6daf1cf13"],["/2019/01/09/opencv图像美化/index.html","b3d38aa45817c747d58dceb46d8ebe2b"],["/2019/01/11/19单元语法/index.html","689c32dd817fcff1b69ba2fd704f887f"],["/2019/01/11/20单元语法/index.html","20daa999b976b47cf808538415ff7043"],["/2019/01/11/opencv-图片几何变换/index.html","4e7b9ee9c499672a5d27013545109788"],["/2019/01/11/opencv-图片处理及绘图/index.html","a4de46dc8cee9cab1cc1d1459c13cfcc"],["/2019/01/11/wine安装qq/index.html","01f9837a80d5f0a286e040f9e5174ca7"],["/2019/01/12/tensorflow-可视化/index.html","682840f3ba5837d3ef99f3b8cc9a5d62"],["/2019/01/12/tensorflow-基础语法/index.html","61464cdc059997ecf4ce2f5b5ce7ae78"],["/2019/01/13/RNN/index.html","3b7328d361f907375796f9b327d0ad44"],["/2019/01/13/keras实现CNN/index.html","f8ab6917e331a1ee0b4f577abd2cf7d4"],["/2019/01/13/卷积神经网络实现/index.html","9c6c3d986f6b407321b8c5a4aace1d02"],["/2019/01/13/循环神经网络RNN-写诗/index.html","cf3bd0731f239bd1e930d81f018aaf9c"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","6cd592df7a4e800c836472ad57561e5f"],["/2019/01/14/反向传播/index.html","1c891f4c0ee8995ba9d18fa99dd18dff"],["/2019/01/14/图床/index.html","fc641e78a153a5d6a330aeb5ca2c1142"],["/2019/01/14/感知器与激活函数/index.html","eaee4d0f86f74dae826ff48033ad605c"],["/2019/01/15/PIL简单应用/index.html","418fad8c8ac2cc33a07e9470f625b937"],["/2019/01/15/卷积神经网络理论/index.html","42a53a886c22fc8016e2cd8f229d083c"],["/2019/01/15/图片分类之pca-svc/index.html","56c992a3042c244b5a637e05846e7024"],["/2019/01/15/强化学习基础/index.html","9412653d6fc18e8a6716fc294c9eedfb"],["/2019/01/15/经典神经网络/index.html","6e9c8b8d1624e8da085529a7927f225c"],["/2019/01/16/DQN/index.html","5fd17307f563a8196bc5f5be143f593a"],["/2019/01/16/TCP传输图片/index.html","53e520668871a5f8d8fd975a35f6c658"],["/2019/01/16/时序差分学习/index.html","bcee69422259295196a849e53c60fde6"],["/2019/01/16/蒙特卡洛方法/index.html","e5d834c701e27ffcdfbe3af9a239c90b"],["/2019/01/17/Double-QDN/index.html","eac8d7ddda86b0cf871ef903b4b0038d"],["/2019/01/17/RNN理论/index.html","dc3752ecdec28470e2d8ca3bb13e8434"],["/2019/01/17/梯度下降/index.html","ad6d1f0a75f4cfa40b2c0cf24c5e44f3"],["/2019/01/18/PG和TD3/index.html","35b0afbb1c269c13bb71854e8cac9944"],["/2019/01/20/21单元语法/index.html","adde07035eb054dc9ae522bff8f92b82"],["/2019/01/20/GAN理论/index.html","ba0a5eedaff3f723a1cc678d599bd92c"],["/2019/01/20/PG3和IRL/index.html","995f40e462697b751bf4b45ef45a5a2d"],["/2019/01/20/数据集/index.html","53a79c456ccb439b2f94a5e95f54d0de"],["/2019/01/21/DCGAN/index.html","97734c9ea3fa7a6f59d650409eeb585c"],["/2019/01/21/LSTM/index.html","93a31c937843bada9bec04f4f64b62e3"],["/2019/01/21/点击预估/index.html","b2111a9e0923f4f8a672e25d4b5f713a"],["/2019/01/22/SVD分解/index.html","2debc12c29be9b4095604601ef58ea6c"],["/2019/01/22/SVM/index.html","cb34ae5e8876a08550edaab3ec2ac3d4"],["/2019/01/22/机器学习简介/index.html","b3c685dd072de1d3a182daddf999f35a"],["/2019/01/22/线性回归/index.html","05137ad0f24e46f35ee52b34bfa98833"],["/2019/01/22/逻辑回归/index.html","0673d1fe76316148e4dc12fe1e76d625"],["/2019/01/23/numpy/index.html","d245c413056928158c8ac97310245f87"],["/2019/01/23/决策树与随机森林/index.html","5b270eecd7076d9c4afc87a0e03b88c7"],["/2019/01/23/聚类/index.html","ffe5b38cd62c6db2535f96993ff674aa"],["/2019/01/24/matplotlib/index.html","5197fccf4cd945d2e45bcdc6a2ba4013"],["/2019/01/25/pandas/index.html","0fa44653be0ba3d43d5c18c2a55ef755"],["/2019/01/25/语义分割/index.html","3694339aadaeebd60fbdbd95b261c9c2"],["/2019/01/27/22单元语法/index.html","21bb5b3c525d9d09a59c3709f7f0865c"],["/2019/01/27/SVM案例/index.html","38f93bf127ae799bffd47b9a590447e0"],["/2019/01/28/requests库及爬虫案例/index.html","53efa31eec0c0bd1757535ac5ecf8af9"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","605e23600ae09280a0926d018810bff8"],["/2019/01/28/异常/index.html","72f3fa1b58089c8a49257a16ee0d2e29"],["/2019/01/28/描述器和装饰器/index.html","10152154152c8e3f53e18f805cc4d322"],["/2019/01/28/文件/index.html","603e78f76571a5490a2c4706599ad89f"],["/2019/01/28/正则/index.html","16e4e1b13613847cc350ffa6b255ddb1"],["/2019/01/29/函数基础和函数参数/index.html","095ef57b655407f02dd4083e3f7ce791"],["/2019/01/29/多继承和魔方方法/index.html","ffa7378c10d06d5cdbe02a754e45ff4b"],["/2019/01/29/类定义、属性和继承/index.html","c8d3ad0d56c587f3e66c71509013f1e9"],["/2019/02/27/23单元/index.html","fb3bdbcc3fa4408fdfcc34d2f142da54"],["/2019/03/12/hexo加速/index.html","e9e4f9fab2932849e37b3a4fd5064aa6"],["/2019/03/12/hexo系统重装恢复/index.html","41e9af12879c8cf2c72130bee66775dc"],["/2019/03/13/24单元/index.html","646b329a6fb84b962a7455521dca760e"],["/2019/03/19/25单元/index.html","6e16527461b5e877264c83211e8c30c0"],["/2019/03/26/26单元/index.html","eba9bde747b65b2b6ab4f147a009503c"],["/2019/04/14/27单元/index.html","0c6e1fa1cab3ac1584f511de37b316c7"],["/2019/05/01/28单元/index.html","45dfb4115d08cfb41187ed16970e5cc2"],["/2019/05/02/29单元/index.html","e6e1a505d25a17f418319d0408336eaf"],["/2019/05/12/30单元/index.html","f780a536df4546efc86e8d4984c39a41"],["/2019/06/03/jni/index.html","555b9ef61e7fa35248c4669c81408d3a"],["/2019/06/07/JNA/index.html","7149328b4a82564bb12f7dcbda6999e4"],["/2022/08/07/R配置jupyter/index.html","0e03fc2d121a1d1100434bf0d1c96fc6"],["/2022/08/18/FFmpeg常用命令/index.html","be7907f44f3a3a0e1547e95d0b3985bb"],["/2022/08/18/linux系统代理/index.html","6986b2f1f2194e87f2b15ddbce93e561"],["/2022/08/18/matplotlib补充/index.html","0535b2c2241542f1ccca67ceb148c1f2"],["/2022/08/18/常用命令/index.html","d976513bb0a4fe8fa0775a857fd2c71b"],["/2022/08/20/sacred/index.html","6f3fe0ea1ccc6c6a39588ac99aca20a6"],["/2022/08/20/wsl/index.html","646f9f7af0bf29d75b8fef1f366774b9"],["/2022/08/20/双系统安装/index.html","056c30e64ed21da959982edfbc25b90a"],["/2023/06/28/source/index.html","55d904cec39e504896b8077929f99c86"],["/archives/2018/12/index.html","ede1084c34e31ca9a85e32e970e24ec5"],["/archives/2018/index.html","4321601e4e68f7d091fa6fe4477079d2"],["/archives/2019/01/index.html","0907a525e134893260956554830907c2"],["/archives/2019/01/page/2/index.html","bbecb3d42b6278a0bdd389c53be3ed5d"],["/archives/2019/01/page/3/index.html","9d52ecf69abc69b7678fbf71da9e1cc5"],["/archives/2019/01/page/4/index.html","392ced1be1767dc4b381899db0403997"],["/archives/2019/01/page/5/index.html","b571eb2d5bdacca428f70ffcbe27d1db"],["/archives/2019/01/page/6/index.html","bc1bbc98c19c8ab03a97b86766266802"],["/archives/2019/01/page/7/index.html","f0c5c9ce6111854bca49dbc370a2f910"],["/archives/2019/01/page/8/index.html","d3c073eba1dede75d46e45ad40a5c23c"],["/archives/2019/01/page/9/index.html","560afba73a8f36a2766cfb4509da304d"],["/archives/2019/02/index.html","4ff827510c387692e3254fce17770e79"],["/archives/2019/03/index.html","4b422557b2a5cee73d294a15a90a921b"],["/archives/2019/04/index.html","6b1f3bb95c6c4bb4b129a94ed1e28cdc"],["/archives/2019/05/index.html","5a563afb3c9c30f297329f92187668b5"],["/archives/2019/06/index.html","b05cd7287d8bc9556cabbc56f8ad5b97"],["/archives/2019/index.html","25b8628a163bf70c888c13a5f20c6864"],["/archives/2019/page/10/index.html","577cbaac5f6a5bc3d6266f84ff36e755"],["/archives/2019/page/11/index.html","6580e4dbb34f4964da6f0aa8ed19e600"],["/archives/2019/page/2/index.html","ca4508739227d7dc064836a5f0b9e1f0"],["/archives/2019/page/3/index.html","c77586a7eabc9885a5ec04a80ed905f9"],["/archives/2019/page/4/index.html","861f36e06b416fe0417cd4e469d4311c"],["/archives/2019/page/5/index.html","a3767c41d7149da91b0be5c0fc239a16"],["/archives/2019/page/6/index.html","f5539c832ca9eb72dbfac105d2dcc772"],["/archives/2019/page/7/index.html","cf2ab622d301710fbb2ddbeb03d6370e"],["/archives/2019/page/8/index.html","463f4caa18a8a3998d90904d89e8007a"],["/archives/2019/page/9/index.html","4c9ca0540c6219e78f1180dd734a0281"],["/archives/2022/08/index.html","652fa0b2e9e97c28dd3672f55ee102f6"],["/archives/2022/index.html","c7a86a01c1d124bf23d5ab67da4225f1"],["/archives/2023/06/index.html","606b73bb446061c55fac88879dee4733"],["/archives/2023/index.html","f22afe46f6356f2b6ae747d8c8bca821"],["/archives/index.html","8cd7242e2f02a40f0415733352c778bc"],["/archives/page/10/index.html","24a28cb75952bcff69181e146b8b9514"],["/archives/page/11/index.html","0b171aacd9cef7da7601922bb6c88587"],["/archives/page/12/index.html","ccef750b8233f8ca5d93c816789342c0"],["/archives/page/2/index.html","7548d1b55449703434d4294ad85bc7a4"],["/archives/page/3/index.html","3cf75f064403c28ad991a44ffe49e28a"],["/archives/page/4/index.html","a8e32f1f1fb3871b31ff9fc85525b4d9"],["/archives/page/5/index.html","6272371ffa9446ad7ee5a9d21cb5b574"],["/archives/page/6/index.html","4745965192547db75201c8d90d78cadc"],["/archives/page/7/index.html","40a7129d912d9eb3969c4614c2e77d77"],["/archives/page/8/index.html","d10194be34c0566e29e6173a74a1de12"],["/archives/page/9/index.html","617b6178224c2d283218c0fdc23fa631"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","6cf91d0645e66c437eb653165771b057"],["/categories/dxz/index.html","2d3ce0aefcb14eedb38c9a550fdf42e0"],["/categories/index.html","91855edafd95e68fbe08205d2a20d10b"],["/categories/linux/index.html","8573d3fd2f7187ce447b65480bf63c16"],["/categories/python/index.html","84b6b43ef7dc8af1cb118d89167f5265"],["/categories/tensorflow/index.html","8fdabe577fa26436ab47520985a6d6a3"],["/categories/图片分类/index.html","31e4a102381e98fd24779091763efd30"],["/categories/工具/index.html","2ef7a344f8b14abbe52184ccccc1818e"],["/categories/工具/page/2/index.html","ebcafc1e6d4d0eecc5263de8b3bc61e3"],["/categories/强化学习/index.html","5131dcc2369bd3b1cccf3b9d1a9083d7"],["/categories/数据集/index.html","b394b29fcb77a0e4f8d1c0dd425a4439"],["/categories/日语/index.html","80a9cf001d1dcdb26ab2b9661da9af81"],["/categories/日语/page/2/index.html","880f4cea8c717f126204baaf5866b249"],["/categories/机器学习/index.html","73e7657f2ac6fd453d9417ddfe813adb"],["/categories/深度学习/index.html","3da547c499b218edac35bcac8201be14"],["/categories/深度学习/page/2/index.html","caa63184bdcf9294afc4e0f8f8bf8c1c"],["/categories/深度学习环境配置/index.html","eab1ff707c6e2732b8b9fd54d4d6f495"],["/categories/深度学习移植/index.html","4579f509ea223795b6cb4b0cc5549aac"],["/categories/计算机视觉/index.html","f48d73412a2a00c42bcfa200c7e410e3"],["/categories/读书笔记/index.html","4c9105dff57533f47b2be89c7806b383"],["/css/main.css","5b2c86499d696af40e993ad60bbcd2b7"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","c0d7c10a147f7bc62d1cac163d5c9a9d"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","8598b12abbce3981cf353325816b609b"],["/page/11/index.html","784eb1c1405ffdd5ad58732939cc27c2"],["/page/12/index.html","75648524025ceafe023097d8b117b560"],["/page/2/index.html","0e7f6b7254c0f49d23b097cd5900e618"],["/page/3/index.html","1e20fd9d1e500cf482d45b207bcaaf0e"],["/page/4/index.html","a4df852b0151f3dabf72af223d0dd3c9"],["/page/5/index.html","e5a62ea3f507dc273c07c89ba4810be5"],["/page/6/index.html","b99515be1baadea6e60dbde1ee83592c"],["/page/7/index.html","e591f6474c27af8cf0a4768ec284283e"],["/page/8/index.html","d2cb19c6e9f79ef6e24d2b0cd0f713a5"],["/page/9/index.html","e7b32ddbd0a56bfbbe142d65a726e36e"],["/sw-register.js","b7a70bc469a401f595a92905b84c7338"],["/tags/AlexNet/index.html","75ac4e5c6db82cb95ff0e5f35878708e"],["/tags/CNN/index.html","085e3ac9942b0b12df8622d0c297bbe2"],["/tags/DCGAN/index.html","9be548102ac18eeafee372c823108f6e"],["/tags/DDPG/index.html","ecb4d9faa8c5c0279efe40b2a44518e7"],["/tags/DDQN/index.html","d1fac80baffa6fa8afe5130e0c611288"],["/tags/DQN/index.html","7bd63fcfe4b58975545c9e11fb730757"],["/tags/GAN/index.html","231002abb5f4a191c6c4befc56014ac8"],["/tags/IRL/index.html","772ef00a371cceb084903fa27390958b"],["/tags/LSTM/index.html","f8ce01186de7b3d4ccf88ac490292278"],["/tags/LeNet/index.html","8b825a34053037150419529846229c28"],["/tags/MC/index.html","de3f0a73f2af025e2fe1ad3347dc1b2e"],["/tags/PCA/index.html","f707d3a36700103b2482717d14c1bb48"],["/tags/PG/index.html","f5c46e306b5e828eeb889c49047bb25a"],["/tags/PG3/index.html","08e7b13a8b45d2ce4bd0b47e214d79c5"],["/tags/PIL/index.html","976e338e00c220efb0c39bcc1b1313a0"],["/tags/R/index.html","59c4041e97096e69e814ec4bb27aa6a1"],["/tags/RNN/index.html","1a75e61d21831fff54059c34af2f8fa3"],["/tags/SVC/index.html","3b6a8f13fb254f4bed0c5495a84f8182"],["/tags/SVD/index.html","95e1812dff83721d6533a3998f683781"],["/tags/SVM/index.html","e5ffcf88e43cc696cccf15ddf2001a80"],["/tags/TCP/index.html","562c06f7484def59a4c0284e67d03747"],["/tags/TD/index.html","acc2048bf4eaec321b37238417b37d7d"],["/tags/TD3/index.html","d735fdbeb7ef490faeb0dfdebe17ad91"],["/tags/VGG/index.html","a8ae04503a374b1a91275c13dda18e5b"],["/tags/amd配置/index.html","e964054848b3ffb04db41b39c3de1e44"],["/tags/anconda/index.html","7dad8b4c0eed233d13dc98af5798325b"],["/tags/conda常用命令/index.html","0f8cee31879faaffeaa4ec84442909ea"],["/tags/cuda配置/index.html","435cb5c0afd853d589045835ab116b28"],["/tags/docker-ldap-mysql-arm64/index.html","ff377a1b0948c7a258d4fd0fef205030"],["/tags/docker-ldap-mysql/index.html","3eeddabc98b8f67b657369412bc2b612"],["/tags/docker代理/index.html","fff20023f617d9aa51438a9abc26de11"],["/tags/docker安装/index.html","eef3417502040e203797c510c9d245c4"],["/tags/docker容器挂载硬盘/index.html","88bc8b289d02ca9f8e5d3fff74a481ca"],["/tags/ffmpeg/index.html","e86cdb2b58c2f7022d13ed73815c7d1e"],["/tags/github上传代码/index.html","8a6c87d1a30dd07f2fb9276b1551f2a4"],["/tags/hexo/index.html","81aa82139c949a3c1a95743ad202cdb0"],["/tags/index.html","d496f5b57f6693128dd27d346124ae5a"],["/tags/java调用C/index.html","38cba16ccfd62fbb334f73f61d3a98cd"],["/tags/kaldi/index.html","47b64bc8e5328cf27f186aae728faecd"],["/tags/linux命令/index.html","65aaa8c255cbf79f599d30b58fa6a72f"],["/tags/mamba/index.html","05b77b5953644a5d74673ba38453aca6"],["/tags/markdown/index.html","44e49d88ef8424318438a6d18474cd10"],["/tags/matplotlib/index.html","ab71d847efd577f5084802c16750de3c"],["/tags/numpy/index.html","5ef47aa23f2364d4a905729bd9447f4a"],["/tags/opencv/index.html","b17e6509246bfd74ddf1b8d4972c0bc5"],["/tags/pandas/index.html","1bc11cca6bf000e1004064920f31647b"],["/tags/qq/index.html","cef5a7a39ef81733b9af1344e5ae1cf4"],["/tags/requests库/index.html","75eeaf34e1a11fd3f6fc51f504535263"],["/tags/sacred/index.html","bd1231490c4e2952f5583bb8bc5f4486"],["/tags/ssh-远程连接docker/index.html","0b7ca18ff68f90c6bb60fb86265b6390"],["/tags/tflite编译/index.html","23ce2774693166ccdc7a81d38ec2a765"],["/tags/tflite转换/index.html","2a179662a70b3f616c108e057fe7ce02"],["/tags/torch和apex安装/index.html","bd2bc933e9937d910be06a20bd186bf4"],["/tags/vscode/index.html","63498d1c9ae553f4cc19405a6053e9b9"],["/tags/wsl/index.html","8fa02f38eeb942bb265f021638dfd4cc"],["/tags/zsh/index.html","e2881122dc0581a2148b12e7198d982d"],["/tags/代理/index.html","dd0102784043e83d680c80e388fe741a"],["/tags/决策树/index.html","3be9544325febbee080d81c53e018eb9"],["/tags/函数/index.html","36bb50205736ec59ce22a27b43fa8751"],["/tags/列表推导式/index.html","443a7ced4fe10abe3704d92247ae666f"],["/tags/助词/index.html","3c09fc520f44061edfa1d7b20e09aed1"],["/tags/包/index.html","0dbe95634c8a11e9004078f15380b0bd"],["/tags/卷积神经网络/index.html","69e9abacbf635b86149cd0f6e42996f9"],["/tags/双系统安装/index.html","93015855cfa01969ae008f12f12a930d"],["/tags/反向传播/index.html","264bdc96b87e2bb9d4b2d63d4465d33b"],["/tags/句型/index.html","4f8d2c801a62dc72ecabce4e0acf4fd9"],["/tags/可视化/index.html","48a27f27165217cb52c7d9e2ba3ee725"],["/tags/哲学/index.html","5546d07fb03d231b190245485d7e1f47"],["/tags/图像美化/index.html","e862fdb20e92027b780e84164d26579f"],["/tags/图床/index.html","1671f4e9560aa85df6c7a12b652f3386"],["/tags/多继承/index.html","6bf2ce6134872f7917aaa3ad53be60b6"],["/tags/工具/index.html","6a68806c509373730bfeaa999a76ff73"],["/tags/异常/index.html","516214a9cfea24714993691d9af825cc"],["/tags/强化学习/index.html","3b47602f61cb63eed3cd7496ebc625e4"],["/tags/心理学/index.html","1ed41505c0e9f8055f237871acfaec40"],["/tags/感知器/index.html","81686ecbccaff0f69d5720f4ec481fe3"],["/tags/换源/index.html","1806886882f9bf40e5e0bdbc6f7bba04"],["/tags/描述器/index.html","cb89ddd6a3a1ecfab5c1503154b3150a"],["/tags/敬语/index.html","2af5ce3f0ee116a825cd21129ef58985"],["/tags/数据集/index.html","2aca9baf0747d7b79be5c7571b5f99dd"],["/tags/文件/index.html","ab2fee21566f7e836b3baa3a148c407b"],["/tags/服务器配置LDAP/index.html","fc83f70a8f3f3fa437d3c88c9cd7fd8f"],["/tags/机器学习/index.html","24ac8c481c300e8f844769dce0988a47"],["/tags/梯度下降/index.html","3cb0509752e21b684580a0845c4e5e39"],["/tags/模块/index.html","6e0a24fac46d8dd9a590506f9fb49776"],["/tags/正则/index.html","a508bbaa012a63d4101573db9f36e17b"],["/tags/激活函数/index.html","cfcfb9c7be8e5ac83a1efc77d5e7dffc"],["/tags/点击预估/index.html","db150b1dfb35f3e1ee86a297123b0c38"],["/tags/爬虫/index.html","5d7b0b79f47513c1940fe1f8a2f9a92f"],["/tags/生成器/index.html","0192ab028e42b2eb7ab7ee59415b5b2b"],["/tags/类/index.html","49abd16cb779076c955f80be3f5ed3c8"],["/tags/线性回归/index.html","9779c3b4a828bc24afe94346bf98c9fe"],["/tags/经济学/index.html","80207a3056f8ebc65551a7ad57699fb1"],["/tags/聚类/index.html","472d4ad823366006b1d211d1046261c6"],["/tags/装饰器/index.html","29905553716923d73cf794dfbe473dea"],["/tags/词型变换/index.html","232b2b7d7d1d9c778f386107362a4e0a"],["/tags/语义分割/index.html","425b87c1359c0d7b5507a21dd7f6c310"],["/tags/语法/index.html","027d3f9750a19a23901df5fcc4c3130b"],["/tags/语法/page/2/index.html","cd99e71d0f31338fb0ed3da282ac1920"],["/tags/迭代器/index.html","5677c229c4c5d43264150314e6023cc7"],["/tags/逻辑回归/index.html","c64aea85e1fbeb206f4bab0b51d54536"],["/tags/随机森林/index.html","e9e30c5aaf32e96494ed6d8fb7b83151"],["/tags/魔方方法/index.html","07ee6e69318b2b752c124e1b33f77c60"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
