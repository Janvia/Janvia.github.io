/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/31/日语变形/index.html","b6a8dfbc12d6ab379af57bdb2f74dbe1"],["/2019/01/02/Anconda常用命令总结/index.html","08df6191173cb7d31d5f552cc4c06526"],["/2019/01/02/句型/index.html","e5b5f03de13893941fb4b2a23c176584"],["/2019/01/02/日语助词/index.html","7cf7f8b6e112e77496ed6ad0be5b1095"],["/2019/01/03/on-my-zsh/index.html","50d63a32e5c0a714292c0a9956f22bc8"],["/2019/01/04/《当我遇见一个人》摘录/index.html","7abae961c0edf2241c4173ce4ed17244"],["/2019/01/04/《禅与摩托车维修艺术》摘录/index.html","a73332ed51768ee5232a70802177f7c4"],["/2019/01/04/一些忘记书名的心理学笔记/index.html","b6dcf3f856919b274d944f53fdaf87da"],["/2019/01/04/经济学笔记/index.html","956f2d8e9f14ef9815fefd54f021e9ce"],["/2019/01/04/语法总结（5-15）/index.html","22a6673282c6f8d117768d1cdfdb3400"],["/2019/01/05/linux常用命令/index.html","36bd6cbbcbcb9dd333f54210ba7be5ba"],["/2019/01/05/mamba/index.html","a23862ad883d08506b4918a0c39550cd"],["/2019/01/05/tflite编译/index.html","72b0c8ab856a0544e1324668cd88d502"],["/2019/01/05/tflite转换/index.html","d83ea7c7775a87ca2b19b5b265126b5e"],["/2019/01/05/torch安装/index.html","02c7cde1aa56f67d915c3e36b7f19fe0"],["/2019/01/05/vscode/index.html","031b03a0491d302718be49de8dc3f5c0"],["/2019/01/06/敬语/index.html","a7c44fb5a59bd0d54fcc8184e012dbb4"],["/2019/01/07/AMD GPU Pytorch 配置/index.html","5502b01bb20cd367c65926d5df90a2ee"],["/2019/01/07/RNASeq数据下载处理全流程/index.html","081d27831c773ee1b2af3e9eecff6c5a"],["/2019/01/07/cuda 手动配置/index.html","9891011c390a0d43df8f6908ca3aad78"],["/2019/01/07/docker-ldap-mysql-arm64/index.html","4b379939a9cac63ac41e9c0c03e426cf"],["/2019/01/07/docker-ldap-mysql/index.html","842dba21db9b4f7afa40642ce3a021f8"],["/2019/01/07/docker代理/index.html","e3c32aba8d43a6dcb50f03e2030b167a"],["/2019/01/07/docker安装/index.html","77499788565dea370d48fb8313547dad"],["/2019/01/07/docker容器挂载硬盘/index.html","e7adf2a6cc4eaa1fe52b500b3a37c0c7"],["/2019/01/07/github上传代码/index.html","ac2569f187c43f6de0a7475a8e704813"],["/2019/01/07/kaldi 安装/index.html","754f90223d36576a2c4c5b12a7fe0e23"],["/2019/01/07/linux常用工具/index.html","7725113d98c1a5d2325b5bac7dfafe92"],["/2019/01/07/opencv/index.html","6851a3ea2381b135b722a61ea2147ca6"],["/2019/01/07/ssh 远程连接docker/index.html","43dd5a3fd96d424c309de07b3adf4a5a"],["/2019/01/07/导出/index.html","93325d2f30aa2d5745ce0f3ee784ba92"],["/2019/01/07/换源/index.html","5c26967d414da9a252642c136a514ed1"],["/2019/01/07/服务器配置LDAP/index.html","1ee574eb559f661b3b7089cfdb311ecc"],["/2019/01/09/markdown/index.html","1d522e2572167b269bb0e3d4ddcc1b13"],["/2019/01/09/opencv图像美化/index.html","23c9da32d14aef339f63bc4a8c89d7c1"],["/2019/01/11/19单元语法/index.html","a2c16f2c539a0c5a7beb4db5a80301a9"],["/2019/01/11/20单元语法/index.html","f70030c0a9b086dc85819bdb06a7c3ea"],["/2019/01/11/opencv-图片几何变换/index.html","2b42468424ea6d13e675cbfa3d216fec"],["/2019/01/11/opencv-图片处理及绘图/index.html","434bd1e694154c096bcdba9769829b78"],["/2019/01/11/wine安装qq/index.html","672e382e35d005b6ef566fefd3751067"],["/2019/01/12/tensorflow-可视化/index.html","4b5256b18eccc4d37286cd40212ce742"],["/2019/01/12/tensorflow-基础语法/index.html","07aedfd97d5c857aa2faafa279533c45"],["/2019/01/13/RNN/index.html","9f1e6a77f833146a649273f8d8ce9515"],["/2019/01/13/keras实现CNN/index.html","fd220e294e80c0a0baee3256d7058901"],["/2019/01/13/卷积神经网络实现/index.html","a9bf7d4bddef8192a57278aee9ea3373"],["/2019/01/13/循环神经网络RNN-写诗/index.html","86501d8dab7c3d1f663f4f03e2303bb1"],["/2019/01/13/深度卷积对抗生成网络-DCGAN/index.html","dddf050ebf6097c0c0ce367980764c09"],["/2019/01/14/反向传播/index.html","65f8346dae5b55b98992814c281a3f00"],["/2019/01/14/图床/index.html","e71186b2d512681218d3989a310e19ab"],["/2019/01/14/感知器与激活函数/index.html","852c0e7f6d3f867108b14310931b376d"],["/2019/01/15/PIL简单应用/index.html","d42d47b1f0572a37acaebcf0085f18f3"],["/2019/01/15/卷积神经网络理论/index.html","9a1cb4c17d087eccc5903330fa9cb9d0"],["/2019/01/15/图片分类之pca-svc/index.html","16efdb1e209e658f4ea75c7871841163"],["/2019/01/15/强化学习基础/index.html","150a768e0bff3c209df98fd11ac91e82"],["/2019/01/15/经典神经网络/index.html","f9c0f0dd7e3c77819a66d376e4264838"],["/2019/01/16/DQN/index.html","83672e4a31b463636dfdb40944dc6fc1"],["/2019/01/16/TCP传输图片/index.html","021a4fcf8a9769acb8fe3aa5f10bcc77"],["/2019/01/16/时序差分学习/index.html","9bb08effc9afc7de516b6216d84b3c83"],["/2019/01/16/蒙特卡洛方法/index.html","7b6e8443bb80747593c618c273e2a14a"],["/2019/01/17/Double-QDN/index.html","7ebfc188f29349f872d28d657e43572a"],["/2019/01/17/RNN理论/index.html","340a0afd39496740f93ac2ca1be20e9c"],["/2019/01/17/梯度下降/index.html","cceca2a2d75425edb9248d4b07dcd59d"],["/2019/01/18/PG和TD3/index.html","e032fa2e3ef0cd3a644e034fb8914f42"],["/2019/01/20/21单元语法/index.html","9ef541864075889ce17003858a6311a7"],["/2019/01/20/GAN理论/index.html","f7ce5dcd2013c26b3498eb84c5eb9a38"],["/2019/01/20/PG3和IRL/index.html","8f108bcf04c10cfcfd0bc85f6ece1cbd"],["/2019/01/20/数据集/index.html","d1ba410ea7ee293b51a522557f57c085"],["/2019/01/21/DCGAN/index.html","a4d72b2bb12f226a9d092d6dc7ffac23"],["/2019/01/21/LSTM/index.html","3b590b9d70917795c896a3f081c40205"],["/2019/01/21/点击预估/index.html","bd44c7dc64a4aa3e81b93d367b680737"],["/2019/01/22/SVD分解/index.html","ddd00e786d6946e9dbbf37a182e08784"],["/2019/01/22/SVM/index.html","929980d82fb043a493ed5ed4301d9bc6"],["/2019/01/22/机器学习简介/index.html","ccad1dfff0d8d49d01dc0668bdc8e3a7"],["/2019/01/22/线性回归/index.html","879ee229fc2fa72157c6abdf09023593"],["/2019/01/22/逻辑回归/index.html","657781694b92a6117756b4f47c91f939"],["/2019/01/23/numpy/index.html","4cf1cd40c1ae8cd0b55c3d9bf1a9bdc1"],["/2019/01/23/决策树与随机森林/index.html","5e71bf18c3ce8c72b8e17290a334a831"],["/2019/01/23/聚类/index.html","33197aa8e62eeb7bf6b090e3bab0ccff"],["/2019/01/24/matplotlib/index.html","358ba4eac0410461da7d604f24a9b2fd"],["/2019/01/25/pandas/index.html","e86403a53bfd9f824c5e3c95d0aa9520"],["/2019/01/25/语义分割/index.html","b021de8cf51d6f2272cd7dc4df462677"],["/2019/01/27/22单元语法/index.html","35d0388792c46240f7b6859b7097d2ae"],["/2019/01/27/SVM案例/index.html","6f9dfed9a87499232f9f5b081bcb3d66"],["/2019/01/28/requests库及爬虫案例/index.html","dd2f621a9ad851f642e4be5c748bee74"],["/2019/01/28/列表推导式、迭代器生成器，模块和包/index.html","04ee4fc3fe413fa67afc6ef6fe4b48db"],["/2019/01/28/异常/index.html","969829f95c31453894aa70968be95f9d"],["/2019/01/28/描述器和装饰器/index.html","0d0dbd0c6c823583544dc79ee2b1925a"],["/2019/01/28/文件/index.html","ef831fa6e1a9806642c136b33ea5c026"],["/2019/01/28/正则/index.html","0fa11fb634cc9150d461df6dcc2d4308"],["/2019/01/29/函数基础和函数参数/index.html","cec7dbce91bfff304bbc62fed0144652"],["/2019/01/29/多继承和魔方方法/index.html","ef0fd60d74d69076bf5b30f44edd26ee"],["/2019/01/29/类定义、属性和继承/index.html","d7c924fce329b7bd1da9b47f1d16f415"],["/2019/02/27/23单元/index.html","3f7dc1f09bfef54de1672ecaa6227d2c"],["/2019/03/12/hexo加速/index.html","91e7db473871c758ebcf1db159416703"],["/2019/03/12/hexo系统重装恢复/index.html","3996193bd572297f7786ed9339ac1fbd"],["/2019/03/13/24单元/index.html","1488861ea1b29a335c3082c44b4d2b1b"],["/2019/03/19/25单元/index.html","8ec95b842f2641ebc56f9fa9a778ac58"],["/2019/03/26/26单元/index.html","b69eb1e7480dd049e99f9e69110218eb"],["/2019/04/14/27单元/index.html","1b79c18a9aab422e40775bce3b063b85"],["/2019/05/01/28单元/index.html","e00866aaa2d2ac109ab62924560a7b68"],["/2019/05/02/29单元/index.html","6ffbdfef2697af0a7508af20eb3d24f5"],["/2019/05/12/30单元/index.html","adbbbf7c26c8d567c1f187b1357cadce"],["/2019/06/03/jni/index.html","a82daac85215f9b827199802e51aff5b"],["/2019/06/07/JNA/index.html","855240326a206a8d06ecb45aae619871"],["/2022/08/07/R配置jupyter/index.html","dda295feb085c954eaf279bbeedb35c5"],["/2022/08/18/FFmpeg常用命令/index.html","530b31c5d37eb71e77cd90335463c778"],["/2022/08/18/linux系统代理/index.html","f19838d1a7035c947a6b98484ab7eddd"],["/2022/08/18/matplotlib补充/index.html","2fadb2ee751c41141e1c0502c81a5dfa"],["/2022/08/18/常用命令/index.html","9817c42ca9bc843556ed85d5db68f05f"],["/2022/08/20/rust 多平台demo/index.html","97ffe9ead06a38a4ea27995c91af1b5c"],["/2022/08/20/sacred/index.html","5c3c6d87d864ba38861943aed8af7c43"],["/2022/08/20/wsl/index.html","a5f3b0acb72993e2473f0cbe9a984d4f"],["/2022/08/20/双系统安装/index.html","436e1d5197764d6a8b7ade21aa302566"],["/2024/11/08/source/index.html","78ca4e49fc96cf6c442fc6fd5720b3e5"],["/archives/2018/12/index.html","6a88e624995a3d3596d067f8f1d56fdc"],["/archives/2018/index.html","4596f6e29cc384cb5dd921e284f9c23d"],["/archives/2019/01/index.html","3e795448611775fd6189445915a2b6bf"],["/archives/2019/01/page/10/index.html","2ec04190187b43a47539c18c379d6672"],["/archives/2019/01/page/2/index.html","892c3a0c4e7a1ead45f55060651d6d96"],["/archives/2019/01/page/3/index.html","e070959c62c254d292ade8452fa36a6a"],["/archives/2019/01/page/4/index.html","4fad96bdb8e44ed16f6d2ebf07c176f1"],["/archives/2019/01/page/5/index.html","98c44225bc590400de83e64da502ec85"],["/archives/2019/01/page/6/index.html","fddc1af3548a3fd534affd4019dd3a58"],["/archives/2019/01/page/7/index.html","e526eb74646f66331b183edfabe5a217"],["/archives/2019/01/page/8/index.html","1a16938642c8fa66c8ad445428665715"],["/archives/2019/01/page/9/index.html","4e51c56c97f40884c895b28513124f71"],["/archives/2019/02/index.html","cc6d73db0f2a30e3de7942b342dfd99d"],["/archives/2019/03/index.html","f88d796836ee68538fceadcebe6f2d59"],["/archives/2019/04/index.html","a1aa416f6252bc378b6af30acbc51fc8"],["/archives/2019/05/index.html","aa079f9d4141a60228adf59531d00159"],["/archives/2019/06/index.html","1924c6f4ff7d95f9e63982f528cd8cd4"],["/archives/2019/index.html","b59c11567240a5e01efde3afe9e765bf"],["/archives/2019/page/10/index.html","a93abaad1abd4e342b22428b18dfb066"],["/archives/2019/page/11/index.html","32a365bfba92d7240a9ced82c126823f"],["/archives/2019/page/2/index.html","077aa6d5dd1c7aad1474c37c337de52e"],["/archives/2019/page/3/index.html","21010cab6eb0f6cc1978f134d77ee559"],["/archives/2019/page/4/index.html","b89f4237a9c22f9f40d381f916f9cd64"],["/archives/2019/page/5/index.html","6884b773766e2a67e6f34f2b9b3eab57"],["/archives/2019/page/6/index.html","ef65539622d7c339033f4d537c5251d1"],["/archives/2019/page/7/index.html","70739f6be19c0439614c802319102f32"],["/archives/2019/page/8/index.html","170fc8e1e226455fcecc3ad01ac14f69"],["/archives/2019/page/9/index.html","6d992f4d2ac3cf1ffdd6d3acbf8f72d8"],["/archives/2022/08/index.html","996f1abc0e20c7888f3086008ab63c96"],["/archives/2022/index.html","5a2e8db112acfaa4ec33da7b539e3456"],["/archives/2024/11/index.html","90b09368590bdad4c6dbcf2e1b5cc732"],["/archives/2024/index.html","88bd03117ed9d38a876381ced866a28a"],["/archives/index.html","3a4655f7c727811249289d7b4d9da1d2"],["/archives/page/10/index.html","d88ff579f357676719f9934f8fc5c6cf"],["/archives/page/11/index.html","a301b4b6dee91abb622f27ff2923e3b4"],["/archives/page/12/index.html","2352d0f8bbc73c4b2fd224ad9b965a6b"],["/archives/page/2/index.html","640d5bf5c6d063171fa5627b633a1b5d"],["/archives/page/3/index.html","c517baa620aeed1ace8cfd6f14a16240"],["/archives/page/4/index.html","5202e772e9ef7259b5bcb2b0bb41304c"],["/archives/page/5/index.html","d62f249acf31565722c989b7d048effd"],["/archives/page/6/index.html","dc3888c7f0a295136c073e1e664266f0"],["/archives/page/7/index.html","4a5f76f36f25ac39a3f10d6023099e56"],["/archives/page/8/index.html","ab4dd6fb970b7eec6951fc96649802ad"],["/archives/page/9/index.html","ccbf7198bd1382d5273a67f9f071a232"],["/assets/algolia/algoliasearch.js","55c4c6888d17b083cab8dbbfc8786d35"],["/assets/algolia/algoliasearch.min.js","b8621815b8afc3308ded7e37675d2005"],["/assets/algolia/algoliasearchLite.js","e886c79bd96a5aaf9f29bb0cf221fcd7"],["/assets/algolia/algoliasearchLite.min.js","7d5597864c7ea31c9161e8588dd9d06a"],["/categories/docker/index.html","740df9ef750e7f40496da5d6949d528c"],["/categories/dxz/index.html","5ff8d6d8b597d247f815ccb9e286a1ef"],["/categories/index.html","81d78a1ca0d960af2f04a13ec7fd2e97"],["/categories/linux/index.html","0d28915fc7bced540a20f795fa9c1b81"],["/categories/python/index.html","27d3396025012fda69c7c4287fa4d0f6"],["/categories/tensorflow/index.html","694d9ed0b0002c9264e7d72f9f14985c"],["/categories/图片分类/index.html","5b7664c50130ad5acc4027df4144e12e"],["/categories/工具/index.html","12f046d542cd9e3a53a16c042c2eadb6"],["/categories/工具/page/2/index.html","f01c291ac6d3a2d7619cc46401f101ce"],["/categories/强化学习/index.html","8452e774f24603527422c40496a24840"],["/categories/数据集/index.html","8bd2a43e679e864be9e74eb1b7fd50b5"],["/categories/日语/index.html","c942fd668832a38e511252e55253d9cc"],["/categories/日语/page/2/index.html","11fc143cd855fb37dc3087fc384a6f91"],["/categories/机器学习/index.html","2ca470dbb58c3dfbb9720d26fc602e85"],["/categories/深度学习/index.html","ef9c86212082645ecc97ea461abb69f0"],["/categories/深度学习/page/2/index.html","9c99adc46256e8f99cd60b5eed2dd041"],["/categories/深度学习环境配置/index.html","3655eec65cc77c9e70f75ca765c29541"],["/categories/深度学习移植/index.html","9688af8d9171d6227c6ea541c9c2895a"],["/categories/计算机视觉/index.html","b2ab75b63bc67282a69583f831616521"],["/categories/读书笔记/index.html","93f6564b55f4ce0ea03539045846dd3d"],["/css/main.css","355854c303954bdc6cfc52f6a11660d0"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","2424328c05274b79d77d4e1bff7e83a1"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","7e629bd12aed1a84a36f57a202e2f279"],["/page/11/index.html","6c10ed9b3cca2197fec3a9fde77e9ea1"],["/page/12/index.html","22b7eea6fbae2ed6f153eaf38f2f8ab0"],["/page/2/index.html","92c6a399eac15cee2b342c1651e3f031"],["/page/3/index.html","80bbdc325b4387f81aa2a63194f96dbb"],["/page/4/index.html","592e5a31a026227aad177e64811df187"],["/page/5/index.html","a696369fdf3c1535d8ce16c6c93a52ac"],["/page/6/index.html","60d8ae92b2d6f71bdd2e434fbe6a184a"],["/page/7/index.html","98f815b4edef634250c9be45c1c23591"],["/page/8/index.html","5a3029045c884bf3b061d240b0e79fc2"],["/page/9/index.html","caabe1cd090269aaf5c5703a171e74e5"],["/sw-register.js","79924e0df15ab9e5d6af64b8e9bc2e61"],["/tags/AlexNet/index.html","62bfcb0eca8bb631794338edf62b848a"],["/tags/CNN/index.html","27b622b61e5d3c40a4d3921c09612111"],["/tags/DCGAN/index.html","f2dce7487fae2bfe2f892a7929cd51e9"],["/tags/DDPG/index.html","bd9dc1632604937842f1d26226c0bc9e"],["/tags/DDQN/index.html","0c6a0f16d0fdfe83b946cf1af1e32006"],["/tags/DQN/index.html","d7738d9762265d2ef5d938746507c0d1"],["/tags/GAN/index.html","c7e396eb7e9961a995e72059943dde12"],["/tags/IRL/index.html","6aacc4e809e177beabc4d2ec18b922fb"],["/tags/LSTM/index.html","ac7305d3c3111f6c0214999e57c6876f"],["/tags/LeNet/index.html","158321d3ea0ebd468d39c83983f78719"],["/tags/MC/index.html","50a06c769d1ba2d8a7bdef5fd58fd6ab"],["/tags/PCA/index.html","b0eb7eabf713f203ffc8e4e72b633871"],["/tags/PG/index.html","96fca5ccd6a521d4ce60a40ab4aacdaf"],["/tags/PG3/index.html","32b5fcb24038e98f4ec3b266caaef5d3"],["/tags/PIL/index.html","98acff0edcd5391c06c41bf6f9e8ee45"],["/tags/R/index.html","b0f90fe6cb2db2800ce4f4d46fb13ca6"],["/tags/RNASeq数据下载处理全流程/index.html","10f7684d5ba671aa7f03a2e59c628bcc"],["/tags/RNN/index.html","d8215525e8f5aef41c81a259f7a8d09f"],["/tags/SVC/index.html","fc39b2ac8744cd34c39fe05a2cfec313"],["/tags/SVD/index.html","85c5bf55a1129c44341bb038e0209d17"],["/tags/SVM/index.html","9ab7844092c5f7835f7044d55db3f08a"],["/tags/TCP/index.html","947cfdf58c87014cedfe676e57f25898"],["/tags/TD/index.html","3c26f46b56a358e8b8fc1a1f8afa8f5f"],["/tags/TD3/index.html","de3f6c4872de44a7c3b1ce216cd0db68"],["/tags/VGG/index.html","12ca62011302a7eb7a7b040bd7093356"],["/tags/amd配置/index.html","20f5d0a9ea288d474cd54da6dc9daa5b"],["/tags/anconda/index.html","8b63919ab00a92a1379af5e66b89ee92"],["/tags/conda常用命令/index.html","d8c0156833b5fa3ed6d2b8dd43697e0d"],["/tags/cuda配置/index.html","3f9fcf8de6a36e24ade460424577bc4e"],["/tags/docker-ldap-mysql-arm64/index.html","3646b4bfba31592fb29df47d19ac88af"],["/tags/docker-ldap-mysql/index.html","8bf7b5a458e191bb121648aa4a011a5e"],["/tags/docker代理/index.html","b96819d7be84727e13db238ce39fa836"],["/tags/docker安装/index.html","23a3f450f283282653bb7be46b748b2c"],["/tags/docker容器挂载硬盘/index.html","dec496011176412f3f1300c28b35583e"],["/tags/ffmpeg/index.html","f2a7dfaa4872fa76845e5dc9ac6b7b63"],["/tags/github上传代码/index.html","bd41093c672c1d1057afa470184a0c8c"],["/tags/hexo/index.html","502a85e9e648113f259a238feaf78394"],["/tags/index.html","3c1f2d82377128ea6873926bec22f0b6"],["/tags/java调用C/index.html","116b4479c38a7ee8512f964e28cb01b0"],["/tags/kaldi/index.html","ba63a487e672205dd3baea86e161a02e"],["/tags/linux命令/index.html","fed09bcf8369c85210054cf801eb9a17"],["/tags/mamba/index.html","75c50f9f7796cb5a7addd7ebb75f2d3f"],["/tags/markdown/index.html","15b18624704b44909be7018c15b92dee"],["/tags/matplotlib/index.html","c9a8ce4d24d27e81bf28ed1b40f4f1c5"],["/tags/numpy/index.html","969c4d7fa251ba2b3f0d7d7b24235eac"],["/tags/opencv/index.html","888da49f9088e6477ae3453102eb53d2"],["/tags/pandas/index.html","6d889e910f6d94ab2ab1c2a90d785ded"],["/tags/qq/index.html","88380146edc8e0e5929a29570cb0da32"],["/tags/requests库/index.html","1effab677e4e445103d65e5f2911b6f6"],["/tags/rust-多平台demo/index.html","2631d30862cbefa8b13c989a22a8a3bf"],["/tags/sacred/index.html","db1648a1c69769c4a19a874ea553c6c5"],["/tags/ssh-远程连接docker/index.html","c4f54b6989417838e52ae90fe8fe8965"],["/tags/tflite编译/index.html","a4c168927a92c383b4633686e4696c43"],["/tags/tflite转换/index.html","493a5da01587ed688eea6daa16f593ec"],["/tags/torch和apex安装/index.html","7148a4d433191eaac31a66d83d791625"],["/tags/vscode/index.html","6afd2e83b1c504730d5da0c46cda2e51"],["/tags/wsl/index.html","7e60e71d3869797eb071e9fdad433ef2"],["/tags/zsh/index.html","f3165217da1597dc752126375d1bc715"],["/tags/代理/index.html","9c9918962223d36a15654b51364b1820"],["/tags/决策树/index.html","42494191faf6464a42635f7ce74bd149"],["/tags/函数/index.html","315f129002cd4700de0621b46df3ca10"],["/tags/列表推导式/index.html","2a840d1a4b11f2cb50928ea3e94af1af"],["/tags/助词/index.html","3ae50c1bb4223f728eac5aab0b069a37"],["/tags/包/index.html","48ea82967fd73f05a3077ccedce2a3fa"],["/tags/卷积神经网络/index.html","052b9788e2aeb3a862df5eabcef14cab"],["/tags/双系统安装/index.html","cb1256104c640f4e545889ebc8e8d28c"],["/tags/反向传播/index.html","1cceb73f759bcfb1f3219441651214d3"],["/tags/句型/index.html","25d0f818ac92b958ba349792fd773dd2"],["/tags/可视化/index.html","960603fb52a20838fef76332bcd72e32"],["/tags/哲学/index.html","97b037994b39985aac2e06b0fe78a122"],["/tags/图像美化/index.html","242a4d82d13aab55d1375994f1baf448"],["/tags/图床/index.html","81ca4b1857358be5292b2c2c4af06f71"],["/tags/多继承/index.html","b2778112d186034603ccd0e27e45a5d5"],["/tags/工具/index.html","fb0da97391a5af893d34a7d4a8698dbe"],["/tags/异常/index.html","8b4f4245b48a1145c15aa8fdb410b8b9"],["/tags/强化学习/index.html","72c2c96b7963043a2f22a74aa4083bc6"],["/tags/心理学/index.html","f0982da46b54d1d2761f8e497834601b"],["/tags/感知器/index.html","cdebbc76de96e99b6a3a7c8260f76f4f"],["/tags/换源/index.html","53bdcf604e32829f5683a3a9480a69e4"],["/tags/描述器/index.html","51b1377350d8ff7a342d10f1866921ab"],["/tags/敬语/index.html","ccdcb4637a0c216693ccc6ba0d31cba4"],["/tags/数据集/index.html","6b9dc3be14a66dad8aa6590cbed3e827"],["/tags/文件/index.html","8d7ca256d3d941dab9119776aa2deaca"],["/tags/服务器配置LDAP/index.html","98297761ec6c1d3fddacfbb7979f6e2e"],["/tags/机器学习/index.html","634a04c705a0864ca37aca26201c5717"],["/tags/梯度下降/index.html","754af078b77d75dd3a434d9a578a3941"],["/tags/模块/index.html","5b262538f947eec7f38f80f55b12ea68"],["/tags/正则/index.html","f13b2dd9b6929b30743f34cd98b5696d"],["/tags/激活函数/index.html","2bd857ef57b3fd7d2347a298880cdfb3"],["/tags/点击预估/index.html","65483f9316cac60a44ffccb9d87c32bf"],["/tags/爬虫/index.html","ce7367c30487bc610477469013e36077"],["/tags/生成器/index.html","78be16a0b1b15b3245b26f07ba5d1125"],["/tags/类/index.html","c81f0927d7e31783fc71d40fb2142276"],["/tags/线性回归/index.html","a48a4dd02520a721834b9163fecf3ae7"],["/tags/经济学/index.html","5015bbb2f0a357d2709275a5415ae710"],["/tags/聚类/index.html","3828e1efbfe1d0bf3936a18aaa465195"],["/tags/装饰器/index.html","becf945b66344824fa5e5eb7e76335bd"],["/tags/词型变换/index.html","075f7cbb526d7e5e247e625f67de374b"],["/tags/语义分割/index.html","a0e2031bc0de812e4eed1104da32d3cb"],["/tags/语法/index.html","3c625406e88daab1220dc664c479fdbd"],["/tags/语法/page/2/index.html","8cff496f9c8b24c46ca1d8389af1b176"],["/tags/迭代器/index.html","9fa320f452fe6ca01b0aff1ec026fe11"],["/tags/逻辑回归/index.html","42187ed24383ab2b1883a9db2a9ea3ac"],["/tags/随机森林/index.html","c017c542c4b2fb5bc44fb922c9d9ceba"],["/tags/魔方方法/index.html","a4d72708cb4fa2ab98bca0cd5c019360"],["/uploads/avatar.jpg","6d55fa8cd0b7d8a39e74303e423282fc"],["/uploads/backGround.jpg","2b69f7d28ee2868be12c92040b16a187"]];
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
