/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","040cf8b1135530ad9e0f8d0f809df4f6"],["/2019/01/02/Anconda常用命令总结/index.html","c5c3132515c095eac8aecb4b1ca6ce04"],["/2019/01/02/句型/index.html","a98351f87fc1b40ff88382834e1ad6c3"],["/2019/01/02/日语助词/index.html","8ff60db0afc748abb1e0079c603c9c6f"],["/2019/01/03/on-my-zsh/index.html","3f729f4e378b0fcb8d89ebadcffd3f52"],["/2019/01/04/《当我遇见一个人》摘录/index.html","723f2425ad93eaaf3c9a9aef45c0c168"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","87a6db8c2bfa78951c1253d96d2de8cd"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","b0443c20581d5d6739b7831e789b86ab"],["/2019/01/04/经济学笔记/index.html","f5d2cd73849c51e4f55edee602a73208"],["/2019/01/04/语法总结（5-15）/index.html","4437b2bcb35bc68b4a7a1a6b6c2d01d0"],["/2019/01/05/linux常用命令/index.html","01aee2095f9640b58d9b1cd705865ce4"],["/2019/01/05/mamba/index.html","fa39fbfb2527d54e75445c03d141452d"],["/2019/01/05/rust 多平台demo/index.html","5bcfa27a5d9369765082eb8e4fac75f7"],["/2019/01/05/tflite编译/index.html","e319feabdc966cc1bcee69257bf53da9"],["/2019/01/05/tflite转换/index.html","c2abdf687fe1bc6cb7297ed6dc488444"],["/2019/01/05/torch安装/index.html","96c719cf7b877c0468a7b3c859a251ec"],["/2019/01/05/vscode/index.html","5b1383953466fa4124a8fc78a0683a8b"],["/2019/01/06/敬语/index.html","9b87f7aa9c3206197da0830fa338ef55"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","4025618f4c2a17736f30c255bb613bae"],["/2019/01/07/RNASeq数据下载处理全流程/index.html","3ad6f0fdf021424d2313e9f43ccd5f56"],["/2019/01/07/cuda 手动配置/index.html","eb8f5558c1e5c1c79aad5a4226044884"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","767bc1d2b4b1a328204867e2f745f5f5"],["/2019/01/07/docker-ldap-mysql/index.html","355fda9aed22b62f6cd74898775e9af8"],["/2019/01/07/docker代理/index.html","782c107a895304464ad075ae33661238"],["/2019/01/07/docker安装/index.html","0e34b5b7d4f720cd0df4ecbd2aee72e2"],["/2019/01/07/docker容器挂载硬盘/index.html","e99180dfdff551b48249c551abeb858c"],["/2019/01/07/github上传代码/index.html","f399dc3861919f698f38e6691764cbda"],["/2019/01/07/kaldi 安装/index.html","dabeb9dd47f6bc8d78859e7f1ce0133e"],["/2019/01/07/linux常用工具/index.html","228c1fdb298b3895d27e324ce4514215"],["/2019/01/07/opencv/index.html","dd4c23be7d07acf5bca2dde14bf5e215"],["/2019/01/07/ssh 远程连接docker/index.html","581533fe44f70fe7d7c6a6601b52e37a"],["/2019/01/07/导出/index.html","265c6917baac8ac861b5823ec422ed9c"],["/2019/01/07/换源/index.html","81090e60de112e86a3afa0318419264c"],["/2019/01/07/服务器配置LDAP/index.html","1e11234af14556c17ceebd93d4486b81"],["/2019/01/09/markdown/index.html","d3d309549cfc14188c192dccb5485d09"],["/2019/01/09/opencv图像美化/index.html","55ca05125a7217c322c30dfbb6767f8a"],["/2019/01/11/19单元语法/index.html","a0601649c26c68ad13652e6536bf44ea"],["/2019/01/11/20单元语法/index.html","e65b79ecdc59d8e8f572efdb3f9e0d2c"],["/2019/01/11/opencv-图片几何变换/index.html","f752f0f29002f8e319691e3444852459"],["/2019/01/11/opencv-图片处理及绘图/index.html","950715902319c10fc0d4be2b966a8967"],["/2019/01/11/wine安装qq/index.html","a76fbd354253b4899bc60079c1196539"],["/2019/01/12/tensorflow-可视化/index.html","a5a55916410033d7731483b27f5c343d"],["/2019/01/12/tensorflow-基础语法/index.html","792d4ff162d531d3baf6c803de005358"],["/2019/01/13/RNN/index.html","9312efc4f6c0b5ccd1c9edc0831c3dd6"],["/2019/01/13/keras实现CNN/index.html","834d6d8615f1153981f032d30e7293e0"],["/2019/01/13/卷积神经网络实现/index.html","ab73de16d931e9d5042c9088e034b7f5"],["/2019/01/13/循环神经网络RNN-写诗/index.html","97403f91215c76131058274d910fba99"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","29de6e856cb19d6e95e258e20908f19c"],["/2019/01/14/反向传播/index.html","885401a194c738d4a6992d3e6617ba7f"],["/2019/01/14/图床/index.html","68d7662e0d41b4add80ac14b5c4819e7"],["/2019/01/14/感知器与激活函数/index.html","b232a20b4ccf2da1c335e042abb27693"],["/2019/01/15/PIL简单应用/index.html","399722bc079aa6c76dd92a46e3a56d8f"],["/2019/01/15/卷积神经网络理论/index.html","15ac358933305357d56a53aaa90ee0c8"],["/2019/01/15/图片分类之pca-svc/index.html","074040728455d0926a13469cafd86ce4"],["/2019/01/15/强化学习基础/index.html","1aafa9078b4428dfbf3578d4bfdd6e5c"],["/2019/01/15/经典神经网络/index.html","fab4e8433715c6ae6576b1785f38a0e2"],["/2019/01/16/DQN/index.html","f7c7e7615a7374ed338fc77e524a5be8"],["/2019/01/16/TCP传输图片/index.html","4f15f11db080ea3591af4ebcf531f185"],["/2019/01/16/时序差分学习/index.html","be891f7fd10dbd5ddf1e22e81dcc8667"],["/2019/01/16/蒙特卡洛方法/index.html","9cf0ff6c36af032c4d53b5bd87a7f000"],["/2019/01/17/Double-QDN/index.html","09d8ba7a30a83db7811236ca98721502"],["/2019/01/17/RNN理论/index.html","31bed820550c43d4fff32b6943bc771a"],["/2019/01/17/梯度下降/index.html","5f59c666f1b3f103eb715ed33a962129"],["/2019/01/18/PG和TD3/index.html","c6f6b1fc2c4801edc2ad6e88b4eb8efd"],["/2019/01/20/21单元语法/index.html","b5483c32d404723c6e43f4bc6bee1075"],["/2019/01/20/GAN理论/index.html","370d768871634979dc08f9ed0c20d7f3"],["/2019/01/20/PG3和IRL/index.html","9deccad589abbcc7bfdb42c3ca3a9e23"],["/2019/01/20/数据集/index.html","c39e2d5cc340e33ec64d75ef790674c0"],["/2019/01/21/DCGAN/index.html","55aef2ef98e0d1598d45d2cdcab9cf33"],["/2019/01/21/LSTM/index.html","34639c22a733e57ea16c860780d57921"],["/2019/01/21/点击预估/index.html","22dcb02d7df418ffb89cd266709b7253"],["/2019/01/22/SVD分解/index.html","fcff745859bef06f13cb40afa30779ea"],["/2019/01/22/SVM/index.html","61384d96bfee6329f5ee36c3af7e1ccf"],["/2019/01/22/机器学习简介/index.html","2a4c391cb13565fb51fdb26900e34b21"],["/2019/01/22/线性回归/index.html","beba3734a031683f80040722b0939536"],["/2019/01/22/逻辑回归/index.html","85e3f2df856b81eaf7de6256c40fcaf0"],["/2019/01/23/numpy/index.html","dda8e5475e75f3f8a4cad500e49b46a3"],["/2019/01/23/决策树与随机森林/index.html","489fded36584bb8eef2d16777ec61b61"],["/2019/01/23/聚类/index.html","c2b638d6195094f110d35d393b2e2627"],["/2019/01/24/matplotlib/index.html","5c69c7d59852219c81e8fa6242413940"],["/2019/01/25/pandas/index.html","57b507643cb9be7716063edd8faafc66"],["/2019/01/25/语义分割/index.html","55dc4f9548e09528317d811310525cd9"],["/2019/01/27/22单元语法/index.html","ca29b761d974dce609bfba91b62dc410"],["/2019/01/27/SVM案例/index.html","145f75d0949c246f368c7d94deac98c5"],["/2019/01/28/requests库及爬虫案例/index.html","833bfe055dd1c9c733b018e3928bb279"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","eef0f3bf5fabbbcf83815a51b9063f19"],["/2019/01/28/异常/index.html","51aa134a4734dd84ce8d57877bf96cce"],["/2019/01/28/描述器和装饰器/index.html","a97923f94240f1d60b13f4016a0ac687"],["/2019/01/28/文件/index.html","d34e6985618465e30e86969b818f8d64"],["/2019/01/28/正则/index.html","05fd200ac45d1a9f9bfc3c04c7dc9c91"],["/2019/01/29/函数基础和函数参数/index.html","f8b6ea8ee2c46890ff32827a49911c0a"],["/2019/01/29/多继承和魔方方法/index.html","c19960efe4ff99dc3027d24bd73a7057"],["/2019/01/29/类定义、属性和继承/index.html","3563f78503bad9e4e58f6010af864672"],["/2019/02/27/23单元/index.html","29023db7e4ced9b4f18d3f45433860bb"],["/2019/03/12/hexo加速/index.html","ac8722aaaa5f042db3ee73bb2be9ac1d"],["/2019/03/12/hexo系统重装恢复/index.html","585e12a7f7f3439c7bfee659a1201680"],["/2019/03/13/24单元/index.html","69a7706d1d8e4dec2938458b4291df11"],["/2019/03/19/25单元/index.html","9ce1ba11fd3da75a452ba6ecb7fa7c05"],["/2019/03/26/26单元/index.html","5c46cf237115b3ad057a72ddde2b2ee5"],["/2019/04/14/27单元/index.html","6fd0cc63a8f4f3ead994a1c63977c404"],["/2019/05/01/28单元/index.html","cea650b92e0d6d742ccb87f64f95e7e5"],["/2019/05/02/29单元/index.html","327b45c32142ce1a56eedee999386e37"],["/2019/05/12/30单元/index.html","034f93f8ee2435fdc220027b6f15e138"],["/2019/06/03/jni/index.html","501a49d7ba836fe96de90199f6a94a92"],["/2019/06/07/JNA/index.html","ae5e9229f6c6a4107c5626e72e7c29cc"],["/2022/08/07/R配置jupyter/index.html","55e87f65ab1852fb33f0e9b73379d835"],["/2022/08/18/FFmpeg常用命令/index.html","1358d135fb00beab5c9c2d0e2033c4f7"],["/2022/08/18/linux系统代理/index.html","df0adfb98efde53a1f17a3f9e6d5dd1a"],["/2022/08/18/matplotlib补充/index.html","1ce8cea9e7330b3db9a7787c88207843"],["/2022/08/18/常用命令/index.html","fc4328b2b17ca75881e4d770f87da132"],["/2022/08/20/sacred/index.html","031ed66cb10e870c2c34a641ff541ea2"],["/2022/08/20/wsl/index.html","ca4660bf7ce7ff5f19c027ebb9d42a93"],["/2022/08/20/双系统安装/index.html","b1cb17a3b91d5ebaef264d81c64e8cc2"],["/2023/06/28/source/index.html","0d5559b4974dacdc4ae69a2cf23fa0ee"],["/archives/2018/12/index.html","03103c535cc42da5115f8c253376b71d"],["/archives/2018/index.html","87c5f562dc5f3bc5e7e2650262c9d2e3"],["/archives/2019/01/index.html","2a3742d5e343388c0fdfd186956a7c01"],["/archives/2019/01/page/10/index.html","8d9f1367256fc67df294ddde61b93339"],["/archives/2019/01/page/2/index.html","75baf09f1dc46d0c644deecc80502f69"],["/archives/2019/01/page/3/index.html","dbd869c6ed2556898888e3414351fec3"],["/archives/2019/01/page/4/index.html","5ece4ae31c14391f674685452528d162"],["/archives/2019/01/page/5/index.html","d6e856235d9054ed0c299fafd30f3656"],["/archives/2019/01/page/6/index.html","9cbf3cb2ddfea7264f63bda09d09a5a6"],["/archives/2019/01/page/7/index.html","5941045aea468b9348469e18beaac02f"],["/archives/2019/01/page/8/index.html","4f0bb2bc4cb2f12586724c83e58b6157"],["/archives/2019/01/page/9/index.html","2df9deb2b044bd1bed3f417921e3dd33"],["/archives/2019/02/index.html","21af86c04fdec204bfd4f396658a6b86"],["/archives/2019/03/index.html","4b64ae05220d8b95cad2da2d9f0e6233"],["/archives/2019/04/index.html","40a16e4c1f223955c2137c5ccabea822"],["/archives/2019/05/index.html","09e04233fd007c8d8a969d5e612fafd3"],["/archives/2019/06/index.html","2cd0207f6c77ce0b5a0d29c03738f532"],["/archives/2019/index.html","fd2702d4ab4112c83715d43a1b7bd7ad"],["/archives/2019/page/10/index.html","5f7cf637e5b7ba3eec286ef9bf0767e8"],["/archives/2019/page/11/index.html","491ea75c8958ab7308c83fd49dc5610f"],["/archives/2019/page/2/index.html","f9d6fa174f442707b486469d40c8389d"],["/archives/2019/page/3/index.html","4a9b0fda5f8317c446855a4d56d5594c"],["/archives/2019/page/4/index.html","6158c8dbc021a7e2a9b02512528e32ac"],["/archives/2019/page/5/index.html","beb244ea00ec28742cb07c8a59e1bc34"],["/archives/2019/page/6/index.html","87ee56d4a0a77858b1dc45032e8f0049"],["/archives/2019/page/7/index.html","d0342b0cf8e0ae6636629d3143477061"],["/archives/2019/page/8/index.html","0d95fc37e419135094dad2d030efa940"],["/archives/2019/page/9/index.html","2d9f1aa95c2edf98109a8b2a10a83340"],["/archives/2022/08/index.html","d9c909e2cc0d4b2e5d8ce88322455d43"],["/archives/2022/index.html","2639c38392bfd4e9fb832fa4e3515ceb"],["/archives/2023/06/index.html","1a6b87c0f1cfb5342b5dda37061cbae7"],["/archives/2023/index.html","e94ffc73aecf2102e9bb5dbde99f9575"],["/archives/index.html","436c7d59ba6588028f39a5f8c6a0fd86"],["/archives/page/10/index.html","2a29a59402bbad9fb13d61c0f54855f0"],["/archives/page/11/index.html","0dd84cc3a66b22ae532fe2ad3a5076f4"],["/archives/page/12/index.html","ae3b560eac02765cf94092bf4c0c8d24"],["/archives/page/2/index.html","1f4ad4e6e0a09a41d6d2f65123657ad4"],["/archives/page/3/index.html","e58b5f12d0abf561514b835aa8b0d868"],["/archives/page/4/index.html","19f6d167dc7fb0df2a8362a0fdf50b16"],["/archives/page/5/index.html","b8ffc4ed5928b50e0a9880d85437f940"],["/archives/page/6/index.html","92e486a829c4ac1054dc8a77ed1fdb45"],["/archives/page/7/index.html","6e70e331b80b1e8b91d47d98e978be15"],["/archives/page/8/index.html","cd97ee1e1204c3d68bf69bd98b14e499"],["/archives/page/9/index.html","2509b8eb57049b15bc6c0878473987bb"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","c275beccdf6bc1452b5280476f5286c2"],["/categories/dxz/index.html","efaa2251433f10a209e32af4ada8f106"],["/categories/index.html","f2f6fdbd50172a46a47402b99a0a810b"],["/categories/linux/index.html","447faa32740ff489f8ea55ab655b2e16"],["/categories/python/index.html","c39ccf8defd7366148fa1f06154db2a8"],["/categories/tensorflow/index.html","7d48f9870c0b822a58b562136fd1f0bf"],["/categories/图片分类/index.html","00d99875dfdffcb8626730d2fd950924"],["/categories/工具/index.html","069de9d04fdf538e60958964a2cd5dc1"],["/categories/工具/page/2/index.html","8451f406d82a1867e6fc33a2a99b8aa5"],["/categories/强化学习/index.html","0083476cf5a73e365d1d8c53c96a199f"],["/categories/数据集/index.html","4eee3c0d85159713547e95a54131a98e"],["/categories/日语/index.html","efdcca4791d06aad71566ed3e4cc0538"],["/categories/日语/page/2/index.html","adfde1353ac227cf8c840829baf6b5b2"],["/categories/机器学习/index.html","6278523dd0ca3b91ce0ff7afd9b23cbe"],["/categories/深度学习/index.html","e7c3034a858612cee602bc983d25a449"],["/categories/深度学习/page/2/index.html","480b7faa7c3a611905ef5b73be4ad070"],["/categories/深度学习环境配置/index.html","f2997639d9dc061e68e99c3044123051"],["/categories/深度学习移植/index.html","3af1cd16dc02bdaff7ed5a75df1f9ff3"],["/categories/计算机视觉/index.html","aca000c52c02cf1fa66dba5969af91a9"],["/categories/读书笔记/index.html","2a130c840ffe4670ae7ba208cd5d3019"],["/css/main.css","80592f94a92c4663fd3b45e881b6f33f"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","e037f64ee7b23e16d2c68ba6092eb46f"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","90f4b0ecab31d7bf79f297028ae4377b"],["/page/11/index.html","b9bc91b713295d9eeae91da79be7ed94"],["/page/12/index.html","e7e4f9da43505ed6d6ad6ebe69a50123"],["/page/2/index.html","caf728b983c3996c02bdf300c1960fe7"],["/page/3/index.html","54ec62a4214ba869a08e135173f90f16"],["/page/4/index.html","8b0de37922a6c0807a9b14be6979d197"],["/page/5/index.html","0f4eb9ed9ff99f70c4acf9051fa2c873"],["/page/6/index.html","168eec6ab215a29fc24868452f67bee4"],["/page/7/index.html","7b3497b41ee0cb5d80ffa1b99792bbb4"],["/page/8/index.html","274d36fe6f70e6d6120b3e6bb6a2df2d"],["/page/9/index.html","51a2494d3fefd9bb8da43e4551ebe919"],["/sw-register.js","87855bf601d961961a804cadf63b17e8"],["/tags/AlexNet/index.html","4036fd6ffc2d739e2b2a540f3c9949da"],["/tags/CNN/index.html","94968f1e818dc92aab8052baa8a474ea"],["/tags/DCGAN/index.html","53c4c2e5e0bdf7ec927aa70c61bc8125"],["/tags/DDPG/index.html","ceb3bc4aebfdd6df4d291092832c2f3b"],["/tags/DDQN/index.html","1c1fe2c367acafc3b541680adcc61778"],["/tags/DQN/index.html","98e195c4d033b3bbff8e3cc767cda4d1"],["/tags/GAN/index.html","4c7903f06ea6dde1506429719ab731e9"],["/tags/IRL/index.html","3d4479019cf1ec9557ecd7c502074216"],["/tags/LSTM/index.html","d073ff19671caee2c95b4a6f13a4a248"],["/tags/LeNet/index.html","3bbac62601689a355b1f783113ed4de1"],["/tags/MC/index.html","46bd183058b621a0e9b1dfdc8b61b0f1"],["/tags/PCA/index.html","c2de24b94a31f908eec2606462a3ecc0"],["/tags/PG/index.html","6b8678ca3b7fc4a3756f329dc62e03d0"],["/tags/PG3/index.html","097b5c41428ed0e73ab83eb460189aaf"],["/tags/PIL/index.html","be8213822104a01945b6b3c3ca8ee956"],["/tags/R/index.html","a521b991769884371a97905b1abb2baa"],["/tags/RNASeq数据下载处理全流程/index.html","7e3417ad518e049e9ed22e3ab46ed148"],["/tags/RNN/index.html","70f8ac040c3b011d64349a40fe7bb98b"],["/tags/SVC/index.html","87388454b222cb2b148d5c4025f27fcb"],["/tags/SVD/index.html","6d68b77a6dc420eb95910d6e9619fa62"],["/tags/SVM/index.html","7f5dea8d168d96e0602d2c3e2f651243"],["/tags/TCP/index.html","f84e6ccb8fa8645de24387a7b62a79a2"],["/tags/TD/index.html","cfe88b21647a0a37a465adc79f70b37d"],["/tags/TD3/index.html","71ba3749dcf44a61f30581eb9de59dab"],["/tags/VGG/index.html","3023e40e51bba95f45c87b673d9d32fa"],["/tags/amd配置/index.html","c570192a4a4f9350d98cd775a9b8b3fe"],["/tags/anconda/index.html","4c1c2244674a884c2f21eee23998c14c"],["/tags/conda常用命令/index.html","73d2aff06367b065490227dd7d531b23"],["/tags/cuda配置/index.html","625d774fca4d11026b6a0853573e480a"],["/tags/docker-ldap-mysql-arm64/index.html","3e912796e596b4100bc02454cdbe78c7"],["/tags/docker-ldap-mysql/index.html","712973abafda0a0258640bee42a0ddde"],["/tags/docker代理/index.html","5b2650d19b1eef1da8c72f122f546e54"],["/tags/docker安装/index.html","8736946993041cdeb2701e963ee1830c"],["/tags/docker容器挂载硬盘/index.html","3d1ab417033b363aeb3ecf43b5793c18"],["/tags/ffmpeg/index.html","6938b352ad68cf6b96c145a7c7a80be9"],["/tags/github上传代码/index.html","5ef1650ba5cbb221f170898ec20c1cf5"],["/tags/hexo/index.html","83fe8b3767989347b4cf21a0b41ae10f"],["/tags/index.html","a670e5ddc851118b3a0d748cc1a90da1"],["/tags/java调用C/index.html","dece47e842ecc12ad4a91f1262be2b5d"],["/tags/kaldi/index.html","8114e946e7216447dfe07fb7f1692d8f"],["/tags/linux命令/index.html","6714bed2bbf51edafe4a998def0d469d"],["/tags/mamba/index.html","6633380485d2e29f73058690770b7548"],["/tags/markdown/index.html","f5fc79031a2332a7fdb5eb453c8acf5f"],["/tags/matplotlib/index.html","f8f138c2d6d0eea9f0925e99aecaae98"],["/tags/numpy/index.html","125578e2e277a477d8645ce73bb82eb2"],["/tags/opencv/index.html","73e392fe945cb8e76b33b1fc70a9385e"],["/tags/pandas/index.html","bbdd47b799ca86e7892c3c0769ab76b3"],["/tags/qq/index.html","31b1d8036c214b8bd01eda9330021bba"],["/tags/requests库/index.html","1b634a88fb70bbfd79405665b5b71926"],["/tags/rust-多平台demo/index.html","56d223bf756d3c2d8fb4666f2f02ed81"],["/tags/sacred/index.html","0b71bcc94d5c0c737f3000b0f8e393b9"],["/tags/ssh-远程连接docker/index.html","73dd7696ee381e068de72d66147f158a"],["/tags/tflite编译/index.html","429f00528414b065577791cb0486cb5e"],["/tags/tflite转换/index.html","10a5d2e92d2abdc3eee57424a7b9d577"],["/tags/torch和apex安装/index.html","8affe79b417ecc43e40d4e27530a6e78"],["/tags/vscode/index.html","380d086f854e8cf8f65ca84664eab993"],["/tags/wsl/index.html","de5cd387aaa0434f3220ea671b98e3e2"],["/tags/zsh/index.html","7a909999869b071471acc3c57485e069"],["/tags/代理/index.html","f304ec31c952038509c326cc861b2c3b"],["/tags/决策树/index.html","0bc16e739c14976e11abe68501e9c282"],["/tags/函数/index.html","c2311f61b958ea7b66062d133deb2c0e"],["/tags/列表推导式/index.html","5168d7f42c4137f00397c43bda91e189"],["/tags/助词/index.html","a5c103ce3e2a5135d2140c464a9a9924"],["/tags/包/index.html","886eadc42180be40d303fcc32779bed7"],["/tags/卷积神经网络/index.html","4cf50e107f73b941c0c1702c9a6324da"],["/tags/双系统安装/index.html","05db1b67637dcbf4bd2b1322360bd206"],["/tags/反向传播/index.html","eeac04253dc880e338753d6a54dfbfb3"],["/tags/句型/index.html","20284aa89680ebdf3589cb266e72e9dc"],["/tags/可视化/index.html","f787ca87400be79142bcdc810e9c528d"],["/tags/哲学/index.html","c58da41633b7bbfa5e10dbb4e24b7088"],["/tags/图像美化/index.html","9a719f443e8e97d6758cbb2a11846f7d"],["/tags/图床/index.html","0201c728a576496ad5fafbbd8a9f27d5"],["/tags/多继承/index.html","1af2eb2fd83d920c4e7a0a2b6151f28f"],["/tags/工具/index.html","d45ae9109d44ee935d2fd192eb1eb8f0"],["/tags/异常/index.html","398accaadd6717ba21909f13abaf0d25"],["/tags/强化学习/index.html","23d0663fac028a75364f23545deb3883"],["/tags/心理学/index.html","2c81784ddc2328f1fed0adcad65ff08f"],["/tags/感知器/index.html","95fceb848636bcd581d291ac35c93d48"],["/tags/换源/index.html","58e3c14c9fc36ec3b9673d130576f4b1"],["/tags/描述器/index.html","65508c1e9aece1a69f7e63e04f10f3b7"],["/tags/敬语/index.html","c261fb7ecd63e29e638f82d5d773333c"],["/tags/数据集/index.html","dd1c85d583a114159b90054b2347d82c"],["/tags/文件/index.html","89405b84a51a5306cfd61a4d71b8b0e1"],["/tags/服务器配置LDAP/index.html","4566094e723a18045c8d0c32aee29d77"],["/tags/机器学习/index.html","e92298900707435a2e8f24fe9076e6a2"],["/tags/梯度下降/index.html","6b8025e6f299438ef309fc7f634c1b84"],["/tags/模块/index.html","86cd17ffe6a21944d2612bfe2670e005"],["/tags/正则/index.html","ee869954331e73b200967bf91a3fbaba"],["/tags/激活函数/index.html","e8e2617527f180aae43b2d117fbd5dbe"],["/tags/点击预估/index.html","7df94ee5f0675d93ed6a83d02475f247"],["/tags/爬虫/index.html","9e873c084d44ab30423dfee9f3f4b1e2"],["/tags/生成器/index.html","b9e9775131fce1e60652d01c3f895c97"],["/tags/类/index.html","0ceba35d9821ab22053f050dea1c7bb5"],["/tags/线性回归/index.html","253a9c670ac4e83eb543ef80fa0a1170"],["/tags/经济学/index.html","1650d330d863ac4258cd4648738a3729"],["/tags/聚类/index.html","c0d68a6da68dc420139f1ed537acfd32"],["/tags/装饰器/index.html","5b528402b6b6e44e5023852df4b68b2a"],["/tags/词型变换/index.html","4c911fdbd51ce321ae61fd5a4fdc56ec"],["/tags/语义分割/index.html","aa8c3002b77f7ab1d74aa2c9e6b4c5ab"],["/tags/语法/index.html","41eaa73ceeb61213eaf061e6529fe4d2"],["/tags/语法/page/2/index.html","a7da1a8f8a8ab3062a09f38c0dd27963"],["/tags/迭代器/index.html","79994bb90ffc7e2780696adf33ade6d6"],["/tags/逻辑回归/index.html","4a784284029fc6c1968b813cb8495e0e"],["/tags/随机森林/index.html","acc111efc3b96f85c4e57614169a9d48"],["/tags/魔方方法/index.html","5f4c3d8910eba2ceb0f2e88938e4226c"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
